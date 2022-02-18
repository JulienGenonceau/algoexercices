<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercices php</title>
</head>
<body>
    <?php 
    include "index2.php";
    ?>


<form action="resultexo11.php" method="post">
    <h2>Exercice 11</h2>
 <p>Votre nom : <input type="text" name="nom" /></p>
 <p>Votre âge : <input type="text" name="age" /></p>
 <p><input type="submit" value="OK"></p>
</form>

<form action="resultexo12.php" method="post">
    <h2>Exercice 12</h2>
 <p>Dis un nombre : <input type="text" name="nombrepairouimpair" /></p>
 <p><input type="submit" value="OK"></p>
</form>

<form action="resultexo13.php" method="post">
    <h2>Exercice 13</h2>
 <p>Dis un nombre : <input type="text" name="nombrepairouimpair" /></p>
 <p><input type="submit" value="OK"></p>
</form>

<form action="resultexo14.php" method="post">
    <h2>Exercice 14</h2>
 <p>Entrez une année pour savoir si elle est bissextile ou sextile : <input type="text" name="nombrepairouimpair" /></p>
 <p><input type="submit" value="OK"></p>
</form>

<form action="resultexo15.php" method="post">
    <h2>Exercice 15</h2>
 <p>Entrez une date sous la forme jj/mm/aaaa afin de verifier si elle est valide : <input type="text" name="nombrepairouimpair" /></p>
 <p><input type="submit" value="OK"></p>
</form>


<form action="resultexo16.php" method="post">
    <h2>Exercice 16</h2>
 <p>Entrez votre âge afin d'être redirigé vers un site qui vous correspond : <input type="text" name="age" /></p>
 <p><input type="submit" value="OK"></p>
</form>

</body>
</html>