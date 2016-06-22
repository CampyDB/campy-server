import json
import datetime

def test_temporal_endpoint(client):
    data = client.get("/api/temporal")
    assert data._status_code == 200
    assert isinstance(data.data, str)
    assert data.data
    data_dict = json.loads(data.data)
    assert isinstance(data_dict, dict)

    for key, value in data_dict.iteritems():
        assert isinstance(key, unicode)
        assert data_dict[key]['date']
        assert isinstance(data_dict[key]['date'], unicode)
        assert datetime.datetime.strptime(data_dict[key]['date'], "%Y-%m-%d")
        assert isinstance(data_dict[key]['day_bool'], int)
        assert isinstance(data_dict[key]['month_bool'], int)