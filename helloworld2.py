# while True:
#     percentage = float(input("Give the percentage of Student"))
#     if 90<= percentage <=100:
#         print("Grade A")
#     elif 80<= percentage <=90:
#         print("Grade B")
#     elif 70<= percentage <=80:
#         print("Grad C")
#     elif 40<= percentage or 100> percentage:
#         print("Wrong inpur")
#         break
# ________________________________________________________________________
# while True:
#     amount = int(input("Please input the Total Amount: \n"))
#     if amount >=10000:
#         discount = amount*0.2
#         print(f"Discount on 10,000 is {discount}")
#     break

# for rot_count in range(1,11):
#     print(f"2 * {rot_count} = {rot_count*2 }")

# ______________________________
    
# number = int(input("Chai Plao"))
# while number >5:
#     print(f"Chai {number}")
#     number-=1

# chai_dalo = 5
# while chai_dalo<6:
#     print("chai Level ",chai_dalo)
#     chai_dalo -=1
#     if chai_dalo ==0:
#         print("Blast OFF!")
#         break
for plate in range(1,5):
    print(f"plate {plate} ready")
    for layer in range (1,4):
        layer1 = "Rice"
        layer2 = "Fried Rice"
        print(f"layer {layer} add to the Plate")
    print("plates are ready\n")

over =1
while over <=20:
    print(f"Over{over} Start!")
    ball = 1
    while ball<=6:
        print(f"Ball {ball}")
        ball+=1
    over +=1

for plate in range(1, 5):  # Outer loop → runs 4 times (plates)
    print(f"Plate {plate} ready")

    for layer in range(1, 4):  # Inner loop → runs 3 times (layers)
        if layer == 1:
            print("Layer Rice added to Plate ")
        elif layer == 2:
            print("Layer Fried Rice added to Plate")
        else:
            print("Layer Curry added to Plate")

    print("Plate is ready!\n")
