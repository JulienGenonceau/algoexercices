console.log("Javascript !!!")

var a = 6;
console.log("Exercice 1: "+a);

var b = 5;
console.log("Exercice 2: "
+"\nAddition a + b: "+(a+b)
+"\nSoustraction a - b: "+(a+b)
+"\nMultiplication a * b: "+(a*b));

var c = "Bonsoiiiir"
console.log("Exercice 3: "+c);

var d = "Bonjour"
var e = "petite perruche"


console.log("Exercice 4: \n"+
d+" "+e);

var temp = e;
e = d;
d = temp;

console.log("Exercice 5: \n"+
d+" "+e);

if (a>b){
    console.log("Exercice 6: A est superieur à B")
}
if (b>a){
    console.log("Exercice 6: A est inferieur à B")
}
if (a==b){
    console.log("Exercice 6: A est égal à B")
}

function checkPlusGrand(x,y){
    string = "";
    if (x>y){
        string = "A est superieur à B"
    }
    if (x>y){
        string = "A est inferieur à B"
    }
    if (x==y){
        string = "A est égal à B"
    }
    return string;
}

console.log("Exercice 7: "+checkPlusGrand(a, b));

console.log("Exercice 8: "+(Math.floor(Math.random() * 6) + 1));

stringExo9 = "";
for (var i = 0; i < 10; i++) {
    stringExo9 += (Math.floor(Math.random() * 6) + 1)+"\n";
}
console.log("Exercice 9: "+stringExo9);

stringExo10 = "\n";
var f = 0;

while (f <= 90){
    f = Math.floor(Math.random() * 100) + 1
    stringExo10 += f+"\n";
}

console.log("Exercice 10: "+stringExo10);

     


/*

<?php

include "function.php";

echo ("====== EXO n°1 ======<br><br>");
echo ("Prendre une variables en php (la déclaration d'une variable se fait avec un $ en php), affecter une valeur à cette variable et l'afficher <br>");

$variable = 5;
echo $variable;

echo ("<br><br><br>====== EXO n°2 ======<br><br>");
echo ("Prendre deux variables en php, affecter une valeur à chaque variable, afficher le résultat de l'addition, de la soustraction, et de la multiplication de ces deux variables <br>");
$variable1 = 4;
$variable2 = 5;
// methode 1 => je garde en mémoire $resultat
$resultat = $variable1 + $variable2 ;
echo ($resultat) ;
echo ("<br>");
//methode 2
echo ( $variable1 + $variable2 );
echo ("<br>");
echo ( $variable1 - $variable2 );
echo ("<br>");
echo ( $variable1 / $variable2 );
echo ("<br>");
echo ( $variable1 * $variable2 );

echo ("<br><br><br>====== EXO n°3 ======<br><br>");
echo ("Prendre une variable en php et affecter une chaine de caracètere à cette variable et l'afficher <br>");
$chainecaract = "Coucou petite perruche,  !az!zaef az";
echo $chainecaract;

echo ("<br><br><br>====== EXO n°4 ======<br><br>");
echo ("Afficher à l'aide des deux variables déjà défini le texte contenu dans les variables à l'aide d'une concaténation (un espace est souhaitée entre les deux variables) <br>");
$a = "coucou";
$b = "petite perruche";

echo ($a." ".$b);

echo ("<br><br><br>====== EXO n°5 ======<br><br>");
echo ("Permutter le contenu de la variable a et de la variable b <br>");
$a = 20 ;
$b = 30 ;
echo ("La valeur de a est maintenat : $a, la valeur de b est maintenant : $b <br>");

$c = $a;
$a = $b;
$b = $c;

echo ("La valeur de a est maintenat : $a, la valeur de b est maintenant : $b");


echo ("<br><br><br>====== EXO n°6 ======<br><br>");
echo ("A partir d'un algorithme, définir dans tout les cas possibles quels chiffre est le plus grand (vous pouvez changer les valeurs des variables a et b pour tester toutes les possiblités) <br>");
$a = 20 ;
$b = 30 ;

if ($a > $b){
  echo " La variable $a est plus grand que $b";
} else if ($b > $a){
  echo " La variable $b est plus grand que $a";
} else {
  echo " La variables sont égaux : $a $b ";
}


echo ("<br><br><br>====== EXO n°7 ======<br><br>");
echo ("faire une fonction qui prend en parametres deux variables ( a et b par exemple ) et qui définis quel chiffre est le plus grand <br>");
$toto = 20 ;
$tata = 30 ;
/* Code à ajouter ci-dessous */
/*

$result = comparaison( $toto, $tata);
echo $result;


echo ("<br><br><br>====== EXO n°8 ======<br><br>");
echo ("afficher un nombre aléatoire à partir de la fonction rand() <br>");
$nombrealeatoire = rand(0,100);
echo $nombrealeatoire;

echo ("<br><br><br>====== EXO n°9 ======<br><br>");
echo ("afficher 10 nombre aléatoire à partir de la fonction rand() en utilisant une boucle <br>");
for( $i=0; $i<10; $i++){
  $nombrealeatoire = rand(0,100);
  echo $nombrealeatoire ;
  echo ("<br>");
}

echo ("<br><br><br>====== EXO n°10 ======<br><br>");
echo ("afficher des nombres aléatoires compris entre 1 et 100 et s'arreter quand le dernier chiffre est >90 <br>");
/* Code à ajouter ci-dessous */
/*

$nombrealeatoire1 = rand(0,100);
echo $nombrealeatoire1 ;
echo ("<br>");

while( $nombrealeatoire1 < 90){
  $nombrealeatoire1 = rand(0,100);
  echo $nombrealeatoire1 ;
  echo ("<br>");
}*/