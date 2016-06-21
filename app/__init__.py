from __future__ import absolute_import
import logging
from logging.handlers import RotatingFileHandler

import os
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from flask import Flask, _app_ctx_stack
from flask_cache import Cache
from flask_mail import Mail
from .config import config


Base = declarative_base()


session = scoped_session(sessionmaker(),
                         scopefunc=_app_ctx_stack.__ident_func__)

cache = Cache(config={'CACHE_TYPE': 'redis', 'CACHE_KEY_PREFIX': 'SISTR'})
mail = Mail()

logging_format = logging.Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')


def init_logger(path='log/app.log'):
    logger = logging.getLogger()
    # TODO: implement different logging levels for production/dev/testing
    logger.setLevel(logging.DEBUG)
    file_handler = RotatingFileHandler(path,
                                       mode='a',
                                       maxBytes=1 * 1024 * 1024,
                                       backupCount=10)
    file_handler.setFormatter(logging_format)
    file_handler.setLevel(logging.INFO)
    logger.addHandler(file_handler)
    return logger

logger = init_logger()

from .api import *
def init_db(database_uri):
    from . import models

    engine = create_engine(database_uri, echo=False, use_native_hstore=True)
    global Base
    Base.metadata.create_all(engine)
    logger.info('DB schema updated')


def create_app(config_name='default'):
    flask_app = Flask(__name__)
    logger.info('config_name {}'.format(config_name))
    logger.info('config {}'.format(config))
    c = config[config_name]
    flask_app.config.from_object(c)
    logger.info('Loaded config from object {}'.format(c))
    if not flask_app.config.get('TESTING'):
        app_settings = 'APP_SETTINGS'
        if os.environ.get(app_settings):
            flask_app.config.from_envvar(app_settings)
            logger.info('Loaded config from environment variable file APP_SETTINGS')

    cache.init_app(flask_app, config=flask_app.config)
    logger.info('Flask-Cache initialized')
    mail.init_app(flask_app)
    logger.info('Flask-Mail initialized')

    flask_app.engine = create_engine(flask_app.config['DATABASE_URI'], echo=False, use_native_hstore=True)
    logger.info('DB engine created {}'.format(flask_app.engine))
    logger.info('DB session binding flask_app DB engine {}'.format(flask_app.engine))
    global session
    session.configure(bind=flask_app.engine)
    logger.info('DB session bound flask_app DB engine {}'.format(flask_app.engine))
    from .api import api_bp

    logger.info('Registering API Blueprint {}'.format(api_bp))
    flask_app.register_blueprint(api_bp)

    # Setup error logging through email by queuing celery send_email tasks
    if not flask_app.debug and not flask_app.testing:
        import logging

        subject = '[SISTR] Exception occurred'
        admin_emails = flask_app.config.get('ADMIN_EMAILS')
        logger.debug('Admin emails = {}'.format(admin_emails))


        class CeleryEmailHandler(logging.Handler):
            def emit(self, record):
                msg = self.format(record)
                from .tasks import send_email
                # queue send_email task
                r = send_email.s(admin_emails, subject, msg).apply_async()
                logger.debug('Queued Celery Email logger task {} to send email'.format(r))

        mail_handler = CeleryEmailHandler()
        mail_handler.setLevel(logging.ERROR)

        from logging import Formatter

        mail_handler.setFormatter(Formatter('''
        Message type:       %(levelname)s
        Location:           %(pathname)s:%(lineno)d
        Module:             %(module)s
        Function:           %(funcName)s
        Time:               %(asctime)s

        Message:

        %(message)s
        '''))

        flask_app.logger.addHandler(mail_handler)


    @flask_app.teardown_appcontext
    def teardown(exception=None):
        global session
        if session:
            session.remove()

    return flask_app