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
