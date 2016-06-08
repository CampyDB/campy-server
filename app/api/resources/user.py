from datetime import datetime
from flask import g
from flask_restful import Resource, reqparse
from app import session, logger
from app.api import authorized
from app.models import User

__author__ = 'peter'


class UserAPI(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('password', type=str, location='json')
        self.reqparse.add_argument('email', type=str, location='json')
        self.reqparse.add_argument('new_username', type=str, location='json')
        super(UserAPI, self).__init__()

    @staticmethod
    def user_info(user):
        assert isinstance(user, User)
        return {'name': user.name,
                'created_on': user.created_on.isoformat(),
                'last_seen': user.last_seen.isoformat(),
                'samples': [x.name for x in user.samples.all()],
                'role': user.role.value,
                'email': user.email}

    @authorized(public_auth_required=False)
    def get(self, user_name):
        user = session.query(User).filter(User.name == user_name).first()
        if user is None:
            logger.error('GET User "{}" not found in DB'.format(user_name))
            return {'error': 'Specified user does not exist'}, 404
        if user != g.user:
            logger.error('GET Auth user {} does not match specified user {}'.format(user, g.user))
            return {'error': 'Authenticated user does not match specified user'}, 403
        assert isinstance(user, User)
        logger.info('GET User {}; username {}'.format(user, user_name))
        # Update when User last seen
        user.last_seen = datetime.utcnow()
        session.add(user)
        session.commit()
        return UserAPI.user_info(user)
