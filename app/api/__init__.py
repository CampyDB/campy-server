#!/usr/bin/python
# -*- coding: utf-8 -*-

from json import dumps
from functools import wraps

from resources.cgf import CgfNewickTreeAPI
from resources.location import GeoAPI, GeoIsolatesAPI
from resources.temporal import IsoDatesAPI, IsoDatesAllAPI, IsoDatesCountAPI, DCIsoCount
from resources.source import SourceAPI
from resources.test import TestAPI
from io import BytesIO
from gzip import GzipFile
from redis import Redis

from flask import Flask, Blueprint
from flask import make_response, request, Blueprint, current_app, \
    jsonify, g
from flask_httpauth import HTTPBasicAuth
from ..models import User, UserRole
from .. import session, logger

auth = HTTPBasicAuth()


def authorized(public_auth_required=False):

    def decorator(f):

        @wraps(f)
        def check_auth(*args, **kwargs):
            if 'user_name' in kwargs:
                user = get_authorized_user(kwargs['user_name'],
                        public_auth_required)
                if not user:
                    return unauthorized()
                g.user = user
            return f(*args, **kwargs)
        return check_auth
    return decorator


def get_authorized_user(user_name, public_auth_required=False):
    user = session.query(User).filter(User.name == user_name).first()

    if not user:
        return None

    if user.role == UserRole.temporary:
        return user

    if user_name == current_app.config['PUBLIC_SISTR_USER_NAME']:
        if not public_auth_required:
            return user

    authorization = request.authorization

    if authorization:
        if not verify_password(authorization.username,
                               authorization.password):
            return None
        g_user = g.user
        if not g_user == user:
            return None
        else:
            return user
    return None


@auth.verify_password
def verify_password(username_or_token, password):
    secret_key = current_app.config['SECRET_KEY']
    user = User.verify_auth_token(session, secret_key,
                                  username_or_token)
    logger.debug('Verify auth token result {}'.format(user))
    if not user:
        user = session.query(User).filter(User.name
                == username_or_token).first()
        logger.info('Verify password for user {}'.format(user))
        if not user or not user.verify_password(password):
            logger.info('Password not verified for user {}'.format(username_or_token))
            return False
    logger.info('password/token verified for user {} with token/username {}'.format(user,
                username_or_token))
    g.user = user
    return True


@auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 403)

from flask_restful import Resource, Api
api_bp = Blueprint('api', __name__, url_prefix='/api')
from resources.user import UserAPI


@api_bp.before_request
def option_autoreply():
    """ Always reply 200 on OPTIONS request """

    if request.method == 'OPTIONS':
        resp = current_app.make_default_options_response()

        headers = None
        if 'ACCESS_CONTROL_REQUEST_HEADERS' in request.headers:
            headers = request.headers['ACCESS_CONTROL_REQUEST_HEADERS']

        h = resp.headers

        # Allow the origin which made the XHR

        h['Access-Control-Allow-Origin'] = request.headers['Origin']

        # Allow the actual method

        h['Access-Control-Allow-Methods'] = \
            request.headers['Access-Control-Request-Method']

        # Allow for 10 seconds

        h['Access-Control-Max-Age'] = '10'

        # We also keep current headers

        if headers is not None:
            h['Access-Control-Allow-Headers'] = headers
        return resp


@api_bp.after_request
def set_allow_origin(resp):
    """ Set origin for GET, POST, PUT, DELETE requests """

    h = resp.headers

    # Allow crossdomain for other HTTP Verbs

    if request.method != 'OPTIONS' and 'Origin' in request.headers:
        h['Access-Control-Allow-Origin'] = request.headers['Origin']
    return resp

api = Api(api_bp, catch_all_404s=False)
api.add_resource(CgfNewickTreeAPI, '/newick')
api.add_resource(GeoAPI, '/geo')
api.add_resource(GeoIsolatesAPI, '/geoisolates')
api.add_resource(IsoDatesAPI, '/temporal/filter')
api.add_resource(IsoDatesAllAPI, '/temporal/all')
api.add_resource(IsoDatesCountAPI, '/temporal/count')
api.add_resource(SourceAPI, '/source')
api.add_resource(TestAPI, '/test')
api.add_resource(DCIsoCount, '/data')

def compress_key(data):
    """
    MD5 hexdigest a string.

    Args:
        data (str): string to MD5 hexdigest

    Returns:
        str: hexdigest of ``data``
    """
    import hashlib
    md5 = hashlib.md5()
    md5.update(data.encode('utf-8'))
    return md5.hexdigest()

def compress(content):
    """
    GZIP compress a string.

    Args:
        content (str): String to GZIP compress

    Returns:
        str: Gzipped string
    """
    gzip_buffer = BytesIO()
    with GzipFile(mode='wb',
                  compresslevel=6,
                  fileobj=gzip_buffer) as gzip_file:
        gzip_file.write(content)
    return gzip_buffer.getvalue()


@api.representation('application/json')
def output_json(data, code, headers=None):
    """
    Extending output_json from Flask-RESTful to add compatibility for JSONP requests.
    These JSONP requests are expected to have a callback request argument and are returned as:
    <callback request value>(<JSON response data>);

    Args:
        data (obj): data to JSONify and send in response as content
        code (int): HTTP code
        headers (dict): Response headers

    Returns:
        flask.Response: Flask HTTP Response object
    """

    callback = request.args.get('callback', False)
    data = dumps(data)
    if callback:
        content = str(callback) + '(' + data + ')'
    else:
        content = data
    key = 'cgfdb-' + compress_key(content)
    redis = Redis()
    gzip_content = redis.get(key) or compress(content)
    redis.set(key, gzip_content)

    resp = make_response(content, code)
    resp.headers.extend(headers or {})

    resp.headers['Content-Endcoding'] = 'gzip'
    resp.headers['Content-Length'] = resp.content_length
    return resp
