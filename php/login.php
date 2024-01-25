<?php
session_destroy();
// SET UP BD 
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
// FIN SET UP BD 

$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST["email"];
$idCompte;
$nbWin;
$isusername;
$ispassword;
$isemail;
$isgoodandneedtogo;

$req = $db->prepare('SELECT * FROM `Users` WHERE username = "'.$username.'"');
$req ->execute();
$user_data = $req->fetchAll();


if ($user_data) {
    echo 'The account exists </br>';
    foreach ($user_data as $user_data) {
        $nbWin = $user_data['Win'];
        $idCompte = $user_data['user_id'];
        $isusername = $user_data['username'];
        $ispassword = $user_data['password'];
        $isemail = $user_data['email'];
    }

    if ($username == $isusername && $password == $ispassword && $email == $isemail){
        echo 'The mdp ans email are good </br>';
        session_start();
        $randomID = bin2hex(random_bytes(16));
        $_SESSION['idCompte'] = $randomID;
        echo $randomID;
        $_SESSION['username'] = $username;
        $_SESSION['id'] = $idCompte;
        $_SESSION['win'] = $nbWin;
        $isgoodandneedtogo = true;
    }else{
        echo 'The mdp and email are not good </br>';
        $isgoodandneedtogo = false;
    }
} else {
    echo 'The account does not exist';
}
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
    <?php 
    if($isgoodandneedtogo) {
        echo '<script>alert("you are now connected");window.location.replace("http://www.genshinguess.com:8080");</script>';
    }else{
        echo '<script>alert("you need to retry");window.location.replace("http://www.genshinguess.com:8080/login.html");</script>';
    }
    ?>
</html>