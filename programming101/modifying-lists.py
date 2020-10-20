# my_pets = ["kira", "bullet", "potsy"]

# my_pets.append("rainbow")  #uses .append() method to add to the list
# print(my_pets)

# my_dogs = ["kira", "bullet"]
# my_cat = ["rainbow"]

# my_pets = my_dogs + my_cat  #concatenation does not modify the original list, it creates a new one

# print(my_pets)

# new_set_pets = []
# new_set_pets.extend(my_dogs) #  .extend() method extends a list, vs .append() adds a "value" to a list
# print(new_set_pets)
# new_set_pets.extend(["G","M"])
# print(new_set_pets)

# my_pets[1] = "train"
# print(my_pets)



#Exercise 1

# names = ["daisy", "bob", "kat", "jon"]
# names.append("liz")
# names.append("rob")
# print(names)

#Exercise 2

# names = ["rob", "bob", "kat", "jon", "liz"]
# names[2] = "foo"
# names[4] = "bar"
# print(names)


#Exercise 3

names = ["rob", "bob", "kat", "jon", "liz"]

index = 0
while index < len(names):
    print(names[0])
    del names[0]
    index += 1