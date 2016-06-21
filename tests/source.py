from app.api.resources.source import source_data, SOURCE_DB_PATH
import os
import pandas as pd

def test_cgf():
    assert os.path.exists(SOURCE_DB_PATH)
    df = pd.read_csv(SOURCE_DB_PATH)
    assert isinstance(df, pd.core.frame.DataFrame)
    data = source_data(df)
    for key in data:
        assert 'Sample Type' in data[key]
        assert 'Sample Type 2' in data[key]
        assert 'Source General' in data[key]
        assert 'Source_Specific_1' in data[key]
        assert 'Source_Specific_2' in data[key]
        


