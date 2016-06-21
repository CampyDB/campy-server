import pandas as pd
import json

def createGeoDict(max_rows):
    """
    Gets a dictionary of geo data and a dictionary of isolates that map to the geodata. Uses an 
    index csv to load in geo data stored in JSON files for the strain isolates. The geo data
    was pulled from the Nominatim api from OpenStreetMap. 

    Notes:
        The geo dictionary and isolates have the same key value, which is just "<lat coord>, <long cord>".
    Args:
        max_rows (int): CSV max row

    Returns:
        dictGeo: Geo data dictionary
        dictIsolates: Isolate dictionary.
    """

    unique_dict = {}
    dict_geo = {}
    dict_isolates = {}

    for row in range(max_rows):
        data = None
        with open('/home/student/Campii/geodata2/' + str(df['id'][row])
                  + '.json') as f:
            data = json.load(f)
        isolate_name = data['isolate_name']
        data.pop('isolate_name', None)
        if 'oLatitude' in data:
            data.pop('oLatitude', None)
        if 'oLongitude' in data:
            data.pop('oLongitude', None)
        if str(data) not in unique_dict.values():
            data.pop('isolateName', None)
            unique_dict[str(data['latitude']) + ', '
                       + str(data['longitude'])] = str(data)
            dict_geo[str(data['latitude']) + ', ' + str(data['longitude'
                    ])] = data
            dict_isolates[str(data['latitude']) + ', '
                         + str(data['longitude'])] = []
            dict_isolates[str(data['latitude']) + ', '
                         + str(data['longitude'])].append([isolate_name, str(df['id'][row])])
        else:
            pair = {"id":df['id'][row], "isolate_name":isolate_name}
            dict_isolates[str(data['latitude']) + ', '
                         + str(data['longitude'])].append([isolate_name, str(df['id'][row])])
    return (dict_geo, dict_isolates)

df = pd.read_csv(r"/home/student/Campii/geoIndex.csv",
                         low_memory=False)
max_rows = df['id'].count()

geo_dict, dict_isolates = createGeoDict(max_rows)

geo_id = []
iso_geoid = []
iso_id = []
iso_name = []
country = []
lat = []
lng = []
misc = []
region = []
subregion = []



geoid = 1
isoid = 1
for k, v in dict_isolates.iteritems():
    geo_id.append(geoid)
    address = geo_dict[k][u'address']
    if address:
        location = address.split (", ")
        locationCount = len(location)
        if locationCount == 1:
            country.append(location[0])
            region.append("")
            subregion.append("")
        elif locationCount == 2:
            country.append(location[1])
            region.append(location[0])
            subregion.append("")
        elif locationCount == 3:
            if location[locationCount-1] != u"North America":
                country.append(location[locationCount - 1])
                region.append(location[locationCount - 2])
                subregion.append(location[locationCount - 3])
            else:
                country.append(location[locationCount - 2])
                region.append(location[locationCount - 3])
                subregion.append("")
        elif locationCount > 3:
            if location[locationCount-1] != u"North America":
                country.append(location[locationCount - 1])
                region.append(location[locationCount - 2])
                subregion.append(location[locationCount - 3])
            else:
                country.append(location[locationCount - 2])
                region.append(location[locationCount - 3])
                subregion.append(location[locationCount - 4])

        lat.append(geo_dict[k]["latitude"])
        lng.append(geo_dict[k]["longitude"])
        misc.append(geoid)
        print ("v: " + str(v))
        for isolate in v:
            print ("ISOLATE " + str(isolate))
            iso_id.append(isolate[1])
            isoid = isoid + 1
            iso_geoid.append(geoid)
            iso_name.append(isolate[0])
    else:
        country.append("ERROR GEOCODING")
        region.append("ERROR GEOCODING")
        subregion.append("ERROR GEOCODING")
        lat.append(geo_dict[k]["latitude"])
        lng.append(geo_dict[k]["longitude"])
        misc.append(geoid)
        for isolate in v:
            print ("ISOLATE " + str(isolate))
            iso_id.append(isolate[1])
            isoid = isoid + 1
            iso_geoid.append(geoid)
            iso_name.append(isolate[0])
    print str(geoid)
    if str(geoid) == "12":
        dump = {k:geo_dict[k]}
        print str(dump)
    dump = {k:geo_dict[k]}
    with open(str(geoid) + ".json", 'w') as f:
        json.dump(dump, f)
    geoid = geoid + 1

dfe = pd.DataFrame({'id' : iso_id, 'name' : iso_name, 'geo_id':iso_geoid})
dfe.to_csv("/home/student/cgf/re_geo/isolate_table.csv", cols=['id', 'name', 'geo_id'], index = False)

dfd = pd.DataFrame({'id' : geo_id, 'lat' : lat, 'lng' : lng, 'country':country, 'region' : region, 'subregion' : subregion, 'misc' : geo_id})
dfd.to_csv("/home/student/cgf/re_geo/geo_table.csv", cols=['id', 'lat', 'lng', 'country', 'region', 'subregion', 'misc'], index = False, encoding = 'utf-8')




