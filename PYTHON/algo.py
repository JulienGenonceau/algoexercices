import random

print("Exercice 1")
a=7;
print(a)

print("\nExercice 2")
b=5;
print(a+b)
print(a-b)
print(a*b)

print("\nExercice 3")
c="Bonsoiiiir";
print(c)

print("\nExercice 4")
d="coucou"
e="petite percuhe"
print(d,e)

print("\nExercice 5")
f = e
e = d
d = f
print(d,e)


print("\nExercice 6")
g = 7
h = 20
stringExo6 = ""
if g > h :
        stringExo6 = "G est plus grand que H"
elif h > g :
        stringExo6 = "H est plus grand que G"
else :
        stringExo6 = "G et H sont égaux"
        
print(stringExo6)

print("\nExercice 7")

def comparaison(a,b):
    stringreturn = ""
    if g > h :
        stringreturn = "G est plus grand que H"
    elif h > g :
        stringreturn =  "H est plus grand que G"
    else :
        stringreturn =  "G et H sont égaux"
    return stringreturn

    
print(comparaison(g, h))


print("\nExercice 8")
print(random.randint(1,6789))


print("\nExercice 9")

for i in range(0,10):
    print(random.randint(1,100))

    
print("\nExercice 10")

v=0
while v <= 90:
    v=random.randint(1,100)
    print(v)