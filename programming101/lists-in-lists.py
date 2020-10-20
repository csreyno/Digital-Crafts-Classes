# people = [
#     ["Chad", "Reynolds", 35],
#     ["Taylor", "Reynolds", 29]
# ]

# coords = [
#     [10,10],
#     [20,10],
#     [10,20]
# ]

# print(people[0])

# print(people[0][2]) # 0 points to the first list and the 2 points to the item in the first list at index 2 

# me = people[0]
# print(me[2]) #will print 35 

# #different example looping through nested lists
# more_people = [
#     ["Chad", "Reynolds", 35],
#     ["Taylor", "Reynolds", 29],
#     ["Bob", "Hope", 99],
#     ["Bassy", "Jones", 95]
# ]

# for person in more_people:
#     print("first", "last", "age")
#     for attribute in person:
#         print(attribute)


# #different example - printing x,y coords, looping through nested lists
# coordinates = [[10,10], [20,10],[10,20]]

#   for coord in coordinates:
#       idx = 0
#       print("Position:")
#       for position in cord:
#           p = "X"
#           if idx == 1:
#               p = "Y"
#           print(f"{p}-{position}")
#           idx += 1


# # Exercise 1

# shopping = [
#     ["Corn", "Potatoes", "Tomatoes"],
#     ["milk","eggs","cheese","yogurt"],
#     ['frozen pizza','popsicle']
# ]

# for lists in shopping:
#     print(lists)



# Exercise 2

shopping = [
    ["Corn", "Potatoes", "Tomatoes"],
    ["milk","eggs","cheese","yogurt"],
    ['frozen pizza','popsicle']
]

index = 0
for lists in shopping:
    print("%d. %s" % (index + 1,lists))