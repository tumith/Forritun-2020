import csv
# from pymongo import MongoClient
# from random import randint
# #Step 1: Connect to MongoDB - Note: Change connection string as needed
# client = MongoClient() #port=27017
# db=client.Ibuafoldi
# collection = db.IbuafoldiCN
# data = collection.find_one({})


def is_int(string):
    try:
        int(string)
        return True
    except ValueError:
        return False

current_lands_svaedi = ""
new_file = []

with open('report-2019.csv', encoding="UTF8") as csvSkjal:
    csvReader = csv.reader(csvSkjal, delimiter=',')
    for row in csvReader:
        if is_int(row[0]) is False:
            current_lands_svaedi = row[0]
        else:
            new_row = []

            for i in range(0, len(row)):
                if i == 2:
                    new_row.append(current_lands_svaedi)
                new_row.append(row[i])

            new_file.append(new_row)

with open("cleaned_output.csv", "w", newline="", encoding="UTF8") as f:
    writer = csv.writer(f)
    writer.writerows(new_file)