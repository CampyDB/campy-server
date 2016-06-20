#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
from flask_restful import Resource
import json

df = pd.read_csv(r"/home/student/Campii/geoIndex.csv", low_memory=False)
maxRows = df['id'].count()


def createGeoDict(max_rows):
    """
    Gets a dictionary of geo data and a dictionary of isolates that map to the geodata. Uses an 
    index csv to load in geo data stored in JSON files for the strain isolates. The geo data
    was pulled from the Nominatim api from OpenStreetMap. 

    Notes:
        The geo dictionary and isolates have the same key value, which is just "<lat coord>, <long cord>".
    Args:
        max_rows (int): CSV max row

    Returns:
        dictGeo: Geo data dictionary
        dictIsolates: Isolate dictionary.
    """

    unique_dict = {}
    dict_geo = {}
    dict_isolates = {}

    for row in range(max_rows):
        data = None
        with open('/home/student/Campii/geodata2/' + str(df['id'][row])
                  + '.json') as f:
            data = json.load(f)
        isolateName = data['isolate_name']
        data.pop('isolate_name', None)
        if 'oLatitude' in data:
            data.pop('oLatitude', None)
        if 'oLongitude' in data:
            data.pop('oLongitude', None)
        if str(data) not in unique_dict.values():
            data.pop('isolateName', None)
            unique_dict[str(data['latitude']) + ', '
                       + str(data['longitude'])] = str(data)
            dict_geo[str(data['latitude']) + ', ' + str(data['longitude'
                    ])] = data
            dict_isolates[str(data['latitude']) + ', '
                         + str(data['longitude'])] = [isolateName]
        else:
            dict_isolates[str(data['latitude']) + ', '
                         + str(data['longitude'])].append(isolateName)
    return (dict_geo, dict_isolates)


class GeoAPI(Resource):

    def get(self):
        df = pd.read_csv(r"/home/student/Campii/geoIndex.csv",
                         low_memory=False)
        max_rows = df['id'].count()
        (dict_geo, dict_isolates) = createGeoDict(max_rows)
        return dict_geo


class GeoIsolatesAPI(Resource):

    def get(self):
        df = pd.read_csv(r"/home/student/Campii/geoIndex.csv",
                         low_memory=False)
        max_rows = df['id'].count()
        (dict_geo, dict_isolates) = createGeoDict(max_rows)
        return dict_isolates


