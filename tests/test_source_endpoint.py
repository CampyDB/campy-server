import json
import math
def test_temporal_endpoint(app):
    client = app.test_client()
    data = client.get("/api/source")
    assert data._status_code == 200
    assert isinstance(data.data, str)
    assert data.data
    data_dict = json.loads(data.data)
    assert isinstance(data_dict, dict)

    for key, value in data_dict.iteritems():
        assert isinstance(key, unicode)
        assert isinstance(data_dict[key]['Sample Source'], unicode) or math.isnan(data_dict[key]['Sample Source'])
        assert data_dict[key]['Sample Source']
        assert isinstance(data_dict[key]['Sample Type'], unicode) or math.isnan(data_dict[key]['Sample Type'])
        assert data_dict[key]['Sample Type']
        assert isinstance(data_dict[key]['Sample Type 2'], unicode) or math.isnan(data_dict[key]['Sample Type 2'])
        assert data_dict[key]['Sample Type 2']
        assert isinstance(data_dict[key]['Source General'], unicode) or math.isnan(data_dict[key]['Source General'])
        assert data_dict[key]['Source General']
        assert isinstance(data_dict[key]['Source_Specific_1'], unicode) or math.isnan(data_dict[key]['Source_Specific_1'])
        assert data_dict[key]['Source_Specific_1']
        assert isinstance(data_dict[key]['Source_Specific_2'], unicode) or math.isnan(data_dict[key]['Source_Specific_2'])
        assert data_dict[key]['Source_Specific_2']

