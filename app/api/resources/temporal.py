#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
from flask_restful import Resource, reqparse
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
        isolate_datetime = datetime.datetime.strptime(date, "%Y-%m-%d")

        if start_datetime and end_datetime:
            if isolate_datetime >= start_datetime and isolate_datetime <= end_datetime:
                isolates[iso_name] = {'date': date, 'month_bool': month_bool,
                              'day_bool': day_bool}
        elif start_datetime and not end_datetime:
            if isolate_datetime >= start_datetime:
                isolates[iso_name] = {'date': date, 'month_bool': month_bool,
                              'day_bool': day_bool}
        elif end_datetime and not start_datetime:
            if isolate_datetime <= end_datetime:
                isolates[iso_name] = {'date': date, 'month_bool': month_bool,
                              'day_bool': day_bool}
        else:
            isolates[iso_name] = {'date': date, 'month_bool': month_bool,
                              'day_bool': day_bool}
        
    return isolates

def iso_count(df, start_date = None, end_date = None):
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
        isolate_datetime = datetime.datetime.strptime(date, "%Y-%m-%d")
        isolate_datetime_strft = isolate_datetime.strftime("%Y-%m-%d")


        if start_datetime and end_datetime:
            if isolate_datetime >= start_datetime and isolate_datetime <= end_datetime:
                if isolate_datetime_strft not in isolates:
                    isolates[isolate_datetime_strft] = {'count': 1}
                else:
                    isolates[isolate_datetime_strft]['count'] = isolates[isolate_datetime_strft]['count'] + 1
        elif start_datetime and not end_datetime:
            if isolate_datetime >= start_datetime:
                if isolate_datetime_strft not in isolates:
                    isolates[isolate_datetime_strft] = {'count': 1}
                else:
                    isolates[isolate_datetime_strft]['count'] = isolates[isolate_datetime_strft]['count'] + 1
        elif end_datetime and not start_datetime:
            if isolate_datetime_strft <= end_datetime:
                if isolate_datetime not in isolates:
                    isolates[isolate_datetime_strft] = {'count': 1}
                else:
                    isolates[isolate_datetime_strft]['count'] = isolates[isolate_datetime_strft]['count'] + 1
        else:
            if isolate_datetime_strft not in isolates:
                isolates[isolate_datetime_strft] = {'count': 1}
            else:
                isolates[isolate_datetime_strft]['count'] = isolates[isolate_datetime_strft]['count'] + 1

        
    return isolates

class IsoDatesAllAPI(Resource):
    def get(self):
        df = pd.read_csv(TEMPORAL_DB_PATH, low_memory=False)
        isolates = iso_date(df)
        if isolates == -1:
            abort(400)
        return isolates

class IsoDatesAPI(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('start-date', location='json')
        self.reqparse.add_argument('end-date', location='json')

    def post(self):
        args = self.reqparse.parse_args()
        print str(args)
        df = pd.read_csv(TEMPORAL_DB_PATH, low_memory=False)
        print (str(args['start-date']) + " " + str(args['end-date']))
        isolates = iso_date(df, args['start-date'], args['end-date'])
        if isolates == -1:
            abort(400)
        return isolates

class IsoDatesCountAPI(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('start-date', location='json')
        self.reqparse.add_argument('end-date', location='json')

    def post(self):
        args = self.reqparse.parse_args()
        print str(args)
        df = pd.read_csv(TEMPORAL_DB_PATH, low_memory=False)
        print (str(args['start-date']) + " " + str(args['end-date']))
        isolates = iso_count(df, args['start-date'], args['end-date'])
        if isolates == -1:
            abort(400)
        return isolates

class DCIsoCount(Resource):
    def get(self):
        df = pd.read_csv(TEMPORAL_DB_PATH, low_memory=False)
        isolates = iso_count(df)
        histoList = []
        for h in isolates:
            histoList.append({"date":h, "value":isolates[h]['count']})
        return histoList





