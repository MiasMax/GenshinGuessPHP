<?php
session_destroy();
require __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = "82.64.32.75:3306"; //getenv('DB_HOST');
$dbname = "MyDatabase"; //getenv('DB_NAME'); 
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];

//se conneté a la base de donnée
try{
    $dsn = "mysql:host=localhost;dbname=MyDatabase" ;//"mysql:host=$host;dbname=$dbname";
    $db = new PDO($dsn,$username,$password);
    echo "the database is connected :) !</br>";
}

// si ça marche on echo ça marche
catch(PDOException $e){
    $error_message = $e->getMessage();
    echo $error_message;
    echo " ERROR de Maxence \n" ;
    exit();
}

// Poste les data 
$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST["email"];

$sql = "INSERT INTO Users (username, password, email, Win) 
        VALUES (?, ?, ?, ?)";

$request = $db->prepare($sql);
$request->execute([$username, $password, $email, 0]);
echo "the database has a new member :) !</br>";

?>

<!DOCTYPE html>
<html lang="fr">
    <head>
    <style>
        body{
	background-image: url('../img/fond4.png');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
}
        </style>
        <script type="text/javascript" src="javascript/login.js"></script>
    </head>
    <body>   
    </body>
    <?php echo '<script>window.location.replace("http://www.genshinguess.com:8080/login.html");</script>';?>
</html>
