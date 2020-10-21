
# https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Programming-102/10-classes.md

#Instantiation - In programming terms this is creating an self contained 'instance' of a class that can be used in the program.

#attributes - Are values in a class that can be accessed using the accessed using the attribute name. Much like key in a dictionary


# class Person:
#     pass        #this simply allows you to create an empty class

#===========================

# class Person:
#     def __init__(ignore_for_now):       #__init__ is special and called automatically, otherwise it's just a function
#           print('You have initilized the person class')
   

# clint = Person()
# anna = Person()

#===========================

# class Person:
#       def __init__(self):
#           #using self allows us to modify the class, self is the standard for what is used for this
#           # name attribute
#           self.name = "Clint"
#           # age attribute
#           self.age = 38

# clint = Person()

# print(clint.age)

#===========================

# class Person:
#       def __init__(self, name, age):
#           self.name = name
#           self.age = age

# clint = Person("Clint", 38)
# anna = Person("Anna", 37)

# print(clint.name, clint.age)
# print(anna.name, anna.age)

#===========================

# class Person:
#       # adding a default value for height
#       def __init__(self, name, age, height="normal"):
#           self.name = name
#           self.age = age
#           self.height = height

# clint = Person("Clint", 38, "short")
# anna = Person("Anna", 37)

# print(clint.name, clint.age, clint.height)
# print(anna.name, anna.age, anna.height)

#===========================

# Exercise 1

#Create a program that has a class named Vehicle.
#   Make the Vehicle class have 'wheels' as an attribute.
#   Make the Vehicle class have 4 as the default value for the class.
#   Create 5 different instances of the class with at least one being a motorcycle.

class Vehicle:
    def __init__(self,type,wheels=4):     
        self.type = type
        self.wheels = wheels

truck = Vehicle("Truck")
motorcycle = Vehicle("Motorcycle", 2)
minivan = Vehicle("Minivan")
motorhome = Vehicle("Motorhome", 6)
semi = Vehicle("Semi Truck", 18)

print(truck.type, truck.wheels)
print(motorcycle.type, motorcycle.wheels)
print(minivan.type, minivan.wheels)
print(motorhome.type, motorhome.wheels)
print(semi.type, semi.wheels)

