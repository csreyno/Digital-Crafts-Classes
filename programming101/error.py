
try:
    if 2 > "3"
        print("Never Prints")
except: #not best practice b/c it catches all errors
    print("No crashing")

try:
if 2 > "3"
    print("Never Prints")
except TypeError: #catches only TypeErrors (int combine w/ str)
    print("No crashing")

