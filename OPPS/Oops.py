class car:
    x="kyber"
    y = "supra mk5"
    z = "bmw m9"
car1=car()
print(car1.x)
print(car1.y)
print(car1.z)   

class mobile:
    a="iphone"
    b="samsung"
    c="oneplus" 
mobile1=mobile()
mobile2=mobile()
mobile3=mobile()  

class student:
    pass
student1=student()
student2=student()  
student3=student()
student1.name="ashfaq"
student1.age=36
student1.rollno=301
print(student1.name)
print(student1.age)
print(student1.rollno)


class mobile:
    def __init__(self,brand,price):
        self.brand = brand
        self.price = price
    def info(self):
        print(self.brand,self.price)

mobile1=mobile("iphone",70000)

mobile1.info()

class laptop:
    def __init__(self,name,ram,price):
        self.name=name
        self.ram=ram
        self.price=price
    def info(self):
        print(self.name,self.ram,self.price)
lenovo=laptop("lenovo",16,50000)
lenovo.info()

class Employee:
    def __init__(self,name):
        self.name=name
        self.__salary=0
    def set_salary(self,amount):
        if amount>0:
            self.__salary=amount
        else:
            print("Salary must be possitve")
    def get_salary(self):
        return self.__salary
e1=Employee("sadiq")
e1.set_salary(45000)
print(e1.get_salary())

# class Student:
#     def __init__(self,name):
#         self.name=name
#         self.__marks=0

# class person:
#     def __init__(self,name):
#         self.name
# class Student(person):
#     def __init__(self,name,rollno):
#         super().__init__(name)
#         self.name=name
#         self.rollno=rollno
# # p1=person("ashfaq")
# p2=student("sadiq",301)
# # print(p1.name)
# print(p2.name)

class Animal:
    def sound(self):
        print("same sound ")
class Dog(Animal):
    def sound(self):
        print("bark")
class Cat(Animal):
    def sound(self):
        print("meow") 
jermanshepherd=Dog()
jermanshepherd.sound()
persioan=Cat()
persioan.sound()

from abc import ABC,abstractmethod


class Shapes():
    @abstractmethod
    def area(self):
        pass
class Rectangle(Shapes):
    def __init__(self ,1, w):
        super().__init__()
        self.1=1
        self.w=w
    def area(self):
        return self.1*self.w

class Circle(Shapes):
    def __init__(self,r):
        self.r =r
    def area(self):
        return 3.14*self.r*self.r
    
r1 = Rectangle(10,5)
c1 = Circle(7)
print("Area of Rectangle:",r1.area())