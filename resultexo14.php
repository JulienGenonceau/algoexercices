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
$number = $_POST['nombrepairouimpair'];


//If the remainder is 0, then it means
//that the number is even.

if (is_numeric($number)){
    
//Get the remainder of our number divided by 2.
$remainder = $number % 2;
if($remainder == 0){
    echo $number . ' est pair!';
}else{
    echo $number . ' est impair!';
}
}else{echo $number . " c' est pas un nombre";}

?>
</body>
</html>