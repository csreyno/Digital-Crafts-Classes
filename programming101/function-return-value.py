## https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Programming-102/8-function-return-value.md

# def add_numbers(a,b):
#     result = a + b
#     return result

# final = add_numbers(1,3) / add_numbers(4,6)
# print(final)

## implicit returns - in python the implicit return is always "None", if no 'return' statement, see below

# def multi_numbers(a,b):
#     a*b

# print(multi_numbers(5,6))

## explicit return - return is explicitly stated below, using 'return'

# def multi_numbers(a,b):
#     return a*b

# print(multi_numbers(5,6))

###==============

# def make_dictionary(first, last, phone, zip):
#     return{
#         "first_name":first,
#         "last_name":last,
#         "phone_number":phone,
#         "zip_code":zip
#     }

# clint_data = make_dictionary("clint", "fleet", "803-222-0090", "30903")

# for key in clint_data:
#     print(key)

###==============

#exercise 1 - Write a program that has a function with two parameters.
#return the concatinated value of the two parameters.
#print the results

# def first_last(a,b):
#     full_name = f"{a} {b}"
#     return(full_name)

# print(first_last("chad","reynolds"))

##exercise 2 
# - Write a program that has a function named total_count that 
# expects a list of strings as it argument when the function is called.
#Have the returned value be a dictionary with the keys 'list_length' and 'total_chars'.
#The list_length value needs to be the length of the list and the total_chars needs to be the total count of characters of all of the items in the array.
#Call the function 3 times with 3 different lists.
#(hint) len is usable on lists and strings.

#below is wrong

def total_count():
    list_length = len(total_count([])
    total_characters = len(total_count())
    totals = f"list length: {list_length}, total characters: {total_characters}"
    return(totals)

print(total_count["i", "am", "great"]