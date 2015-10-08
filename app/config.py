'''
Campy server backend configuration file
'''
__author__ = 'peter'
import os

#: (str): base directory of Campy server app
basedir = os.path.abspath(os.path.dirname(__file__))


class MailConfig:
    MAIL_SERVER = os.environ.get('MAIL_SERVER') or 'localhost'
    MAIL_PORT = os.environ.get('MAIL_PORT') or 25
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS') or False
    MAIL_USE_SSL = os.environ.get('MAIL_USE_SSL') or False
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME') or None
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD') or None
    MAIL_DEFAULT_SENDER = os.environ.get('MAIL_DEFAULT_SENDER') or None
    MAIL_MAX_EMAILS = os.environ.get('MAIL_MAX_EMAILS') or None

class MistConfig:
    #: (str): path to MIST binary
    MIST_BIN_PATH = ''
    #: (dict): MIST test names to MIST test description file paths
    MIST_MARKERS_FILES = {}
    #: (str): path to *in silico* MIST assays alleles files
    MIST_ALLELES_DIR = ''


class Config(MailConfig, MistConfig):
    #: (str): secret key for generating auth tokens
    SECRET_KEY = 'some hard to guess string'
    #: (str): public admin user name (default=*campy*)
    PUBLIC_ADMIN_USER_NAME = 'campy'
    #: (str): folder to write temporary analysis data to
    TEMP_DIR = '/tmp'
    #: (str): Flask-Cache cache type (default="redis")
    CACHE_TYPE = 'redis'
    #: (str): Flask-Cache cache prefix for cache keys
    CACHE_KEY_PREFIX = 'campy-'


class DevConfig(Config):
    DEBUG = True
    DATABASE_URI = 'postgresql://campy:campy_password@localhost:5432/campy_db'


class TestingConfig(Config):
    TESTING = True
    DATABASE_URI = 'postgresql://campy:campy_password@localhost:5432/campy_test_db'


class ProductionConfig(Config):
    DATABASE_URI = 'postgresql://campy:campy_password@localhost:5432/campy_db'


config = {
    'dev': DevConfig,
    'testing': TestingConfig,
    'prod': ProductionConfig,
    'default': DevConfig,
}
