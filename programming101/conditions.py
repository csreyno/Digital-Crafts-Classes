False #data type, true or false, called boolean
True

print(1 == 2)   #False
print(1 <  2)   #True
print(1 >  2)   #False
print(1 >= 1)   #True
print(1 <= 2)   #True
print(1 != 1)   #False

a = 1
b = 2
print(a == b) #False

name = "Chad"
print(name == "Chad") #True
print(name != "George") #True b/c this is a true statement
print(name == "chad") #False (b/c of lower case 'c')

if 1 < 3:
    print("this will print") #b/c the above conditional is True
if 1 > 3:
    print("this will NOT print") #b/c the conditional is False.

#Falsy Expressions:
None    #Falsy
False   #Falsy
0       #Falsy
""      #Falsy
[]      #Falsy
{}      #Falsy

#Exercises
print( 1== 3)
print( 4<= 4)
print("a" == "a")
print(10 > 11)
print("b" > "c")

my_number = 5
print(my_number < 2)
print(my_number > 2)
print(my_number < 10)

name = "Bob"
if name == "Bob":
    print("YES these strings are the same!")

name = "Dobby"
if name != "Bob":
    print("NO these strings are not the same!")