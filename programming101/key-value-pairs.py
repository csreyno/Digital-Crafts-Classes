# https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Programming-102/5-key-value-pairs.md

# movie = {
#     "name":"Star Wars",
#     "episode":4,
#     "year":"1977",
#     "villains":["Vader","Tarkin"],
#     "heros":["Luke","Leia", "Han"],
# }

# print(movie)

# print(movie["year"])
# print(movie["heros"])

# bad_guys = movie["villains"]
# print(bad_guys)

# Exercise 1:
#Create a program that starts with an empty dictionary.
#Add 3 different key value pairs to the empty dictionary.

# movie = {
#     "name":"Star Wars",
#     "episode":4,
#     "year":"1977",
# }
# print(movie)

# movie["ships"] = ["Falcon", "Star Destroyer", "Death Star"]
# print(movie)

# movie["ships"].append("x-wing")
# print(movie)

# for key in movie: #prints the keys
#     print(key)

# for key in movie:   #prints items in each key
#     print("*** NEXT ITEM ***")
#     print(movie[key])

#=============================================================
#Exercise 2 - 

# person = {
#     "first_name":"Chad",
#     "last_name":"Reynolds",
#     "age":35,
#     "hair_color":"brownish",
# }

# for key in person:
#     print(key, person[key])
# print(f"Hello {person['first_name']} {person['last_name']}. You are {person['age']} and have {person['hair_color']} hair.")

#=============================================================
#Exercise 3 - 
# Create a program that has a list of dictionaries of people, with each dictionary including name, phone, email.
    # For each dictionary print the items in the dictionary.

