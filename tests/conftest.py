from __future__ import absolute_import

__author__ = 'peter'
import sys
sys.path.append("/home/student/cgf/campy-server/")
from app import Base, create_app, session

import pytest


@pytest.yield_fixture(scope='session')
def app():
    _app = create_app('testing')
    _app.testing = True
    # # Base.metadata.drop_all(bind=_app.engine)
    # # Base.metadata.create_all(bind=_app.engine)
    # _app.connection = _app.engine.connect()

    # session.configure(bind=_app.connection)

    yield _app

    # _app.connection.close()
    # Base.metadata.drop_all(bind=_app.engine)


# @pytest.yield_fixture(scope='module')
# def dbsession(app):
#     """Creates a new database session for a test."""
#     # Connect to the database and create the schema within a transaction
#     app.transaction = app.connection.begin()

#     ctx = app.app_context()
#     ctx.push()

#     _session = session()

#     yield _session
#     # clean up test database
#     app.transaction.close()
#     session.close()
#     ctx.pop()
