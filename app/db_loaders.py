from __future__ import absolute_import

__author__ = 'piotr'

from .models import Host, GeographicLocation, Sample, SampleSource, Genome, SequencingInfo
from . import logger
import os

import pandas as pd
from datetime import datetime

import numpy as np

# TODO: Refactor for storing metadata in Sample rather than Genome

class DefaultDataLoader:
    NGS_INFO_FIELDS = ['platform', 'assembler', 'assembler_version', 'coverage']
    LOCATION_FIELDS = ['lat', 'lng', 'region', 'country']
    HOST_FIELD_DICT = {'host_common': 'common_name', 'host_latin': 'latin_name'}
    HOST_FIELDS = ['common_name', 'latin_name']
    BASIC_GENOME_INFO_FIELDS = ['serovar', 'subspecies', 'source_type', 'source_info', 'collection_date']

    QUAST_REPORT_FIELDS_REPLACEMENT_DICT = {
        "# contigs (>= 0 bp)": "contigs_gt_0bp",
        "# contigs (>= 1000 bp)": "contigs_gt_1000bp",
        "Total length (>= 0 bp)": "length_0_bp",
        "Total length (>= 1000 bp)": "length_1000_bp",
        "# contigs": "contigs_gt_500bp",
        "Largest contig": "Largest_contig",
        "Total length": "length_gt_500bp",
        "GC (%)": "GC",
        "N50": "N50",
        "N75": "N75",
        "L50": "L50",
        "L75": "L75",
        "# N's per 100 kbp": "Ns_per_100_kbp",
        "# predicted genes (unique)": "n_genes_unique",
        "# predicted genes (>= 0 bp)": "genes_gt_0bp",
        "# predicted genes (>= 300 bp)": "genes_gt_300bp",
        "# predicted genes (>= 1500 bp)": "genes_gt_1500bp",
        "# predicted genes (>= 3000 bp)": "genes_gt_3000bp"}


    def __init__(self, session):
        """
        Initialize DefaultDataLoader object with SQLAlchemy session

        Args:
            session (sqlalchemy.orm.session.Session): SQLAlchemy DB :class:`Session` instance
        """
        self.session = session


    @staticmethod
    def get_model_objects_from_metadata_dataframe(model_cls, df, fields, session):
        """
        Get the SQLAlchemy model objects corresponding to the data in certain
        fields in a Pandas DataFrame.

        Args:
            model_cls (class): SQLAlchemy ORM model class
            df (pandas.DataFrame): DataFrame instance to retrieve data for
                generating model objects
            fields (list): Fields that may exist in df DataFrame from which
                data will be taken to construct model objects
        Returns:
            tuple: Dict of model object to list of genome names.
                Dict of genome name to model object.
        """
        isin_fields = df.columns.isin(fields)
        if not np.any(isin_fields):
            return (None, {})
        df_subset = df[df.columns[isin_fields]]
        df_subset = df_subset.dropna(how='all')
        df_subset_uq = df_subset[~df_subset.duplicated()]

        row_obj_tuples = []
        for idx in df_subset_uq.index:
            row = df_subset_uq.ix[idx]
            row_dict = row[row.notnull()].to_dict()
            # Query the DB for an item with the same values
            q = session.query(model_cls)
            for k, v in row_dict.iteritems():
                q = q.filter(getattr(model_cls, k) == v)
            model_obj = q.first()
            # if an item with the same values does not exist then create one
            if model_obj is None:
                model_obj = model_cls(**row_dict)
            row_obj_tuples.append((row, model_obj))

        model_obj_genomes = {}
        genome_model_obj = {}
        for row, model_obj in row_obj_tuples:
            df_row_match = df_subset == row
            df_all_match_row = df_row_match.apply(np.all, axis=1)
            df_all_match_row = df_all_match_row[df_all_match_row == True]
            matching_genomes = list(df_all_match_row.index)
            model_obj_genomes[model_obj] = matching_genomes
            for genome in matching_genomes:
                genome_model_obj[genome] = model_obj

        return (model_obj_genomes, genome_model_obj)


    def parse_genome_metadata(self, df, user):
        # get host information
        host_genomes, genome_host = DefaultDataLoader.get_model_objects_from_metadata_dataframe(
            model_cls=Host,
            df=df,
            fields=DefaultDataLoader.HOST_FIELDS,
            session=self.session)
        if host_genomes:
            self.session.add_all(host_genomes.keys())
            self.session.commit()
            # get geographic location information
        geoloc_genomes, genomes_geoloc = DefaultDataLoader.get_model_objects_from_metadata_dataframe(
            model_cls=GeographicLocation,
            df=df,
            fields=DefaultDataLoader.LOCATION_FIELDS,
            session=self.session)
        if geoloc_genomes:
            self.session.add_all(geoloc_genomes.keys())
            self.session.commit()
            # get basic NGS information
        ngs_info_genomes, genome_ngs_info = DefaultDataLoader.get_model_objects_from_metadata_dataframe(
            model_cls=GenomeNGSInfo,
            df=df,
            fields=DefaultDataLoader.NGS_INFO_FIELDS,
            session=self.session)
        if ngs_info_genomes:
            self.session.add_all(ngs_info_genomes.keys())
            self.session.commit()
        df_basic_info = df[df.columns[df.columns.isin(DefaultDataLoader.BASIC_GENOME_INFO_FIELDS)]]
        # Add non-matching metadata fields as misc genome metadata
        all_metadata_fields = DefaultDataLoader.LOCATION_FIELDS + \
                              DefaultDataLoader.HOST_FIELDS + \
                              DefaultDataLoader.BASIC_GENOME_INFO_FIELDS + \
                              DefaultDataLoader.NGS_INFO_FIELDS
        for genome_name in df_basic_info.index:

            row = df_basic_info.ix[genome_name]
            genome = self.session.query(Genome).filter(Genome.name == genome_name).first()
            if genome is None:
                genome = Genome()

            genome_row_dict = row[row.notnull()].to_dict()

            for k, v in genome_row_dict.iteritems():
                genome.__setattr__(k, v)

            genome.name = genome_name
            genome.user = user
            genome.time_uploaded = datetime.utcnow()

            if 'source_info' not in genome_row_dict:
                genome.source_info = None
            if 'source_type' not in genome_row_dict:
                genome.source_type = None
            if 'collection_date' not in genome_row_dict:
                genome.collection_date = None


            if 'serovar' in genome_row_dict:
                genome.serovar = genome_row_dict['serovar']
            else:
                genome.serovar = None

            if genome_name in genome_host:
                genome.host = genome_host[genome_name]
            else:
                genome.host = None

            if genome_name in genomes_geoloc:
                genome.geographic_location = genomes_geoloc[genome_name]
            else:
                genome.geographic_location = None

            if genome_name in genome_ngs_info:
                genome.ngs_info = genome_ngs_info[genome_name]
            else:
                genome.ngs_info = None


            # Add any other misc metadata that doesn't match any of the core metadata fields to an HSTORE
            misc_metadata = {k: str(v) for k, v in df.ix[genome_name].to_dict().iteritems()
                             if k not in all_metadata_fields and not (v is None or pd.isnull(v))}

            q = self.session.query(Genome).filter(Genome.name == genome_name)
            if q.count() > 0:
                q.update({Genome.misc_metadata: misc_metadata}, synchronize_session="fetch")

            self.session.add(genome)
        self.session.commit()

    def load_default_genome_metadata(self, user, genome_metadata_file_path):
        """
        Load basic genome info and metadata into the database from a TSV file.

        Args:
            user (app.models.User): :class:`app.models.User` instance (most likely an admin)
            genome_metadata_file_path (str): Path to a TSV file with genome info and metadata
        """
        df = pd.read_table(genome_metadata_file_path, dtype={'genome': 'string_'})
        df.index = df.genome
        df = df[[x for x in df.columns if x != 'genome']]
        if 'collection_date' in df.columns:
            df.collection_date = pd.to_datetime(df.collection_date).astype(datetime)
            # rename host latin name and common name fields so that the Host model objects can be easily constructed
        df.rename(columns=DefaultDataLoader.HOST_FIELD_DICT, inplace=True)

        self.parse_genome_metadata(df, user)


    def load_genome_clusters(self, user, genome_clusters_file_path, create_new_genome=False):
        df = pd.read_csv(genome_clusters_file_path, dtype={'genome': 'string_'})
        df.index = df.genome
        columns = [x for x in df.columns if x != 'genome']
        df = df[columns]
        cluster_dict = df.transpose().to_dict()
        for genome_name, clusters in cluster_dict.iteritems():
            genome = self.session.query(Genome).filter(Genome.name == genome_name).first()
            if genome is None and not create_new_genome:
                continue
            if genome is None and create_new_genome:
                genome = Genome(name=genome_name,
                                user=user)
                genome.time_uploaded = datetime.utcnow()
            genome.cgmlst_clusters = clusters
            self.session.add(genome)
        self.session.commit()

    @staticmethod
    def get_assembly_stats_dict(assembly_stats_file_path):
        """
        Get a dictionary of genome names to assembly stats from a TSV file
        using Pandas.
        If an original `QUAST <http://bioinf.spbau.ru/quast>`_
        ``transposed_report.tsv`` is provided then the columns are renamed
        to be compatible with `Qviz <https://bitbucket.org/peterk87/qviz>`_ and R.
        Column renaming will not affect columns that are already named
        appropriately for Qviz and R.

        Args:
            assembly_stats_file_path (str): Genome assembly stats file path

        Returns:
            dict: Dictionary of genome names to a dictionary of assembly stats
        """
        # need to ensure that the Assembly column is parsed as a string
        df = pd.read_table(assembly_stats_file_path, dtype={'Assembly': 'string_'})
        df.index = df.Assembly
        df = df[[x for x in df.columns if x != 'Assembly']]
        df.rename(columns=DefaultDataLoader.QUAST_REPORT_FIELDS_REPLACEMENT_DICT, inplace=True)
        return df.transpose().to_dict()


    def load_assembly_stats(self, assembly_stats_file_path):
        """
        Load in genome assembly stats from a file.
        Genome names in the file need to match genome names in the database
        otherwise no info will be added for that genome.
        The assembly stats will be stored as string key-values in the Postgres
        data type HSTORE.
        No checking is done here to ensure that assembly stats are consistent
        across genomes with constrained field names/data.

        Args:
            assembly_stats_file_path (str): Genome assembly stats file path.

        Raises:
            Exception: If assembly stats file not found.
        """
        if os.path.exists(assembly_stats_file_path):
            genome_stats = DefaultDataLoader.get_assembly_stats_dict(assembly_stats_file_path)
        else:
            raise Exception('Assembly stats info file not found. Does not exist at {0}')

        # update genome assembly stats HSTORE for each genome
        for genome_name, stats in genome_stats.iteritems():
            # stringify the stats dictionary so that numbers are transformed into strings
            # this is necessary for PG HSTORE since only string keys and values are allowed
            stats = {k: str(v) for k, v in stats.iteritems()}

            q = self.session.query(Genome).filter(Genome.name == genome_name)
            if q.count() > 0:
                q.update({Genome.quality_stats: stats}, synchronize_session="fetch")
            else:
                logger.warn('Cannot update genome assembly stats for genome {0}. Genome does not exist in DB.'.format(
                    genome_name
                ))

        self.session.commit()