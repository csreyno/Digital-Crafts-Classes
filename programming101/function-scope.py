

# Scope - the place in a program where a declared variable can be accessed


#Global Scope

x = 10  
  #x not declared inside a function. It's a globally scoped variable.
  def add_to_x(a):
      # can access x because it is a global variable 
      return x + a

  print(add_to_x(2)) #12


# Local Scope - variable is only accesible INSIDE the function - as shown below

def add_two_numbers(a,b):
      c = a+b
      print(c)
      return c
  
  result = add_two_numbers(2,4)
  print(result)

  print(c) # Error c is not in global scope!