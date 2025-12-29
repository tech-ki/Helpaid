from time import sleep

import time
import sys

def slow_print(string, speed=0.07):
    """Prints a string character by character with a delay."""
    for char in string:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(speed)
    print() # Add a newline at the end

slow_print("💖 Welcome Home! Where to next? :")
area = ["Home", "Code", "Student","Art","Monies"]
i = 1
while i <  len(area):
 for x in area:
  print(i,"-",x)
  i += 1
# Select an Area
print("💖 Pick an area: ")
aarea = int(input())

# Select an Quest
match aarea:
  case 1:
    print("Home")
    level=[]
  case 2:
    print("Code")
    level=["Code Level Up in python","Continue ToDo with Django"]
  case 3:
    print("Student")
    level =[]
  case 4:
    print("💛 Art")
    level = ["Draw 1 page of circles", "Play C Minor on Piano", "Rotate cube on y Axis"]
   # x=0
    #i = 1
   # while i < len(level):
   #     for x in level:
   #         print(i,"-",x)
    #        i += 1
  case 5:
    print("💛 Monies")
    level = ["Apply for (1) Job", "Inspect 3 Jobs for requirements", "Reach out to 1 connection."]
  case _:
    print("Thanks for playing!")
x=0
i = 1
while i < len(level):
     for x in level:
         print(i,"-",x)
         i += 1
slow_print("🩵  Select your Quest: ")
aquest = int(input())
print("🩵 Quest",aquest,x)
# Select an Quest
match aquest:
  case 1:
    level=[]
  case 2:
    level=[]
# Select an Done?
slow_print("💛 Did you do it yet?")
print(" 1 Done or 2 Not Yet")
done = int(input())
match done:
  case 1:
    slow_print("💚 Done! You did it!")
    slow_print("💚 You gained experience. (+10)")
    level=[]
  case 2:
    slow_print("💛 Nice Try! Respawn Home?")
slow_print("💖 Go 1 Home or 2 Quit?")
ends = int(input())
match ends:
        case 1:
           slow_print("💖 You went Home 💖")
        case 2:
            slow_print("💖 Thanks for playing 💖")
# Dictionary Play
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
slow_print("💖 This prints a from (a,b)")
for x in thisdict: #a
  print(x)
  
slow_print("💖 This prints b from (a,b)")
for x in thisdict:
  print(thisdict[x]) #b
  
slow_print("💖 This prints a,b")
areas  =	{
  "Status": "Open",
  "Area": "Maple Island",
  "Quest": "Roger's Apple"
}
for x, y in areas.items():
  print(x,":", y)

#mylevels = {
#  "Status" : statuss,
#  "Area" : areas,
#  "Quest" : quests,
#  "Log" : logs
#}

# Nested items
child1 = {
  "name" : "Emil",
  "year" : 2004
}
child2 = {
    "status": "💖",
  "name" : "Roger's Apple",
  "desc" : {
      "note": ["Hey there! , I am Roger who teaches new Maplers lots of information."," Lets play!"],
      "steps" : "1 - Open inventory. 2 - Eat apple. 3 - Return to me " },
  
}
child3 = {
  "name" : "Linus",
  "year" : 2011
}

myquests = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3,
  "Area" : area
}

myquests = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3,
  "Area" : area
}
slow_print(myquests["child2"]["status"])
slow_print(myquests["child2"]["name"])
slow_print(myquests["child2"]["desc"]["note"])
slow_print(myquests["child2"]["desc"]["steps"])

for x, y in myquests.items():
  slow_print(x)
  #slow_print(y)