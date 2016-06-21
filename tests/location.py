from app.api.resources.location import create_geo_dict, ISOLATE_DB_PATH, GEO_DB_PATH, GEO_JSON_PATH
import os
import pandas as pd

def test_location():
    assert os.path.exists(ISOLATE_DB_PATH)
    assert os.path.exists(GEO_DB_PATH)
    assert os.path.exists(GEO_JSON_PATH)
    geo_df = pd.read_csv(GEO_DB_PATH)
    assert isinstance(geo_df, pd.core.frame.DataFrame)
    isolates_df = pd.read_csv(ISOLATE_DB_PATH)
    assert isinstance(isolates_df, pd.core.frame.DataFrame)

    (dict_geo, dict_isolates) = create_geo_dict(isolates_df, geo_df)
    assert isinstance(dict_geo, dict)
    assert isinstance(dict_isolates, dict)

    for location in dict_geo:
        assert u'latitude' in dict_geo[location]
        assert u'longitude' in dict_geo[location]
        assert u'osm_api_data' in dict_geo[location]

    for location in dict_isolates:
        assert location in dict_geo.keys()


    



