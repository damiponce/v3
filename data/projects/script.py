import pandas as pd
import numpy as np
import json

future_json = {"arr": []}

data = pd.read_csv('allprojects.csv', sep=';', dtype='str').replace(np.nan, '', regex=True)

data

# key, img, url, date, title, description, technologies, links
for index, row in data.iterrows():
  techs = [x.strip() for x in row['technologies'].split(',')]
  _links = [x.strip() for x in row['links'].split(',')]
  links = []
  for link in _links:
    links.append({'name': '', 'url': link})
  this_obj = {"key": row["key"], 'img': row["img"], 'url': row["url"], 'links': links,  'technologies': techs, 'es': {'date': row["date"], 'title': row["title"], 'description': row["description"],}   }

  future_json['arr'].append(this_obj)
  json_obj = json.dumps(future_json, indent=4)

print(json_obj)

