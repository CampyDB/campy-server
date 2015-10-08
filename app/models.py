"""
SQLAlchemy Database models

"""

from __future__ import absolute_import

from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import Integer, String, Boolean, DateTime, Numeric, func, UniqueConstraint
from sqlalchemy import ForeignKey, Column, Index
from sqlalchemy.orm import relationship, backref
from Crypto.Random import random
from itsdangerous import (TimedJSONWebSignatureSerializer as Serializer, BadSignature, SignatureExpired)
from passlib.apps import custom_app_context as pwd_context

from .decl_enum import DeclEnum
from . import Base


USER_NAME_LENGTH = 20
LETTERS_NUMBERS_RANDOM_SAMPLING_SET = ('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
                                       'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
                                       '01234567890123456789012345678901234567890123456789')


class TimestampMixin(object):
    created_on = Column(DateTime, default=func.now())


class UserRole(DeclEnum):
    #: Admin user role
    admin = 'admin', 'Admin'
    #: Temporary anonymous user
    temporary = 'temporary', 'Temporary anonymous User'
    #: Registered user
    registered = 'registered', 'Registered User'


class User(TimestampMixin, Base):
    __tablename__ = 'user'
    #: Integer: primary_key of User
    id = Column(Integer, primary_key=True)
    #: String(64): Unique user name
    name = Column(String(64), index=True, unique=True, nullable=False)
    #: UserRole_: User's role (e.g. admin, temporary, registered (unimplemented))
    role = Column(UserRole.db_type(), nullable=False, default=UserRole.temporary)
    #: String: Unique email address if not null
    email = Column(String, index=True, unique=True, nullable=True)
    #: DateTime: Date and time when the user was last seen or when the user last accessed their data.
    last_seen = Column(DateTime)
    #: String(128): Cryptographically hashed User_ password
    password_hash = Column(String(128))


    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        if self.role == UserRole.temporary:
            return True

        return pwd_context.verify(password, self.password_hash)

    def generate_auth_token(self, secret_key, expiration=(24 * 3600)):
        s = Serializer(secret_key, expires_in=expiration)
        return s.dumps({'id': self.id})

    @staticmethod
    def verify_auth_token(session, secret_key, token):
        s = Serializer(secret_key)
        try:
            data = s.loads(token)
        except SignatureExpired:
            return None
        except BadSignature:
            return None
        user = session.query(User).get(data['id'])
        return user

    @staticmethod
    def create_new_user_id(session):
        """
        Create a new random user name by randomly sampling from a list of lowercase
        and uppercase letters and numbers in equal proportions using PyCrypto.
        A new user name will be unique and will not already exist in the DB.

        Args:
            session (sqlalchemy.session.Session): DB session

        Returns:
            str: Randomly generated user name that does not exist in the DB.
        """
        while True:
            new_user_name = ''.join(random.sample(LETTERS_NUMBERS_RANDOM_SAMPLING_SET, USER_NAME_LENGTH))
            if session.query(User).filter(User.name == new_user_name).count() == 0:
                return new_user_name

    def __repr__(self):
        return '<User({}, {}, {}, {}, {})>'.format(
            self.id,
            self.name,
            self.role,
            self.created_on,
            self.last_seen,
        )


class Host(Base):
    """
    The Host_ organism that the Genome_ was isolated from.
    """
    __tablename__ = 'host'
    id = Column(Integer, primary_key=True)
    #: String(100): Common name of host from which genome was isolated (e.g. "human")
    common_name = Column(String(100), nullable=False)
    #: String(100): Latin or scientific name of host from which genome was isolated (e.g. "Homo sapiens")
    latin_name = Column(String(100), nullable=False)

    __table_args__ = (UniqueConstraint('common_name',
                                       'latin_name',
                                       name='host_uc'),)

    def __repr__(self):
        return '<Host({id}, {common}, {latin})>'.format(
            id=self.id,
            common=self.common_name,
            latin=self.latin_name
        )


class HostDisease(Base):

    __tablename__ = 'host_disease'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    symptoms = Column(String)

    host_id = Column(Integer, ForeignKey('host.id'), nullable=False)
    host = relationship('Host', backref=backref('diseases'))

    def __repr__(self):
        return '<HostDisease ({}, {}, symptoms="{}", host={})'.format(
            self.id,
            self.name,
            self.symptoms,
            self.host,
        )


class GeographicLocation(Base):
    """
    The geographic location where the Genome_ was isolated.
    """
    __tablename__ = 'geographic_location'

    id = Column(Integer, primary_key=True)
    #: Numeric: GPS Latitude
    lat = Column(Numeric)
    #: Numeric: GPS Longitude
    lng = Column(Numeric)
    #: String(100): Country where genome was isolated
    country = Column(String(100))
    #: String: Region within country where genome was isolated
    region = Column(String)

    misc = Column(JSON)

    def __repr__(self):
        return '<GeographicLocation({}, {}, {}, [{},{}])>'.format(
            self.id,
            self.country,
            self.region,
            self.lat,
            self.lng,
        )


class SourceType(Base):

    __tablename__ = 'source_type'

    id = Column(Integer, primary_key=True)
    #: String(100): Source type (e.g. food, clinical, animal, etc)
    type = Column(String(100))
    #: String(200): Source description/info (e.g. "chicken breast", "cow feces", etc)
    info = Column(String)

    def __repr__(self):
        return '<SourceType ({}, {}, {})>'.format(
            self.id,
            self.type,
            self.info,
        )


class SampleSource(Base):
    __tablename__ = 'sample_source'
    id = Column(Integer, primary_key=True)

    #: DateTime: Date when sample was collected
    collection_date = Column(DateTime)

    source_type_id = Column(Integer, ForeignKey('source_type.id'), nullable=False)
    source_type = relationship('SourceType', backref=backref('sample_sources', lazy='dynamic'))

    host_id = Column(Integer, ForeignKey('host.id'))
    host = relationship('Host', backref=backref('sample_sources', lazy='dynamic'))

    geographic_location_id = Column(Integer, ForeignKey('geographic_location.id'))
    geographic_location = relationship('GeographicLocation', backref=backref('sample_sources', lazy='dynamic'))

    #: JSON: Misc. SampleSource_ metadata
    misc_metadata = Column(JSON)

    def __repr__(self):
        return '<SampleSource ({}, {}, type={}, host={}, geo_loc={}, misc={})>'.format(
            self.id,
            self.collection_date,
            self.source_type,
            self.host,
            self.geographic_location,
            self.misc_metadata,
        )


class Assembler(Base):
    __tablename__ = 'assembler'
    id =Column(Integer, primary_key=True)
    name = Column(String)
    version = Column(String)
    assemblies = relationship('Assembly', backref='assembler')


class Assembly(Base):
    __tablename__ = 'assembly'

    id = Column(Integer, primary_key=True)
    genome_id = Column(Integer, ForeignKey('genome.id'))
    genome = relationship('Genome', backref=backref('assembly', uselist=False))
    assembler_id = Column(Integer, ForeignKey('assembler.id'))
    #: String: Assembler_ parameters (i.e. commandline flags like `--careful` for SPAdes)
    params = Column(String)

    #: JSON: QUAST_ determined assembly quality statistics
    quality_stats = Column(JSON)


class SequencingInfo(Base):
    __tablename__ = 'sequencing_info'
    id = Column(Integer, primary_key=True)
    #: String(100): Sequencing platform (e.g. Illumina MiSeq)
    platform = Column(String(100))
    #: String: Sequencing run
    run = Column(String)
    #: Numeric: Average sequencing fold coverage
    coverage = Column(Numeric)
    #: Numeric: Number of reads
    n_reads = Column(Numeric)

    def __repr__(self):
        return '<GenomeNGSInfo({}, {}, run={}, cov={}, reads={})>'.format(
            self.id,
            self.platform,
            self.run,
            self.coverage,
            self.n_reads,
        )


class Sample(Base):
    __tablename__ = 'sample'

    id = Column(Integer, primary_key=True)
    #: String(100): Unique Sample_ name
    name = Column(String(100), index=True, nullable=False)

    source_id = Column(Integer, ForeignKey('sample_source.id'))
    source = relationship('SampleSource', backref=backref('samples', lazy='dynamic'))

    genomes = relationship('Genome', backref='sample')
    #: JSON: Dict of misc metadata
    misc_metadata = Column(JSON)


    @staticmethod
    def make_unique_name(name, session):
        """
        Ensure that the Sample_ has a unique name by appending
        ``_X`` where ``X`` is an incremental number to original
        sample name.

        Args:
            name (str): original Sample_ name
            session (sqlalchemy.session.Session): DB connection session

        Returns:
            str: unique Sample_ name
        """
        if session.query(Sample).filter_by(name=name).first() is None:
            return name
        version = 2
        while True:
            new_name = '{0}_{1}'.format(name, version)
            if session.query(Sample).filter_by(name=new_name).first() is None:
                return new_name
            version += 1
        raise ValueError

    def __repr__(self):
        return '<Sample ({}, {}, {})>'.format(
            self.id,
            self.name,
            self.collection_date,
        )


class UserSampleLink(Base):

    __tablename__ = 'user_sample_link'

    user_id = Column(Integer, ForeignKey('user.id'), primary_key=True)
    sample_id = Column(Integer, ForeignKey('sample.id'), primary_key=True)
    user = relationship('User', backref=backref('sample_assoc'))
    sample = relationship('Sample', backref=backref('user_assoc'))

class Genome(Base):

    __tablename__ = 'genome'

    #: Integer: primary_key of Genome_
    id = Column(Integer, primary_key=True)
    sample_id = Column(Integer, ForeignKey('sample.id'))

    sequencing_info_id = Column(Integer, ForeignKey('sequencing_info.id'))
    sequencing_info = relationship('SequencingInfo', backref=backref('genomes', lazy='dynamic'))

    #: DateTime: Date and time when Genome_ was uploaded to the database
    time_uploaded = Column(DateTime)

    #: Boolean: Flag for whether genome has been analyzed by the genome analysis pipeline and
    #:   if all the results are stored within the database.
    is_analyzed = Column(Boolean, default=False, nullable=False)

    def __repr__(self):
        return '<Genome({id}, {name}, {user}, {serovar}, {n_contigs}, {subspecies}, analyzed? {is_analyzed})>'.format(
            id=self.id,
            name=self.name,
            user=self.user.name,
            serovar=self.serovar,
            n_contigs=self.contigs.count(),
            subspecies=self.subspecies,
            is_analyzed=self.is_analyzed)


class Contig(Base):
    __tablename__ = 'contig'
    #: Integer: primary_key of Contig_
    id = Column(Integer, primary_key=True)
    #: String(200): Contig_ name or FASTA entry header text
    name = Column(String(200), index=True, nullable=False)
    #: String: Nucleotide sequence
    seq = Column(String, nullable=False)

    assembly_id = Column(Integer, ForeignKey('assembly.id'), nullable=False)
    assembly = relationship('Assembly', backref=backref('contigs', lazy='dynamic', cascade='all,delete'))

    def __repr__(self):
        return '<Contig({0}, {1}, {2})>'.format(
            self.name,
            len(self.seq),
            self.assembly.name
        )


class MistMetadataResult(Base):
    __tablename__ = 'mist_metadata_result'
    id = Column(Integer, primary_key=True)
    #: JSON: Matching MistTest_ metadata for a Genome_
    attrs = Column(JSON)
    #: DateTime: Time MistMetadataResult_ was added to the DB
    timestamp = Column(DateTime)
    #: Integer: MistTest_ ForeignKey ID
    test_id = Column(Integer, ForeignKey('mist_test.id'), nullable=False)
    #: sqlalchemy.orm.relationship: MistTest_ object that MistMetadataResult_ belongs to
    test = relationship('MistTest', backref=backref('metadata_results', lazy='dynamic'))
    #: Integer: Genome_ ForeignKey ID
    genome_id = Column(Integer, ForeignKey('genome.id'), nullable=False)
    #: sqlalchemy.orm.relationship: Genome_ object that MistMetadataResult_ belongs to
    genome = relationship('Genome', backref=backref('mist_metadata_results', lazy='dynamic', cascade='all,delete'))

    def __repr__(self):
        return '<MistMetadataResult({id}, {test}, {genome}, {timestamp}, {attrs})>'.format(
            id=self.id,
            test=self.test.name,
            genome=self.genome.name,
            timestamp=self.timestamp,
            attrs=self.attrs)


class MistMarkerResult(Base):
    __tablename__ = 'mist_marker_result'
    id = Column(Integer, primary_key=True)
    #: String: MistMarkerResult_ *in silico* result for MistMarker_
    result = Column(String)
    #: Boolean: Is the *in silico* typing marker truncated due to being found at the end of a contig?
    is_contig_truncated = Column(Boolean, default=False)
    #: Boolean: Is the *in silico* typing marker missing?
    is_missing = Column(Boolean, default=False)
    #: Boolean: Does the *in silico* typing marker result contain potential homopolymer errors? *Only applies to allelic marker results*
    has_potential_homopolymer_errors = Column(Boolean, default=False)
    #: DateTime: Time when MistMarkerResult_ added to DB
    timestamp = Column(DateTime)
    #: JSON: Raw MIST_ JSON output for MistMarkerResult_
    mist_json = Column(JSON)
    #: Integer: MistMarker_ ForeignKey ID
    marker_id = Column(Integer, ForeignKey('mist_marker.id'))
    #: sqlalchemy.orm.relationship: MistMarker_ object that the MistMarkerResult_ belongs to
    marker = relationship('MistMarker', backref=backref('result', lazy='dynamic'))
    #: Integer: MistTest_ ForeignKey ID
    test_id = Column(Integer, ForeignKey('mist_test.id'))
    #: sqlalchemy.orm.relationship: MistTest_ object that the MistMarkerResult_ belongs to
    test = relationship('MistTest', backref=backref('marker_results', lazy='dynamic'))
    #: Integer: Genome_ ForeignKey ID
    genome_id = Column(Integer, ForeignKey('genome.id'), nullable=False)
    #: sqlalchemy.orm.relationship: Genome_ object that the MistMarkerResult_ belongs to
    genome = relationship('Genome', backref=backref('mist_marker_results', lazy='dynamic', cascade='all,delete'))
    #: Integer: User_ ForeignKey ID
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    #: sqlalchemy.orm.relationship: User_ object that the MistMarkerResult_ belongs to
    user = relationship('User', backref=backref('mist_marker_results', lazy='dynamic', cascade='all,delete'))

    __table_args__ = (Index('result', 'marker_id', 'test_id', 'genome_id', 'user_id', unique=True),)

    def __repr__(self):
        return '<MistMarkerResult({0}, result={1}, trunc={2}, missing={3}, marker={4}, test={5}, genome={6})>'.format(
            self.id,
            self.result,
            self.is_contig_truncated,
            self.is_missing,
            self.marker.name,
            self.test.name,
            self.genome.name)


class MistTestType(DeclEnum):
    """
    An Enum for the type of MIST_ *in silico* typing test that a 
    MistTest_ is.
    """
    allelic = 'Allelic', 'Allelic'
    pcr = 'PCR', 'PCR'
    oligo_probe = 'OligoProbe', 'OligoProbe'
    repeat = 'Repeat', 'Repeat'
    snp = 'SNP', 'SNP'
    amplicon_probe = 'AmpliconProbe', 'AmpliconProbe'


class MistTest(Base):
    """
    A MIST_ typing test with a unique name. 
    All MistTest_ should have one or more MistMarker_.
    Each of those MistMarker_ may have one or more MistAllele_ if the MistTestType_ is allelic.
    MIST_ may produce MistMetadataResult_ for a MistTest_.
    Each of the MistMarker_ for this MistTest_ will produce MistMarkerResult_.
    """
    __tablename__ = 'mist_test'
    id = Column(Integer, primary_key=True)
    #: String: Unique name of *in silico* typing test
    name = Column(String, unique=True, index=True, nullable=False)
    #: MistTestType_: Type of typing test (e.g. PCR, allelic, probe, etc)
    type = Column(MistTestType.db_type(), nullable=False)

    def __repr__(self):
        return '<MistTest({id}, Type={type}, Name={name})>'.format(
            id=self.id,
            type=self.type,
            name=self.name)


class MistMarker(Base):
    """
    A MistMarker_ is an *in silico* marker that belongs to a MistTest_ *in silico* typing test.
    MistMarkerResult_ are produced that are associated with a MistMarker_, a Genome_ and a User_.
    """
    __tablename__ = 'mist_marker'
    id = Column(Integer, primary_key=True)
    #: String: Name of MistMarker_
    name = Column(String, index=True, nullable=False)
    #: Integer: ID of MistTest_ that the MistMarker_ belongs to
    test_id = Column(Integer, ForeignKey('mist_test.id'))
    #: sqlalchemy.orm.relationship: MistTest_ object that the MistMarker_ belongs to
    test = relationship('MistTest', backref=backref('markers', lazy='dynamic', cascade='all'))

    __table_args__ = (UniqueConstraint('name',
                                       'test_id',
                                       name='mist_marker_uc'),)

    def __repr__(self):
        return '<MistMarker({id}, Name={name}, Test={test_name})>'.format(
            id=self.id,
            name=self.name,
            test_name=self.test.name
        )


class MistAllele(Base):
    """
    A MistAllele_ is a unique nucleotide allele sequence associated with a allelic MistTest_ and MistMarker_ such as MLST.
    """
    __tablename__ = 'mist_allele'
    id = Column(Integer, primary_key=True)
    #: String: Name of MistAllele_
    name = Column(String, nullable=False)
    #: String: Nucleotide sequence of MistAllele_ (must be unique and non-null)
    seq = Column(String, index=True, unique=True, nullable=False)
    #: DateTime: Date and time when MistAllele_ was added to the database
    timestamp = Column(DateTime)
    #: Integer: ID of MistMarker_ that the MistAllele_ belongs to
    marker_id = Column(Integer, ForeignKey('mist_marker.id'), nullable=False)
    #: sqlalchemy.orm.relationship: MistMarker_ model object that the MistAllele_ belongs to
    marker = relationship('MistMarker', backref=backref('alleles', lazy='dynamic'))
    #: Integer: ID of MistTest_ that the MistAllele_ belongs to
    test_id = Column(Integer, ForeignKey('mist_test.id'), nullable=False)
    #: MistTest_: MistTest_ model object that the MistAllele_ belongs to
    test = relationship('MistTest', backref=backref('alleles', lazy='dynamic'))

    def __repr__(self):
        return '<MistAllele({id}, Test={test}, Allele={allele}, Length={length})>'.format(
            id=self.id,
            test=self.test.name,
            allele=self.name,
            length=len(self.seq)
        )
