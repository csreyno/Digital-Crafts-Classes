# #List Examples - Brackets and comma separated items
# [1,2,4] #valid list
# ["Hi", "My name is", "Chad", "This is a long string"] #valid list of strings
# ["Hi",2,True, 3.5, None]   #this is a valid list in Python

# #Can be asigned a variable
# my_list = [1,2,3]
# print(my_list)
# name = "chad"
# age = 36
# married = True

# my_new_list = [name,age,married, "I Like this", [1,3,4]]
# print(my_new_list)

# #index items start at O so:
# print(my_new_list[1]) #will print "1"

# #can assign a variable to an item in a list ex:
# my_name = my_new_list[0]
# print(my_name)

# #exercise 1
# favorite_foods = ["apple", "kiwi", "grape"]
# print(favorite_foods)
# print(favorite_foods[2])

# exercise 2
things = ["cup", "bag", "phone", "cord"]
# print(things)

# count = 1
# for things1 in things:
#     print(things1)

index = 0
while index < len(things):
    print("%d. %s" % (index + 1, things[index]))
    index += 1

#exercise 3
favorite = int(input("which of the above items is most interesting? Pick a number 1-4:\n"))

if favorite == 1:
    print("you chose %s, you must like %ss" % (things[0], things[0]))
elif favorite == 2:
    print("you chose %s, you must like %ss" % (things[1], things[1]))
elif favorite == 3:
    print("you chose %s, you must like %ss" % (things[2], things[2]))
elif favorite == 4:
    print("you chose %s, you must like %ss" % (things[3], things[3]))