# fruit = ["apple", "kiwi", "grape"]

# index = 0


# #while loop
# while index < len(fruit):
#     print(index, fruit[index])
#     index += 1

#for loop
# for fruits in fruit:  #for new variable "fruits" found in variable "fruit" print each value in "fruit" list
#     print(index,fruits)
#     index += 1

#exercise 1
# stars = ["vin diesel", "arnold", "stalone", "danny devito"]

# index = 0
# while index < len(stars):
#     print(index+1, stars[index])
#     index += 1

#exercise 2
# stars = ["vin diesel", "arnold", "stalone", "danny devito"]

# index = 0
# for my_stars in stars:
#     print(index +1, my_stars)
#     index += 1

#exercise 3
numbers = [2, 3, 3, 8]

total = 0
index = 0

while index < len(numbers):
    total = total + numbers[index]
    index += 1

print(total)