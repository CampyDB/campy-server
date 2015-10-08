'''
Celery tasks
============

Celery is used to execute various tasks ranging from writing updated allele FASTA files to
running analysis pipelines for user-uploaded genomes.
'''
from __future__ import absolute_import

from datetime import datetime
from subprocess import PIPE, Popen
from cStringIO import StringIO
import shutil
import os
from Bio import SeqIO
from celery import chain, Celery

from . import session, logger
from .models import Genome, Contig, User, MistTest, MistAllele, UserRole, MistTestType
from .db_loaders import DefaultDataLoader
from .parsers import MistJSONParser


#: set: valid IUPAC nucleotide characters for checking FASTA format
VALID_NUCLEOTIDES = {'A', 'a',
                     'C', 'c',
                     'G', 'g',
                     'T', 't',
                     'R', 'r',
                     'Y', 'y',
                     'S', 's',
                     'W', 'w',
                     'K', 'k',
                     'M', 'm',
                     'B', 'b',
                     'D', 'd',
                     'H', 'h',
                     'V', 'v',
                     'N', 'n',
                     'X', 'x', } # X for masked nucleotides


def traverse_chained_celery_tasks(node):
    """
    Traverse chained Celery tasks
    =============================

    Get Celery task chain subtasks.

    Args:
        node: Last subtask in task chain
    """
    while node.parent:
        yield node
        node = node.parent
    yield node


def get_chain_tasks(chain_task_node):
    """
    Get list of subtasks belonging to a Celery task chain

    Args:
        chain_task_node: Last subtask in task chain

    Returns:
        list: subtasks in order of execution
    """
    return [t for t in reversed(list(traverse_chained_celery_tasks(chain_task_node)))]


def check_chain_for_failed_tasks(chain_task_node):
    """
    Check if any tasks within a task chain have failed.

    Args:
        chain_task_node: Last subtask in task chain

    Returns:
        bool: If a subtask has failed, return the subtask object, otherwise return None
    """
    for t in traverse_chained_celery_tasks(chain_task_node):
        if t.failed():
            return t
    return None


def analyse_genome(app, fasta_str, user_name, genome_name):
    """
    Analyse a user uploaded genome
    ==============================

    Start a Celery chained task that does the following:

     - check that FASTA file string is valid FASTA format
     - add Genome_ and contigs to DB
     - create a temp analysis folder for the Genome_ and User_
     - write a temp FASTA file to the temp analysis folder
     - run QUAST_
     - parse QUAST_ quality stats into DB
     - run MIST_
     - from MIST_ output, parse all MistMetadataResult_ and MistMarkerResult_ into DB
     - determine cgMLST cluster membership for Genome_
     - determine SerovarPrediction_ using antigen BLAST search and comparison to cgMLST clusters
     - clean up temp analysis folder

    Notes:
        A Celery task chain object is returned so that it can be iterated to show the current
        status of the tasks within the chain and if any subtasks have failed.

    Args:
        fasta_str (str): User uploaded genome FASTA file contents string
        user_name (str): User name
        genome_name (str): Genome name

    Returns:
        object: Chain task object
    """
    temp_dir = app.config['TEMP_DIR']
    user_temp_dir = os.path.join(temp_dir, 'SISTR', '{0}-{1}'.format(user_name, genome_name))
    quast_bin_path = app.config['QUAST_BIN_PATH']

    mist_bin = app.config['MIST_BIN_PATH']
    mist_alleles_dir = app.config['MIST_ALLELES_DIR']
    mist_markers_files = app.config['MIST_MARKERS_FILES']

    public_username = app.config['PUBLIC_SISTR_USER_NAME']

    chain_result = chain(
        fasta_format_check.s(fasta_str, user_name, genome_name),
        add_genome_to_db.s(user_name, genome_name),
        create_temp_genome_analysis_directory.s(user_name, user_temp_dir),
        write_temp_genome_fasta.s(genome_name, fasta_str),
        parse_quast_results.s(user_name, genome_name),
        run_mist.s(user_name, user_temp_dir, mist_bin, mist_alleles_dir, mist_markers_files),
        parse_mist_results.s(user_name),
        cleanup_and_set_genome_analyzed.s(user_name, genome_name))()

    task_names = ["FASTA format check",
                  "Add genome to database",
                  "Create temp genome analysis directory",
                  "Write temp genome FASTA",
                  "Run QUAST ",
                  "Parse QUAST results",
                  "Run MIST in silico typing assays",
                  "Parse MIST in silico typing results",
                  "Assign cgMLST clusters",
                  "Refine serovar prediction",
                  "Cleanup temp analysis files"]

    return chain_result, task_names


def make_celery(flask_app=None, config_name='prod'):
    from . import create_app

    flask_app = flask_app or create_app(config_name)
    c = Celery(flask_app.import_name)
    c.app = flask_app
    logger.info('celery {} flask app {}'.format(c, c.app))
    c.config_from_object('celeryconf')
    TaskBase = c.Task

    class ContextTask(TaskBase):
        abstract = True

        def __call__(self, *args, **kwargs):
            logger.error('ContextTask {}'.format(flask_app))
            with flask_app.app_context():
                logger.error('ContextTask app context {}'.format(flask_app))
                return TaskBase.__call__(self, *args, **kwargs)

    c.Task = ContextTask
    return c


CELERY = make_celery()


@CELERY.task()
def send_email(recipients, subject, body):
    from flask_mail import Message
    from . import mail

    with CELERY.app.app_context():
        with mail.connect() as conn:
            msg = Message(subject=subject,
                          body=body,
                          recipients=recipients)
            conn.send(msg)


@CELERY.task()
def write_mist_alleles():
    """
    Write updated MIST alleles to directory with MIST test marker alleles.
    First write the alleles to a temporary directory then ``shutil.copy`` the FASTA files
    to the alleles directory.

    Todo:
        Check if it's even necessary to write the new allele FASTA files based on timestamp.
    """

    test_query = session \
        .query(MistTest) \
        .filter(MistTest.type == MistTestType.allelic)
    app = CELERY.app
    allele_dir = app.config['MIST_ALLELES_DIR']

    if allele_dir is None or allele_dir == '':
        return

    for mist_test in test_query.all():
        tmp_dir = os.path.join(allele_dir, 'tmp')
        try:
            os.mkdir(tmp_dir)
        except:
            if not os.path.exists(tmp_dir):
                raise IOError('Temp alleles dir for {} could not be created at {}'.format(
                    mist_test,
                    tmp_dir))
            pass
        fasta_paths = []
        for m in mist_test.markers.all():
            fasta_path = os.path.join(tmp_dir, m.name + '.fasta')
            fasta_paths.append(fasta_path)
            with open(fasta_path, 'w') as fout:
                for a in m.alleles.order_by(MistAllele.timestamp).all():
                    fout.write('>{}\n{}\n'.format(a.name, a.seq))

        for fasta_path in fasta_paths:
            shutil.copy(fasta_path, allele_dir)
        shutil.rmtree(tmp_dir)


@CELERY.task()
def delete_old_tmp_users():
    """
    Delete temporary User_ accounts and associated Genome_ and analysis data for temporary
    User_ accounts that are over 2 weeks old.

    Todo:
        Write to logger.info rather than stdout
    """
    dt_2weeks_ago = datetime.fromordinal(datetime.now().toordinal() - 14)
    users = session.query(User).filter(User.role == UserRole.temporary,
                                       User.last_seen <= dt_2weeks_ago).all()
    print 'Deleting temporary {} Users last seen on or before {}'.format(
        len(users),
        dt_2weeks_ago)
    for user in users:
        print 'Deleting {} Genomes from User {}'.format(user.genomes.count(), user)
        for g in user.genomes.all():
            print 'Deleting Genome {}'.format(g)
            session.delete(g)
            session.commit()
        session.delete(user)
        session.commit()


@CELERY.task()
def fasta_format_check(fasta_str, user_name, genome_name):
    """
    FASTA format check
    ==================

    Check that a FASTA file contents string is valid FASTA format.

     - First non-blank line needs to begin with a '>' header character.
     - Sequence can only contain valid IUPAC nucleotide characters

    Args:
        fasta_str (str): FASTA file contents string
        user_name (str): User name
        genome_name (str): Genome name

    Returns:
        str: FASTA file contents string if valid FASTA format

    Raises:
        Exception: If invalid FASTA format
    """
    sio = StringIO(fasta_str)
    header_count = 0
    line_count = 1
    nt_count = 0
    for l in sio.readlines():
        l = l.strip()
        if l == '':
            continue
        if l[0] == '>':
            header_count += 1
            continue
        if header_count == 0 and l[0] != '>':
            error_msg = 'User="{user}";Genome="{genome}": first non-blank line (L:{line_count}) does not contain FASTA header. Line beginning with ">" expected.' \
                .format(line_count=line_count,
                        genome=genome_name,
                        user=user_name)
            logger.error(error_msg)
            raise Exception(error_msg)
        non_nucleotide_chars_in_line = set(l) - VALID_NUCLEOTIDES

        if len(non_nucleotide_chars_in_line) > 0:
            error_msg = 'User="{user}";Genome="{genome}": line {line} contains the following non-nucleotide characters: {non_nt_chars}' \
                .format(genome=genome_name,
                        user=user_name, line=line_count,
                        non_nt_chars=non_nucleotide_chars_in_line)
            logger.error(error_msg)
            raise Exception(error_msg)
        nt_count += len(l)
        line_count += 1

    if nt_count == 0:
        error_msg = 'User="{user}";Genome="{genome}": FASTA string does not contain any nucleotide sequence.'.format(
            genome=genome_name,
            user=user_name)
        logger.error(error_msg)
        raise Exception(error_msg)

    logger.info('User="{user}";Genome="{genome}": valid FASTA format (len={length})'.format(
        user=user_name,
        genome=genome_name,
        length=len(fasta_str)))
    return fasta_str


@CELERY.task()
def add_genome_to_db(fasta_str, user_name, genome_name):
    """
    Add Genome_ and all Contig_ to DB
    =================================

    Add User_ Genome_ and all Contig_ for Genome_ to database.

    Notes:
        BioPython FASTA parser used to parse FASTA string.

    Args:
        fasta_str (str): Genome FASTA file contents
        user_name (str): User name
        genome_name (str): A unique Genome name

    Returns:
        str: Name of genome added to the database

    Raises:
        Exception: if Genome_ or Genome_ Contig_ cannot be added to the DB
    """
    genome_name = Genome.make_unique_name(genome_name, session)
    user = session.query(User).filter(User.name == user_name).first()
    assert user is not None, 'User {0} not found in DB'.format(user_name)
    genome = Genome(name=genome_name,
                    user=user,
                    time_uploaded=datetime.utcnow())

    session.add(genome)
    try:
        session.commit()
        logger.info('Added user {0} genome {1} to DB'.format(user_name, genome_name))
    except:
        session.rollback()
        error_msg = 'Could not add genome {0} of user {1} to DB. Rolling back DB transaction'.format(
            genome_name,
            user_name)
        logger.error(error_msg)
        raise Exception(error_msg)

    contigs = [Contig(name=rec.description,
                      seq=str(rec.seq),
                      genome=genome)
               for rec in SeqIO.parse(StringIO(fasta_str), 'fasta')]

    session.add_all(contigs)
    try:
        session.commit()
        logger.info('Added {0} contigs for genome {1} of user {2} to DB.'.format(
            len(contigs),
            genome_name,
            user_name
        ))
    except:
        session.rollback()
        error_msg = 'Could not add contigs for genome {0} of user {1} to DB. Rolling back DB transaction.'.format(
            genome_name,
            user_name)
        logger.error(error_msg)
        raise Exception(error_msg)
    return genome_name


@CELERY.task()
def create_temp_genome_analysis_directory(genome_name, user_name, user_temp_dir):
    """
    Create temp genome analysis directory
    =====================================

    Create a temporary genome analysis directory for analysis of the user uploaded genome.

    Args:
        genome_name (str): Genome name
        user_name (str): User name
        user_temp_dir (str): Base temporary genome analysis directory

    Returns:
        str: Temporary genome analysis directory

    Raises:
        IOError: if temp analysis directory cannot be created
    """
    user = session.query(User).filter(User.name == user_name).first()
    assert user is not None, 'User {0} not found in DB'.format(user_name)
    try:
        os.makedirs(user_temp_dir)
    except:
        # TODO: if analysis dir cannot be made then retry a little while later or in a different location
        if not os.path.exists(user_temp_dir):
            raise IOError('Temp genome analysis directory cannot be created for User={} and Genome={}.'.format(
                user_name,
                genome_name
            ))
        pass
    return user_temp_dir


@CELERY.task()
def write_temp_genome_fasta(dir_path, genome_name, fasta_str):
    """
    Write temp Genome_ FASTA file
    =============================

    Write a temporary FASTA format file of a Genome_ to a User_ specific analysis directory.

    Args:
        dir_path (str): Temp user analysis directory to write FASTA file to
        genome_name (str): User uploaded genome name
        fasta_str (str): FASTA file contents

    Returns:
        str: File path to the temporary FASTA file that was written
    """
    temp_genome_fasta_path = os.path.join(dir_path, genome_name + '.fasta')
    with open(temp_genome_fasta_path, 'w') as f:
        f.write(fasta_str)
    return temp_genome_fasta_path


@CELERY.task()
def run_quast(fasta_filepath, user_name, genome_name, quast_bin_path):
    """
    Run QUAST_
    ==========

    Run QUAST_ to generate assembly quality stats for a User_ uploaded Genome_.

    Args:
        fasta_filepath (str): Genome FASTA file path
        user_name (str): User name
        genome_name (str): User uploaded genome name

    Returns:
        str: File path of QUAST_ ``transposed_report.tsv``

    Raises:
        Exception: if QUAST_ ``transposed_report.tsv`` does not exist (i.e. not created)
    """
    temp_output_dir = os.path.dirname(fasta_filepath)
    quast_output_dir = os.path.join(temp_output_dir, 'quast-' + genome_name)
    p = Popen([quast_bin_path,
               '--no-plot', # disable plotting since it's unneeded
               '-f', # gene finding
               '-o', os.path.abspath(quast_output_dir),
               os.path.abspath(fasta_filepath)],
              stdout=PIPE,
              stderr=PIPE)
    p.wait()

    quast_report_path = os.path.join(quast_output_dir, 'transposed_report.tsv')

    if os.path.exists(quast_report_path):
        return quast_report_path
    else:
        raise Exception('QUAST report not generated for genome {0} for user {1}. QUAST stdout/stderr:\n{2}\n{3}'.format(
            genome_name,
            user_name,
            p.stdout.read(),
            p.stderr.read()
        ))


@CELERY.task()
def parse_quast_results(quast_output_path, user_name, genome_name):
    """
    Parse QUAST_ output
    ===================

    Parse the QUAST_ assembly stats for a user uploaded Genome_ into the DB.

    Args:
        quast_output_path (str): QUAST output file path
        user_name (str): User name
        genome_name (str): Genome name

    Returns:
        str: Genome name
    """
    ddl = DefaultDataLoader(session)
    ddl.load_assembly_stats(quast_output_path)
    genome = session.query(Genome) \
        .join(Genome.user) \
        .filter(User.name == user_name) \
        .filter(Genome.name == genome_name).first()
    assert genome is not None, 'Genome {0} of user {1} does not exist in the DB'.format(
        genome_name,
        user_name
    )
    assert genome.quality_stats is not None, 'Genome {0} of user {1} does not have QUAST generated quality stats'.format(
        genome_name,
        user_name
    )
    return genome_name


@CELERY.task()
def run_mist(genome_name, user_name, temp_output_dir, mist_bin, mist_alleles_dir, mist_markers_files):
    """
    Run MIST
    ========

    Run MIST on the Genome_ with the following *in silico* assays:

    - SGSA
    - MLST
    - wgMLST_330 (cgMLST with 330 markers)

    Args:
        fasta_filepath (str): File path to temporary FASTA file of User_ uploaded Genome_
        temp_output_dir (str): Temporary analysis directory
        user_name (str): User_ name
        genome_name (str): Genome_ name
        mist_bin (str): Path to MIST.exe
        mist_alleles_dir (str): Path to MIST sequence-typing alelles directory
        mist_markers_files (dict): Dict of MIST test names to MIST markers file paths

    Returns:
        str: MIST JSON output file path

    Raises:
        Exception: if MIST JSON output file does not exist
    """
    temp_genome_fasta_path = os.path.join(temp_output_dir, genome_name + '.fasta')
    mist_temp_dir = os.path.join(temp_output_dir, 'mist_tmp-{0}'.format(genome_name))
    mist_output_filepath = os.path.join(temp_output_dir, 'MIST-{0}.json'.format(genome_name))
    # run MIST on all assays
    p = Popen(['mono',
               os.path.abspath(mist_bin),
               '-c', '1',
               '-T', mist_temp_dir,
               '-j', mist_output_filepath,
               '-a', os.path.abspath(mist_alleles_dir),
               '-t', os.path.abspath(mist_markers_files['SGSA']),
               '-t', os.path.abspath(mist_markers_files['MLST']),
               '-t', os.path.abspath(mist_markers_files['wgMLST_330']),
               temp_genome_fasta_path,
    ])
    p.wait()
    assert os.path.exists(mist_output_filepath), 'MIST output for genome {0} of user {1} does not exist at {2}.'.format(
        genome_name,
        user_name,
        mist_output_filepath
    )
    return mist_output_filepath


@CELERY.task()
def parse_mist_results(mist_output_path, user_name):
    """
    Parse MIST output
    =================

    Parse MistMarkerResult_ and MistMetadataResult_ from MIST_ JSON output.

    Args:
        mist_output_path (str): MIST JSON output file path
        user_name: User name

    Returns:
        str: MIST JSON output file path
    """
    user = session.query(User).filter(User.name == user_name).first()
    assert user is not None, 'User {0} does not exist in the database.'.format(user_name)
    assert os.path.exists(mist_output_path)
    parser = MistJSONParser(session, user, mist_output_path)
    parser.parse_all_marker_results()
    parser.parse_all_test_metadata()
    return mist_output_path


@CELERY.task()
def cleanup_and_set_genome_analyzed(temp_file_path, genome_id):
    """
    Clean up temporary genome analysis data for the user uploaded genome and set Genome_ as analyzed.

    .. code-block:: python

        genome.is_analyzed = True

    Args:
        temp_file_path (str): File path for last file generated in the temporary genome analysis folder
    """
    temp_dir = os.path.dirname(temp_file_path)
    shutil.rmtree(temp_dir)

    genome = session.query(Genome).get(genome_id)
    genome.is_analyzed = True
    session.add(genome)
    session.commit()

    return True
