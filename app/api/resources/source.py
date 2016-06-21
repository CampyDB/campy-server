#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
import re
from collections import defaultdict
from flask_restful import Resource, reqparse

import os
base_dir = os.path.join(os.path.dirname(__file__), '../../..')
here = lambda x: os.path.abspath(os.path.join(base_dir, x))

SOURCE_DB_PATH = here("data/source.csv")

def source_data(df):
    """
    Gets the raw source info for insolates stored in the csv.

    Args:
        df (object): Pandas Data Frame object

    Returns:
        df_source_into.to_dict(): Source info dictionary
    """

    df.index = list(df['Strain Name'])
    source_cols = [
        'Sample Type',
        'Sample Type 2',
        'Source General',
        'Source_Specific_1',
        'Source_Specific_2',
        'Sample Source',
        ]
    df_source_info = df[source_cols].transpose()
    return df_source_info.to_dict()


class SourceAPI(Resource):

    def get(self):
        df = \
            pd.read_csv(SOURCE_DB_PATH
                        , low_memory=False)
        isolates = source_data(df)
        return isolates


