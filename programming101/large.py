#Exercise 1

# n = 1
# while n < 101:
#     print(n*(n+1)/2)
#     n += 1

#Exercise 2 Given a number, print its factors.


#Exercise 3

# name = ""     #empty string is giving an empty value here, b/c variables must be given a value                  
# while name != "clint":
#     name = input("please say your name is clint\n")

# print("Great I knew you could it.")

num = 5
guess = 0
while guess != num:
    guess = int(input("What's the number?\n"))
    if guess == num:
        print("Correct! You Win!")
    elif guess < num:
        print("Number too low!")
    else:
        print("Number too high!")


#Exercise 4


