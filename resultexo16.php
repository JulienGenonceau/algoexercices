<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
</head>
<body>
<?php 
//The number that we want to check
//is even or not.
$number = $_POST['age'];
if ($number>18){
    header('Location: https://www.amazon.fr/');
    exit();
}else{
    header('Location: https://www.jouezgratuitement.fr/Jeux-de-Teletubbies-gratuit');
    exit();
}

?>
</body>
</html>