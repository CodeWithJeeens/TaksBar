import requests
from bs4 import BeautifulSoup
import json

#Get Elements
url = f'https://qr.taketv.net/card/takepzsnetsufi'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

table = soup.find('table', attrs={'class': 'table table-striped'})
rows = table.find_all('tr')

Name = rows[0].text.split()
Guthaben = rows[1].text.split()
Bonuspunkte = rows[2].text.split()

#save in json file
with open('D:/xmap/htdocs/result.json', 'w') as f:
  json.dump(Name, f)
  json.dump(Guthaben, f)
  json.dump(Bonuspunkte, f)

#Print Elements in Consol
print(Name)
print(Guthaben)
print(Bonuspunkte)
