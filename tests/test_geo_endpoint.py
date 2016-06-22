import json

def test_temporal_endpoint(client):
    geo_data = client.get("/api/geo")
    assert geo_data._status_code == 200
    assert isinstance(geo_data.data, str)
    assert geo_data
    geo_dict = json.loads(geo_data.data)
    assert isinstance(geo_dict, dict)

    isolate_data = client.get("/api/geoisolates")
    assert isolate_data.status_code == 200
    assert isinstance(isolate_data.data, str)
    assert isolate_data.data
    isolate_dict = json.loads(isolate_data.data)
    assert isinstance(geo_dict, dict)

    for key in isolate_dict:
        assert isinstance(key, unicode)
        assert ',' in key
        for isolate in isolate_dict[key]:
            assert isinstance(isolate, unicode)

    for key in geo_dict:
            assert isinstance(key, unicode)
            assert ',' in key
            assert isinstance(geo_dict[key]['osm_api_data'], dict)
            assert geo_dict[key]['osm_api_data']
            assert isinstance(geo_dict[key]['latitude'], float)
            assert isinstance(geo_dict[key]['longitude'], float)