import requests
from bs4 import BeautifulSoup
import json
import codecs

#Get Elements
url = f'https://qr.taketv.net/card/takepzsnetsufi'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

table = soup.find('table', attrs={'class': 'table table-striped'})
rows = table.find_all('tr')
strong = table.find_all('strong')

Name = table.text.split()
Guthaben = table.text.split()
Bonuspunkte = table.text.split()

JName = Name[0]
JGuthaben = Guthaben[1]
JBonuspunkte = Bonuspunkte[2]

data = {}
data['takebar'] = []

data['takebar'].append({
    'name': JName
})

data['takebar'].append({
    'guthaben': JGuthaben
})
data['takebar'].append({
    'bonuspunkte': JBonuspunkte
})

with open('docs/result.json', 'wb', ) as f:
    json.dump(data, codecs.getwriter('utf-8')(f), ensure_ascii=False)

#Print Elements in Consol
print(Name[0])
print(Guthaben[1])
print(Bonuspunkte[2])


