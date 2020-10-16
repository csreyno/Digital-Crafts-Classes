#Exercise 1
# bill = float(input("What is the bill amount?\n"))
# split = input("Split how many ways?\n")
# good = .20 * bill
# fair = .15 * bill
# bad  = .10 * bill

# if service == "good":
#     print(f"Tip Amount: ${good}\nTotal Amount: ${bill + good}")
# elif service == "fair":
#     print(f"Tip Amount: ${fair}\nTotal Amount: ${bill + fair}")
# elif service == "bad":
#     print(f"Tip Amount: ${bad}\nTotal Amount: ${bill + bad}")


# #Exercise 2 - split bill by umber of people
# bill = float(input("What is the bill amount?\n"))
# service = input("Was your service good, fair, or bad?\n")
# split = float(input("Split how many ways?\n"))
# good = .20 * bill
# fair = .15 * bill
# bad  = .10 * bill

# if service == "good":
#     print(f"Tip Amount: ${good}\nTotal Amount: ${bill + good}")
#     if split > 1:
#         print(f"Amount per person: ${(bill + good)/split}")
# elif service == "fair":
#     print(f"Tip Amount: ${fair}\nTotal Amount: ${bill + fair}")
#     if split > 1:
#         print(f"Amount per person: ${(bill + fair)/split}")
# elif service == "bad":
#     print(f"Tip Amount: ${bad}\nTotal Amount: ${bill + bad}")
#     if split > 1:
#         print(f"Amount per person: ${(bill + bad)/split}")

#Exercise 3 
# - Write a program that will prompt you for how many coins you want. 
# Initially you have no coins. It will ask you if you want a coin? If you type "yes",
# it will give you one coin, and print out the current tally. 
# If you type no, it will stop the program.

# print("You have 0 coins.")
# want = input("Do you want a coin? ")
# i = 0
# if want != "yes":
#     print("Bye")
# while want == "yes":
#     print(f"You have {i+1} coins.")
#     i += 1
#     want = input("Do you want another? ")
#     if want != "yes":
#         print("Bye")

#Exercise 4

# width = int(input("width? "))
# height = int(input("height? "))
# if width == 1 and height == 1:
#     print("*")
# else:
#     i = 0
#     print(width * "*")
#     while i < (height -2):
#         print("*"+(" " * (width - 2))+"*")
#         i += 1
#     print(width * "*")

#Exercise 5



#Exercise 6 - Print the multiplication table for numbers from 1 up to 10.

# i = 1
# while i < 11:
#     j = 1
#     while j < 11:
#         print(f"{i} X {j} = {i*j}")
#         j += 1
#     i += 1