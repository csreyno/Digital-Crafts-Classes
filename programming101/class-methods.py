
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
    def __init__(self,type,top_speed,acceleration,position = 0,speed = 0):
        self.type = type
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.position = position
        self.speed = speed

    def move(self,speed):
        self.position = self.position + speed

    def accelerate(self,):
        

truck = Vehicle("Truck",80,5)
motorcycle = Vehicle("Motorcycle",100,7)
minivan = Vehicle("Minivan",75,3)
motorhome = Vehicle("Motorhome",65,2)
semi = Vehicle("Semi Truck",100,2)

print(truck.type, truck.top_speed)

