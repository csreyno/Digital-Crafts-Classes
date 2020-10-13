name = "Chad"

message = "Hey World!"

combined = f"I want to say {message} to {name}." # f stands for 'f string' here. looks cleaner

print(combined)

name = "Chad Reynolds"
#interpolation syntax
print("Hello %s, it is nice to meet you." % (name))

first_name = "Clint"
last_name = "Fleetwood"

print('Hello %s %s, it is nice to meet you.' % (first_name,last_name))


#Execrcises
like_1 = "I like dogs "
like_2 = "and I like cats."
print(like_1 + like_2)

haiku = "Wind in trees \nWater in leaves \nDirt"
print(haiku)

person = "Chad"
today = "Tuesday"
emotion = "angsty"

print("Hello %s, \nI hope that your %s is going well.\nI'm personally really %s." % (person, today, emotion))
combined = f"Hello {person}, \nI hope that your {today} is going really well.\nI'm personally really {emotion}!"
print(combined)
print("Hello " + person + "," + 
'''I hope that your ''' + today)