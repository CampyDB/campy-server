
SECRET_KEY = 'super SECRET_KEY!!'

MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 587
MAIL_USE_TLS = True
MAIL_USE_SSL = False
MAIL_USERNAME = 'campydb@gmail.com'
MAIL_PASSWORD = 'campydb_password'
MAIL_DEFAULT_SENDER = 'campydb@gmail.com'
MAIL_MAX_EMAILS = None

PUBLIC_ADMIN_USER_NAME = 'campy'

ADMIN_EMAILS = [
    'admin1@gmail.com',
    'admin2@gmail.com',
]

MIST_BIN_PATH = 'mist/bin/MIST.exe'
MIST_MARKERS_FILES = {'MLST': 'mist_assays/MLST.markers',}

MIST_ALLELES_DIR = 'mist/assays/alleles'

TEMP_DIR = '/tmp'
CACHE_TYPE = 'redis'
CACHE_KEY_PREFIX = 'CAMPYDB-'

DATABASE_URI = 'postgresql://campy:campy_password@localhost:5432/campy_db'
TEST_DATABASE_URI = 'postgresql://campy:campy_password@localhost:5432/campy_test_db'