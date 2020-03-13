from pymongo import MongoClient
from random import randint
import pprint
#Step 1: Connect to MongoDB - Note: Change connection string as needed
client = MongoClient() #port=27017
db=client.IcelandInfo
collection = db.IcelandInfoCN
data = collection.find_one({})

pp = pprint.PrettyPrinter(indent=4)
pp.pprint(data)