# import math


# print('Hello World')

# word = "python"

# for chart in word:
#     print(chart)

# fruits = ['apple','bannas','aalao']

# for fruits  in fruits:
#     print(fruits)

# stuent= {
#         id:523169,
#         name:"ahnaf",
#         age:16,
#         course : ["web & app" , "agentic Ai","Ai digital marketing","ai content creation","customer support"]
        
#     }

# student_data = {
#     "Ahnaf" #Id Card
    
# }
    
# x = 15
# y= 4

# print (x + y)
# print (x - y)
# print (x * y)
# print (x / y)
# print (x % y)
# print (x ** y)
# print (x // y)


# number_one = int(input("number one"))
# number_two =int((input("number two")))
# print(number_one-number_two)


# number_one = int(input("number one"))
# number_two =int((input("number two")))
# result = number_one * number_two
# print(result)

# number_one = int(input("number one"))
# number_two =int((input("number two")))
# result = number_one ** number_two
# print(result)

# number_one = int(input("number one"))
# number_two =int((input("number two")))
# number_three =int((input("number two")))


# result = (number_one + number_two +number_three)/3
# print(result)


# number_one = int(input("number one"))
# number_two =int((input("number two")))
# number_three =int((input("number two")))


# result = (number_one * number_two * number_three)/100
# print(result)


# number_one = int(input("number one"))
# number_two =int((input("number two")))
# number_three =int((input("number two")))


# result = (number_one * number_two * number_three)/100
# print(result)


# radious = float(input("entr the radious of the circle"))

# area= math.pi *(radious **2)
# circumference = 2* math.pi * radious
# print(f"areaea of circle:{area}")
# print(f"circumference of circle:{circumference}")

# # Swipe the vales without take new variable

# a = 2
# b = 3
# print(f"a = {a}, b= {b}")

# a = a^b
# b = b ^a
# a= a^b

# print(f" a = {a}, b = {b}")

# x= 15
# x &= 3
# print(not(x>3 and x <10))

# interpass = True
# fee = True
# if interpass :
#     print("Congratulation")
#     if fee:
#         print("")
#     else:
#         print("")
# else:
#     print("")


while True:

    number_one = int(input("Please inter the Temperature"))

    if number_one <0 :
        print("Freezing")
    elif number_one <20 :
        print("Collong")
    elif number_one <30:
        print("normal")
    choice = input ("due you want to continue").lower()
    if choice != "yes":
        print("exiting program")
        break