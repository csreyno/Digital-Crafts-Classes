# Given an array of statue sizes in a random order, how many additional statues
# would you need to arrange each statue so that each statue is only 1 unit taller than the previous one?

# All statues will have sizes between 0 and 20, and the given array will have a maximum length of 10.

# Example

# For the array of statues = [6, 2, 3, 8], the output should be
# numberStatues(statues) = 3.

# The completed set of statues needs the sizes 4, 5 and 7.


statues = [5, 4, 6]

lower_limit = statues[0]
for y in statues:
    if y <= lower_limit -1:
        lower_limit = y

upper_limit = statues[0]
for x in statues:
    if x >= upper_limit + 1:
        upper_limit = x

length = len(statues)

if (upper_limit - lower_limit) >= 0:
    print(((upper_limit - lower_limit)-(length))+1)
else:
    print(0)

# def numberStatues(statues):
# print( numberStatues( [6, 2, 3, 8]) ) 

#     return True

# ******** Tests ************

# print( numberStatues( [6, 2, 3, 8]) ) 
# print( numberStatues( [5, 4, 6] ) ) 
# print( numberStatues( [6, 3] ) )
# print( numberStatues( [0, 3] ) )
# print( numberStatues( [19, 5, 8, 14, 11]) ) 