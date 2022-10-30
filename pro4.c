import random

def pwd_generator():
    pwd = ''
    leng = random.randint(7,10)
    for x in range(leng):
        pwd += chr(random.randint(33,126))
    return pwd

def pwd_checker(password):
    lenb = upp = low = no = False
    if len(password) > 7:
        lenb = True
    for x in password:
        if x.isupper():
            upp = True
        if x.islower():
            low = True
        if x.isnumeric():
            no = True
    if lenb and upp and low and no:
        return True
    else:
        return False

pwd = pwd_generator()
print(pwd)
if pwd_checker(pwd):
    print("That's a good password")
else:
    print("Weak password")

