

# print("This is the argument")



#=======================

# def add_two_numbers(a,b):
#     print(a+b)

# add_two_numbers(1,3)
# add_two_numbers("a","b")

# def me_print(any):
#     print(any)

# me_print(1)

#========================

#Exercise 1

# Creat a program that has a function that will multiply two numbers together and print out the results.

# Make the program properly handle an exception if something besides a number is passed as an argument.
# Have it print out 3 different sets of numbers

# def multi(a,b):
#     if a or b != int:
#         print('enter a number')
#     else:
#         print(a*b)

# multi(5,4)



#========================

#Exercise 2
# Create a program that has a function that will accept 3 arguments as title, genre, year and then
#  print out the values in list format.

# def movie(title, genre, year): 
#     print(f"1. Title: {title}\n2. Genre: {genre}\n3. Year: {year}")

# movie("star wars","sci-fi",1977)



#========================

#Exercise 3 - Create a program that does the same thing as above, but the
#  function only accepts a single argument to get the same results.

## version 1
# def movie(movie_item):
#     title = movie_item[0]
#     genre = movie_item[1]
#     year = movie_item[2]

#     print(f"1. Title: {title}\n2. Genre: {genre}\n3. Year: {year}")

# movie(["star wars","sci-fi",1977])

##version 2
def movie(movie_item):
    idx = 1
    for item in movie_item:
        print(f"{idx}. {item} : {movie_item[item]}")
        idx += 1

movie({"Genre":"Horror", "Title":"Clint at the beach", "year":2020})

movie({"Nothing":"No Movies"})

