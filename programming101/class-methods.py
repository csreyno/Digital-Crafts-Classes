
#  https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Programming-102/11-class-methods.md

#in game terms mob stands for mobile. It can be anything that moves including enemies, npc, and the player's characters.
# class Mob:
#     def __init__(self, name, health = 10, power = 2):
#           self.name = name
#           self.health = health
#           self.power = power

#     # The first argument of every method is self.
#     def get_hit(self,power):
#         self.health = self.health - power
#         print(f"I, {self.name}, was hit for {power} points and now have:\n{self.health} health")

#     def attack(self, enemy):
#         enemy.get_hit(self.power)


# bad_guy = Mob("Evil_cat",10,3)
# hero = Mob("Sir Barky", 30,10)

# print(hero.health)
# bad_guy.attack(hero)
# hero.attack(bad_guy)
# hero.get_hit(6)


## Exercise 1

class Vehicle:
    def __init__(self,top_speed,acceleration,wheels = 4):  #originaklly had position and speed in this line but = 0
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.wheels = wheels
        self.position = 0                   #put speed and position here so there's no flexibilty in them, will always start at 0
        self.speed = 0

    def move(self):
        self.accelerate()
        self.position = self.position + self.speed

    def accelerate(self):
        self.speed = self.speed + self.acceleration  #can also be written as self.speed += self.acceleration  (this is a linear equation)
        if self.speed > self.top_speed:
            self.speed = self.top_speed
    
    def reset(self):            #not used in current setup
        self.position = 0
        self.speed = 0

all_cars = {                        #this is a dictionary b/c uses {}, a dictionary contains "keys"
    "camero":Vehicle(100,4),
    "volvo":Vehicle(80,6),
    "focus":Vehicle(25,10),
    "fiat":Vehicle(85,2)
}

for i in range(40):
    for car_name in all_cars:
        all_cars[car_name].move()

for car_name in all_cars:
    print(f"{car_name} - {all_cars[car_name].position}")

# truck = Vehicle("Truck",80,5)
# motorcycle = Vehicle("Motorcycle",100,7)
# minivan = Vehicle("Minivan",75,3)
# motorhome = Vehicle("Motorhome",65,2)
# semi = Vehicle("Semi Truck",100,2)

# print(truck.type,truck.top_speed)

