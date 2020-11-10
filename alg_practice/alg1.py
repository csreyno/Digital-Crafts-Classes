#exercise 1 - fizzbuzz
# Write a program that prints the numbers from 1 to 100. 
# But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
# For numbers which are multiples of both three and five print "FizzBuzz".
# i = 1
# while i < 101:
#     if i % 3 == 0:
#         if i % 5 == 0:
#             print("fizzbuzz")
#         else:
#             print("fizz")
#     elif i % 5 == 0:
#         print("buzz")
#     else:
#         print(i)
#     i += 1

#exercise 2 - Sum of All Multiples of 3 or 5 below 1000
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

i = 1
count = 0
while i <= 1000:
    if i % 3 == 0 or i % 5 == 0:
        count += i
    i += 1
print(count)

#or for same  thing:

# ans=0
# for i in range(1,1000): # range is not inclusive
#     if(i % 3 == 0 or i % 5 == 0):
#         ans += i
# print(ans)