
from __future__ import absolute_import
from json import dumps
from functools import wraps

from flask import make_response, request, Blueprint, current_app, jsonify, g
from flask.ext.httpauth import HTTPBasicAuth
from ..models import User, UserRole
from .. import session, logger

auth = HTTPBasicAuth()


def authorized(public_auth_required=False):
    def decorator(f):
        @wraps(f)
        def check_auth(*args, **kwargs):
            if 'user_name' in kwargs:
                user = get_authorized_user(kwargs['user_name'], public_auth_required)
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
        if not verify_password(authorization.username, authorization.password):
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
    user = User.verify_auth_token(session, secret_key, username_or_token)
    logger.debug('Verify auth token result {}'.format(user))
    if not user:
        user = session.query(User).filter(User.name == username_or_token).first()
        logger.info("Verify password for user {}".format(user))
        if not user or not user.verify_password(password):
            logger.info('Password not verified for user {}'.format(username_or_token))
            return False
    logger.info('password/token verified for user {} with token/username {}'.format(user, username_or_token))
    g.user = user
    return True


@auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 403)


from flask_restful import Api

api_bp = Blueprint('api', __name__, url_prefix='/api')


from .resources.user import UserAPI


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
        h['Access-Control-Allow-Methods'] = request.headers['Access-Control-Request-Method']
        # Allow for 10 seconds
        h['Access-Control-Max-Age'] = "10"

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


api = Api(api_bp, catch_all_404s=True)

api.add_resource(UserAPI,
                 '/user/<string:user_name>')

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
    resp = make_response(content, code)
    resp.headers.extend(headers or {})
    return resp
