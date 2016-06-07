import pandas as pd

from collections import defaultdict
import re
from flask_restful import Resource, reqparse
def source_data(df):
    """
    Gets the raw source info for insolates stored in the csv.

    Args:
        df (object): Pandas Data Frame object

    Returns:
        df_source_into.to_dict(): Source info dictionary
    """
    df.index = list(df["Strain Name"])
    source_cols = ['Sample Type', 'Sample Type 2', 'Source General',  'Source_Specific_1', 'Source_Specific_2', 'Sample Source']
    df_source_info = df[source_cols].transpose()
    return df_source_info.to_dict()
    


class SourceData(Resource):    
    def get(self):
        df = pd.read_csv(r"/home/student/cgf/campy-server/app/api/resources/original.csv", low_memory = False)
        isolates = source_data(df)
        return isolates
