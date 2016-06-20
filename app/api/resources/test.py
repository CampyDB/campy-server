
import pandas as pd
from flask_restful import Resource, reqparse
from flask import abort



class TestAPI(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('userid', location='json')

    def post(self):
        args = self.reqparse.parse_args()
        print str(args)
        return args





