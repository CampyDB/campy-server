import json

def test_cgf_endpoint(client):
    data = client.get("/api/newick")
    assert data._status_code == 200
    assert isinstance(data.data, str)
    data_dict = json.loads(data.data)
    assert data.data
    assert isinstance(data_dict, dict)

    assert 'genomes' in data_dict
    assert 'tree' in data_dict
    assert isinstance(data_dict['tree'], unicode)
    assert data_dict['tree']

    for isolate_set in data_dict:
        for isolate_name in isolate_set:
           assert isinstance(isolate_name, unicode)