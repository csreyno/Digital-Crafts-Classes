

##   https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Programming-102/12-class-inheritance.md


class Mob:
    def __init__(self, name, health = 10, power = 2):
          self.name = name
          self.health = health
          self.power = power

    # The first argument of every method is self.
    def get_hit(self,power):
        self.health = self.health - power
        print(f"I, {self.name}, was hit for {power} points and now have:\n{self.health} health")

    def attack(self, enemy):
        enemy.get_hit(self.power)

class Hero(Mob):
    def yell(self):
        print("I %s, say to thou villian. Prepare to die!" % self.name)

    def __init__(self):
        # Calling super
        #self is not the first arg!
        super().__init__("Sir Galahand", 22, 3)
        #calls the init from the parent 
        self.defence = 1
    
    def get_hit(self, power):
        super.get_hit(power-self.defence)
        print("Ha Ha my defense is strong!")
    
hero = Hero("Clint")
print(hero.power)
bad_guy = Mob("Baddy")
hero.yell()
hero.attack(bad_guy)
print(bad_guy.health)