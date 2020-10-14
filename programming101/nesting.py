#Ex1
# name = input("what is your name?\n")
# num = len(name)
# if num > 3 and num < 15:
#     if num == 4:
#         print('perfect length')
#     else:
#         print("it's an ok length")

#     print(f"welcome {name}")
# else:
#     print("%s is not a good number of characters" % len(name))

# if num < 3 or num > 15:
#     print("your number is not between 3 and 15")
# else:
#     print("Normal length name")

#Ex2
# name = input("give me your name")
# if not name:
#     print("you must give a name")
# else:
#     print(name)

#exercise
pet_name = input("What is your pet name?\n")
length = len(pet_name)
if length < 3:
    print("Name length is too short!")
else:
    if length > 3:
        print(f"AWWW sweet {pet_name}")
    if pet_name == "Shadow":
        print(("El Gato Diablo"))
    elif pet_name == "Daisy":
        print("Good Dog!")