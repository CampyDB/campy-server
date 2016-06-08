#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
from flask_restful import Resource


def isoDate(df):
    """
    Gets the temporal data for isolates in ISO format from a CSV.

    Notes:
        month_bool indicates whether a month was supplied. Default value for the month wouthout one
        specified is "01"
        day_bool indicates whether a day was supplied. Default value for the day without one
        specified is "01"

    Args:
        df (object): Pandas Data Frame object

    Returns:
        isolates: Temporal data dictionary
    """

    max_rows = df['isolate_name'].count()
    isolates = {}
    for row in range(max_rows):
        iso_name = df['isolate_name'][row]
        date = df['date'][row]
        month_bool = df['month_bool'][row]
        day_bool = df['day_bool'][row]
        isolates[iso_name] = {'date': date, 'month_bool': month_bool,
                              'day_bool': day_bool}
    return isolates


class IsoDatesAPI(Resource):

    def get(self):
        df = \
            pd.read_csv(r"/home/student/cgf/campy-server/app/api/resources/timedata.csv"
                        , low_memory=False)
        isolates = isoDate(df)
        return isolates


