#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
from flask_restful import Resource
import os
import datetime
from flask import abort

base_dir = os.path.join(os.path.dirname(__file__), '../../..')
here = lambda x: os.path.abspath(os.path.join(base_dir, x))

TEMPORAL_DB_PATH = here("data/timedata.csv")

def iso_date(df, start_date = None, end_date = None):
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
    start_datetime = None
    end_datetime = None
    if start_date:
        try:
            start_datetime = datetime.datetime.strptime(start_date, "%Y-%m-%d")
        except ValueError:
            return -1
    if end_date:
        try:
            end_datetime = datetime.datetime.strptime(end_date, "%Y-%m-%d")
        except ValueError:
            return -1

    max_rows = df['isolate_name'].count()
    isolates = {}
    for row in range(max_rows):
        iso_name = df['isolate_name'][row]
        date = df['date'][row]
        month_bool = df['month_bool'][row]
        day_bool = df['day_bool'][row]
        print "DATE: " + date
        isolate_datetime = datetime.datetime.strptime(date, "%Y-%m-%d")

        if start_datetime and end_datetime:
            if isolate_datetime >= start_datetime and isolate_datetime <= end_datetime:
                isolates[iso_name] = {'date': date, 'month_bool': month_bool,
                              'day_bool': day_bool}
        elif start_datetime and not end_datetime:
            if isolate_datetime >= start_date:
                isolates[iso_name] = {'date': date, 'month_bool': month_bool,
                              'day_bool': day_bool}
        elif end_datetime and not start_datetime:
            if isolate_datetime <= end_date:
                isolates[iso_name] = {'date': date, 'month_bool': month_bool,
                              'day_bool': day_bool}
        else:
            isolates[iso_name] = {'date': date, 'month_bool': month_bool,
                              'day_bool': day_bool}
        
    return isolates

class IsoDatesAllAPI(Resource):
    def get(self):
        df = pd.read_csv(TEMPORAL_DB_PATH, low_memory=False)
        isolates = iso_date(df)
        if isolates == -1:
            abort(400)
        return isolates

class IsoDatesAPI(Resource):

    def get(self, start_date, end_date):
        df = pd.read_csv(TEMPORAL_DB_PATH, low_memory=False)
        isolates = iso_date(df, start_date, end_date)
        if isolates == -1:
            abort(400)
        return isolates


