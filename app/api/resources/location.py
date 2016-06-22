#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
from flask_restful import Resource
import json
import os
base_dir = os.path.join(os.path.dirname(__file__), '../../..')
here = lambda x: os.path.abspath(os.path.join(base_dir, x))

ISOLATE_DB_PATH = here("data/geo/isolate_table.csv")
GEO_DB_PATH = here("data/geo/geo_table.csv")
GEO_JSON_PATH = here("data/geo/json")

def create_geo_dict(isolates_df, geo_df):
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

    dict_geo = {}
    dict_isolates = {}

    for idx, row in geo_df.iterrows():
        data = None
        with open(os.path.join(GEO_JSON_PATH, str(row['misc']) + '.json')) as f:
            data = json.load(f)
        for key, value in data.iteritems():
            dict_geo[key] = value
    
    for idx, row in isolates_df.iterrows():
        data = None
        isolate_name = row['name']
        with open(GEO_JSON_PATH + "/" + str(row['geo_id'])
                  + '.json') as f:
            data = json.load(f)
        for key, value in data.iteritems():
            if key not in dict_isolates:
                dict_isolates[str(value[u'latitude']) + ', '
                         + str(value[u'longitude'])] = [isolate_name]
            else:
                dict_isolates[str(value[u'latitude']) + ', '
                         + str(value[u'longitude'])].append(isolate_name)

    return dict_geo, dict_isolates



class GeoAPI(Resource):

    def get(self):
        isolates_df = pd.read_csv(ISOLATE_DB_PATH, low_memory=False)
        geo_df = pd.read_csv(GEO_DB_PATH, low_memory=False)
        (dict_geo, dict_isolates) = create_geo_dict(isolates_df, geo_df)

        return dict_geo


class GeoIsolatesAPI(Resource):

    def get(self):
        isolates_df = pd.read_csv(ISOLATE_DB_PATH, low_memory=False)
        geo_df = pd.read_csv(GEO_DB_PATH, low_memory=False)
        (dict_geo, dict_isolates) = create_geo_dict(isolates_df, geo_df)

        return dict_isolates




