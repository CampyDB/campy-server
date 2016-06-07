from flask import Flask, Blueprint, jsonify
from flask_restful import Resource, Api
from resources.cgf import CgfNewickTree 
from resources.location import GeoDict, GeoIsolatesDict
from resources.temporal import IsoDates
from resources.source import SourceData

from flask import make_response, request, Blueprint, current_app, jsonify, g
api_bp = Blueprint('api', __name__, url_prefix='/api')
app = Flask(__name__)
api = Api(api_bp, catch_all_404s = False)


api.add_resource(CgfNewickTree, '/newick')
api.add_resource(GeoDict, '/geodict')
api.add_resource(GeoIsolatesDict, '/geoisolatesdict')
api.add_resource(IsoDates, '/temporal')
api.add_resource(SourceData, '/source')



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
    data = jsonify(data)
    if callback:
        content = str(callback) + '(' + data + ')'
    else:
        content = data
    resp = make_response(content, code)
    resp.headers.extend(headers or {})
    return resp