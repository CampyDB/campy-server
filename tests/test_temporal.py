from app.api.resources.temporal import TEMPORAL_DB_PATH, iso_date
import datetime
import os
import pandas as pd

def test_cgf():
    assert os.path.exists(TEMPORAL_DB_PATH)
    df = pd.read_csv(TEMPORAL_DB_PATH)
    assert isinstance(df, pd.core.frame.DataFrame)
    data = iso_date(df)
    assert isinstance(data, dict)


    for key in data:
        assert datetime.datetime.strptime(data[key]['date'], "%Y-%m-%d")
        assert (data[key]['day_bool'] == 1 or data['Wa11_6']['day_bool'] == 0)
        assert (data[key]['month_bool'] == 1 or data[key]['month_bool'] == 0)




