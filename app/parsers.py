__author__ = 'peter'

import json
from datetime import datetime

import re
import os
from app.models import \
    User, \
    Genome, \
    MistTest, \
    MistMarker, \
    MistAllele, \
    MistTestType, \
    MistMarkerResult, \
    MistMetadataResult
from app import logger


class MistJSONParser:
    """
    This class helps parse MIST JSON output and load it into the SISTR database.

    It is assuming that:

    - each MIST JSON file has data for only a single strain
    - there may be multiple tests
    - the test should exist within the database
    - there may be metadata for the test

    """

    def __init__(self, session, user, json_path):
        """
        Initialize a MistJSONParser object in order to parse MIST JSON output
        into the database.

        Args:
            session (sqlalchemy.orm.session.Session): SQLAlchemy scoped :class:`Session` instance
            user (app.models.User): :class:`User` instance that the parsed MIST results
                and metadata will be assigned to
            json_path (str): Absolute path to the MIST JSON output file
        """
        from sqlalchemy.orm.scoping import scoped_session

        assert isinstance(session, scoped_session)
        assert isinstance(user, User)

        assert os.path.exists(json_path)
        # assert that the user exists within the database
        assert user == session.query(User).filter_by(name=user.name).first()

        self.session = session
        self.json_path = json_path
        self.user = user
        self.mist_json = json.load(open(self.json_path))
        self.strain = self.mist_json['Results'][0]['Strain']
        self.genome = self.__get_genome()


    def __get_genome(self):
        """
        Get Genome object from DB corresponding to a strain/genome name and a User.

        Returns:
            app.models.Genome: :class:`Genome` object in MIST JSON output file
        Warning:
            If genome does not exist in the DB for the `self.user` then a new
            genome is created
        """
        genome = self.session.query(Genome).filter_by(name=self.strain, user=self.user).first()
        if genome is None:
            logger.warn('Genome {0} does not exist for user {1}. Adding genome to database'.format(
                self.strain,
                self.user))

            genome = Genome(name=self.strain,
                            user=self.user,
                            time_uploaded=datetime.utcnow())
            try:
                self.session.add(genome)
                self.session.commit()
            except:
                self.session.rollback()
        return genome

    def parse_all_marker_results(self):
        self.test_result_dict = self.mist_json['Results'][0]['TestResults']
        for test_name in self.test_result_dict.keys():
            mist_test = self.session.query(MistTest).filter_by(name=test_name).first()
            if mist_test is not None:
                test_results = self.test_result_dict[test_name]
                if mist_test.type == MistTestType.allelic:
                    self.__parse_allelic_marker_results(mist_test, test_results)
                else:
                    self.__parse_non_allelic_marker_results(mist_test, test_results)
            else:
                logger.warn('Test {0} does not exist in the database! User: {1} | MIST JSON {2}'.format(
                    test_name,
                    self.user.name,
                    self.json_path))

    def __get_corrected_allele_seq(self, query_aln, subject_aln):
        """
        Get the corrected allele sequence for a subject BLAST alignment with
        respect to a query BLAST alignment.
        If there are 3 or more contiguous gaps in either alignment then the
        gap is considered to be real and a novel allele sequence is returned.
        Otherwise, gaps in the query sequence are not included in the
        corrected allele sequence and gaps in the subject sequence are changed
        to whatever nucleotide the query alignment has at that position.

        Args:
            query_aln (str): Query allele BLAST sequence alignment
            subject_aln (str): Subject genome allele BLAST sequence alignment
        Returns:
            str: Corrected allele nucleotide sequence
        Note:
            This allele sequence correction method works best for 454 data.
            Illumina tends to be very clean unless the coverage is very low.
        """
        long_gaps_subj = set([y for x in re.finditer(r'-{3,}', subject_aln) for y in range(x.start(), x.end())])
        long_gaps_query = set([y for x in re.finditer(r'-{3,}', query_aln) for y in range(x.start(), x.end())])
        corrected_subject_seq = []
        for i, t in enumerate(zip(query_aln, subject_aln)):
            if i in long_gaps_subj:
                continue
            if i in long_gaps_query:
                corrected_subject_seq.append(t[1])
                continue
            if t[0] == '-':
                continue
            if t[1] != '-':
                corrected_subject_seq.append(t[1])
            else:
                corrected_subject_seq.append(t[0])
        return ''.join(corrected_subject_seq)

    def __add_novel_mist_allele(self, mist_marker, allele_seq):
        """
        Add a novel allele to the database with an allele number/name of the
        number of alleles + 1.
        E.g. if there are 10 alleles in for a marker then the novel allele
        will be allele 11.

        Args:
            mist_marker (app.models.MistMarker): :class:`MistMarker` object
                to which the novel allele will be assigned.
            allele_seq (str): Novel allele nucleotide sequence.
        Returns:
            app.models.MistAllele: object of novel allele
        """

        assert isinstance(mist_marker, MistMarker)
        if not isinstance(allele_seq, str):
            logger.warn('allele_seq is NOT isinstance of str for marker {marker}\n{allele_seq}'.format(
                marker=mist_marker.name,
                allele_seq=allele_seq))
            allele_seq = str(allele_seq)

        new_allele_num = mist_marker.alleles.count() + 1
        mist_allele = MistAllele(name=str(new_allele_num),
                                 seq=allele_seq,
                                 marker=mist_marker,
                                 test=mist_marker.test,
                                 timestamp=datetime.utcnow())
        logger.info('Adding novel allele for marker {0} as allele {1} for test {2}'.format(
            mist_marker.name,
            new_allele_num,
            mist_marker.test.name))
        try:
            self.session.add(mist_allele)
            self.session.commit()
        except:
            self.session.rollback()
        mist_allele = mist_marker.alleles.filter_by(seq=allele_seq).first()
        assert isinstance(mist_allele, MistAllele)
        return mist_allele

    def __get_mist_allele(self, mist_marker, allele_seq):
        """
        Get the MistAllele for a potentially novel allele sequence.
        Search the database for the allele with the same sequence first.

        Args:
            mist_marker (app.models.MistMarker): :class:`MistMarker` object
            allele_seq (str): novel allele sequence
        Returns:
            app.model.MistAllele: :class:`MistAllele` object
        """
        assert isinstance(mist_marker, MistMarker)

        mist_allele = mist_marker.alleles.filter_by(seq=allele_seq).first()
        if mist_allele is None:
            mist_allele = self.__add_novel_mist_allele(mist_marker, allele_seq)

        return mist_allele

    def __parse_allelic_marker_result(self, marker_results, mist_marker):
        """
        Parse allelic MIST marker match result.
        Add novel alleles to the database if they are found.

        Args:
            marker_results (dict): MIST marker result dictionary
            mist_marker (app.models.MistMarker): :class:`MistMarker` object
        Returns:
            app.models.MistMarkerResult: MIST marker result object
        """

        blast_results = marker_results['BlastResults']
        allele_match = marker_results['AlleleMatch']
        marker_call = marker_results['MarkerCall']
        is_truncated = marker_results['IsContigTruncation']
        is_missing = blast_results is None
        has_potential_homopolymer_errors = False

        # perfect match found
        if marker_call != '':
            result = marker_call
        # if truncated just return the closest match
        elif is_truncated:
            logger.info('Truncated allele for marker {0} for genome {1}'.format(
                mist_marker.name,
                self.genome.name))
            result = allele_match
        # match not found
        elif is_missing:
            logger.info('Allele missing for marker {0} for genome {1}'.format(
                mist_marker.name,
                self.genome.name))
            result = None
        # potentially novel allele found
        else:
            logger.info('Allele found with mismatches and/or gaps for marker {0} for genome {1}'.format(
                mist_marker.name,
                self.genome.name))
            mismatches = blast_results['Mismatches']
            gaps = blast_results['Gaps']
            qlen = blast_results['QueryLength']
            aln_len = blast_results['AlignmentLength']
            amplicon = marker_results['Amplicon']
            saln = blast_results['SubjAln']
            qaln = blast_results['QueryAln']
            long_gaps_subj = set([y for x in re.finditer(r'-{3,}', saln) for y in range(x.start(), x.end())])
            long_gaps_query = set([y for x in re.finditer(r'-{3,}', qaln) for y in range(x.start(), x.end())])
            # match found with gaps, but otherwise full length, not truncated, no mismatches
            # determine if there are contiguous gaps 3+ in length
            # if there aren't any long gaps then assume that the
            # closest matching allele is the real result
            if (mismatches == 0) and (gaps > 0) and (aln_len >= qlen) \
                and ((len(long_gaps_subj) < 3) or (len(long_gaps_query) < 3)):
                logger.info('Allele found with gaps and no mismatches for marker {0} for genome {1}.'.format(
                    mist_marker.name,
                    self.genome.name))
                logger.info('Assuming homopolymer errors and closest matching allele is actual match.')
                result = allele_match
                has_potential_homopolymer_errors = True

            elif mismatches > 0 and gaps == 0 and len(amplicon) == qlen:
                logger.info('Potentially novel sequence for marker {marker} result.'.format(
                    marker=mist_marker.name))
                logger.info('0 gaps, amplicon length == query length, {mismatches} mismatches'.format(
                    mismatches=mismatches))
                mist_allele = self.__get_mist_allele(mist_marker, amplicon)
                result = mist_allele.name

            elif mismatches >= 0 and gaps > 0 and aln_len >= qlen:
                logger.info('Getting corrected allele sequence for marker {marker} result.'.format(
                    marker=mist_marker.name))
                corrected_sseq = self.__get_corrected_allele_seq(qaln, saln)
                logger.info(
                    'May add novel allele for subject sequence alignment that contains mismatches and gaps for marker {marker}.'.format(
                        marker=mist_marker.name))
                mist_allele = self.__get_mist_allele(mist_marker, corrected_sseq)
                result = mist_allele.name
            else:
                logger.info('Allele for marker {marker} may be unique as it does not match the other conditions'.format(
                    marker=mist_marker.name))
                mist_allele = self.__get_mist_allele(mist_marker, amplicon)
                result = mist_allele.name

        return MistMarkerResult(result=result,
                                marker=mist_marker,
                                test=mist_marker.test,
                                genome=self.genome,
                                mist_json=marker_results,
                                is_contig_truncated=is_truncated,
                                is_missing=is_missing,
                                user=self.user,
                                has_potential_homopolymer_errors=has_potential_homopolymer_errors,
                                timestamp=datetime.utcnow())

    def __parse_allelic_marker_results(self, mist_test, test_results):
        '''
        Parse allelic MIST marker results from MIST JSON output.
        Return a list of MistMarkerResult objects.

        Args:
            mist_test (app.models.MistTest): :class:`MistTest` object to save
                the marker results under
            test_results (dict): MIST test marker results dict
        '''

        mist_results = []

        for marker, marker_results in test_results.iteritems():
            mist_marker = self.session.query(MistMarker).filter_by(name=marker, test=mist_test).first()
            if mist_marker is not None:
                marker_result = self.__parse_allelic_marker_result(marker_results, mist_marker)
                mist_results.append(marker_result)
            else:
                marker_not_found_error = 'MIST marker {0} for test {1} does not exist in the database.'.format(
                    marker,
                    mist_test.name)
                raise Exception(marker_not_found_error)

        logger.info('{0} allelic marker results parsed for test {1} from MIST JSON results for genome {2}'.format(
            len(mist_results),
            mist_test.name,
            self.genome.name))
        try:
            self.session.add_all(mist_results)
            self.session.commit()
        except:
            logger.error(
                'Could not add MIST results for test {0} for genome {1} (user:{user}) from MIST output {2}. Rolling back session.'.format(
                    mist_test.name,
                    self.genome,
                    self.json_path,
                    user=self.user.name
                ))
            self.session.rollback()

    def __parse_non_allelic_marker_result(self, marker_results, mist_marker):
        blast_results = marker_results['BlastResults']
        marker_call = marker_results['MarkerCall']
        is_truncated = marker_results['IsContigTruncation']
        is_missing = blast_results is None
        has_potential_homopolymer_errors = False

        return MistMarkerResult(result=marker_call,
                                marker=mist_marker,
                                test=mist_marker.test,
                                genome=self.genome,
                                mist_json=marker_results,
                                is_contig_truncated=is_truncated,
                                is_missing=is_missing,
                                user=self.user,
                                has_potential_homopolymer_errors=has_potential_homopolymer_errors,
                                timestamp=datetime.utcnow())

    def __parse_non_allelic_marker_results(self, mist_test, test_results):
        """

        @type mist_test: MistTest
        @type test_results: dict
        @param mist_test:
        @param test_results:
        """
        isinstance(mist_test, MistTest)
        isinstance(test_results, dict)

        mist_results = []

        for marker, marker_results in test_results.iteritems():
            mist_marker = self.session.query(MistMarker).filter_by(name=marker, test=mist_test).first()
            if mist_marker is not None:
                marker_result = self.__parse_non_allelic_marker_result(marker_results, mist_marker)
                mist_results.append(marker_result)
            else:
                marker_not_found_error = 'MIST marker {0} for test {1} does not exist in the database.'.format(
                    marker,
                    mist_test.name)
                raise Exception(marker_not_found_error)

        logger.info('{0} marker results parsed for test {1} from MIST JSON results for genome {2}'.format(
            len(mist_results),
            mist_test.name,
            self.genome.name))

        try:
            self.session.add_all(mist_results)
            self.session.commit()
        except:
            self.session.rollback()

    def __parse_mist_test_metadata(self, mist_test):
        test_metadata_list = self.metadata_dict[mist_test.name]
        md_dict = {}
        for test_metadata in test_metadata_list:
            for attr, value in test_metadata.iteritems():
                if value == '':
                    if attr not in md_dict:
                        md_dict[attr] = set()
                    continue
                if attr in md_dict:
                    md_dict[attr].add(value)
                else:
                    md_dict[attr] = set([value])
        test_metadata_attrs = {}
        for attr, values in md_dict.iteritems():
            test_metadata_attrs[attr] = '|'.join(values)
        mist_metadata_results = MistMetadataResult(attrs=test_metadata_attrs,
                                                   timestamp=datetime.utcnow(),
                                                   test=mist_test,
                                                   genome=self.genome)
        return mist_metadata_results

    def parse_all_test_metadata(self):
        self.metadata_dict = self.mist_json['Results'][0]['Metadata']
        for test_name in self.metadata_dict.keys():
            mist_test = self.session.query(MistTest).filter_by(name=test_name).first()
            if mist_test is not None:
                mist_metadata_results = self.__parse_mist_test_metadata(mist_test)
                self.session.add(mist_metadata_results)
                self.session.commit()
            else:
                logger.warn('Test {0} does not exist in the database! User: {1} | MIST JSON {2}'.format(
                    test_name,
                    self.user.name,
                    self.json_path))

    def parse_mist_tests(self):
        tests_types = self.mist_json['TestTypes']
        mist_tests = {}
        for test_name, test_type_string in tests_types.iteritems():
            mist_tests[test_name] = MistTest(name=test_name, type=MistTestType.from_string(test_type_string))

        self.session.add_all([mist_test for name, mist_test in mist_tests.iteritems()])
        self.session.commit()

        test_markers = self.mist_json['TestMarkers']
        mist_alleles = []
        for test_name, markers in test_markers.iteritems():
            mist_test = mist_tests[test_name]
            for marker_dict in markers:
                marker_name = marker_dict['Name']
                mist_marker = MistMarker(name=marker_name, test=mist_test)

                self.session.add(mist_marker)
                self.session.commit()

                if marker_dict['Alleles'] is not None:
                    for allele in marker_dict['Alleles']:
                        allele_name = allele['Header']
                        allele_seq = allele['Sequence']
                        mist_allele = {'name': allele_name,
                                       'seq': allele_seq,
                                       'timestamp': datetime.utcnow(),
                                       'marker_id': mist_marker.id,
                                       'test_id': mist_test.id}
                        mist_alleles.append(mist_allele)

        if len(mist_alleles) > 0:
            self.session.execute(MistAllele.__table__.insert(), mist_alleles)
            self.session.commit()
