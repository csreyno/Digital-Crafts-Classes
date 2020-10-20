#Exercise 1 - create and print th sum of a list of numbers

# numbers = [2, 3, 3, 8]

# total = 0
# index = 0

# while index < len(numbers):
#     total = total + numbers[index]
#     index += 1

# print(total)

#Exercise 2 - Create a list of numbers, print the largest of the numbers.

# numbers = [2, 8, 3, 9]

# largest = numbers[0]
# for x in numbers:
#     if x >= largest + 1:
#         largest = x
# print(largest)

#exercise 3 - create a list of numbers, print the smallest of the numbers

# numbers = [2, 8, 3, 9]

# smallest = numbers[0]
# for x in numbers:
#     if x <= smallest + 1:
#         smallest = x
# print(smallest)

# #exercise 4 - Create a list of numbers, print each number in the list that is even

# numbers = [2, 8, 3, 9]  #doesnt work but not sure why

# x = numbers[0]
# while x <= len(numbers):
#     if x % 2 == 0:
#         print(x)
#     x += 1

#exercise 5 - create a list of numbers, print each number that is greater than zero
# numbers = [-12, 8, -3, 9]

# x = numbers[0]              #also doesnt work, not sure why
# while x <= len(numbers):
#     if x > 0:
#         print(x)
#     x += 1


#exercise 6 - Create a list of numbers, create a new list which 
# contains every number in the given list which is positive

# numbers = [-12, 8, -3, 9, 10, 12, 14]




#exercise 7 - Create a list of numbers, and a single factor (also a number), create a 
# new list consisting of each of the numbers in the first list multiplied by the 
# factor. Print this list.

# numbers = [-12, 8, -3, 9]
# x = 2

# i = 0
# while i < len(numbers):
#     print(x * (numbers[0 + i]))
#     i += 1


#exercise 8 - Given a string, print the string reversed.

numbers = [-12, 8, -3, 9]

i = len(numbers) -1
while i >= 0:
    print(numbers[i])
    i -= 1