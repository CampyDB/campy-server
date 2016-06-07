import pandas as pd
from flask_restful import Resource
import json
df = pd.read_csv(r"/home/student/Campii/geoIndex.csv", low_memory = False)
maxRows = df["id"].count()

"""
    Uses an index csv to load in geo data stored in JSON files for the strain isolates. The geo data
    in the JSON was pulled from the Nominatim api from OpenStreetMap. 

    Args:
        max_rows (obj): data to JSONify and send in response as content
        code (int): HTTP code
        headers (dict): Response headers

    Returns:
        flask.Response: Flask HTTP Response object
"""
def createGeoDict(max_rows):
    uniqueDict = {}
    dictGeo = {}
    dictIsolates = {}

    for row in range(maxRows):

        data = None
        with open("/home/student/Campii/geodata/"+str(df["id"][row]) + ".json") as f:    
            data = json.load(f)
        isolateName = data["isolateName"]
        data.pop("isolateName", None)
        if "oLatitude" in data:
            data.pop("oLatitude", None)
        if "oLongitude" in data:
            data.pop("oLongitude", None)
        if str(data) not in uniqueDict.values():

            data.pop("isolateName", None)
            uniqueDict[str(data["latitude"]) + ", " + str(data["longitude"])] = str(data)
            dictGeo[str(data["latitude"]) + ", " + str(data["longitude"])] = data
            dictIsolates[str(data["latitude"]) + ", " + str(data["longitude"])] = [isolateName]
        else:

            dictIsolates[str(data["latitude"]) + ", " + str(data["longitude"])].append(isolateName)

    return dictGeo, dictIsolates


class GeoDict(Resource):    
    def get(self):
        df = pd.read_csv(r"/home/student/Campii/geoIndex.csv", low_memory = False)
        max_rows = df["id"].count()
        dictGeo, dictIsolates = createGeoDict(max_rows)
        return dictGeo

class GeoIsolatesDict(Resource):    
    def get(self):
        df = pd.read_csv(r"/home/student/Campii/geoIndex.csv", low_memory = False)
        max_rows = df["id"].count()
        dictGeo, dictIsolates = createGeoDict(max_rows)
        return dictIsolates



