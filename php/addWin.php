<?php


// Vérifie si la requête provient de la page redirigeante
if(isset($_SERVER['HTTP_REFERER']) && $_SERVER['HTTP_REFERER'] == "http://www.genshinguess.com:8080/genshinguess.php?") {
    // Accès autorisé, affiche le contenu de la page
    echo "Bienvenue sur la page protégée!";



session_start();
if(isset($_SESSION['idCompte'])) {
    $idCompte = $_SESSION['idCompte'];
    $username = $_SESSION['username'] ;
    $id = $_SESSION['id'];
    $nbwin = $_SESSION['win'];
    /*echo "idCompte : ";
    echo $idCompte;
    echo "</br>";
    echo "username : ";
    echo $username;
    echo "</br>";
    echo "id ";
    echo $id;
    echo "</br>";
    echo "nbwin : ";
    echo $nbwin;*/
    // Now you can use $data to access the posted values

    $id = $_SESSION['id'];

    // SET UP BD 
    require __DIR__ . '/../vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
    $host = "82.64.32.75:3306"; //getenv('DB_HOST');
    $dbname = "MyDatabase"; //getenv('DB_NAME'); 
    $username = $_ENV['DB_USERNAME'];
    $password = $_ENV['DB_PASSWORD'];
    //se conneté a la base de donnée
    try{$dsn = "mysql:host=localhost;dbname=MyDatabase" ;//"mysql:host=$host;dbname=$dbname";
        $db = new PDO($dsn,$username,$password);
        echo "</br>the database is connected :) !</br>";}// si ça marche on echo ça marche
    catch(PDOException $e){
        $error_message = $e->getMessage();
        echo $error_message;
        echo " ERROR de Maxence \n" ;
        exit();}
    // FIN SET UP BD 


    $sql = 'UPDATE Users SET Win = Win + 1 WHERE user_id = "'.$id.'"';
    $request = $db->prepare($sql);
    $request->execute();
    echo "the database has a new value :) !</br>";
    $_SESSION['win'] = $_SESSION['win'] + 1;
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
    
    echo '<script>window.location.replace("http://www.genshinguess.com:8080/genshinguess.php");</script>';
   
    ?>
</html>
<?php 
} else {
    // Redirige vers une autre page en cas d'accès non autorisé
    header("Location: http://www.genshinguess.com:8080/php/STOPTRICH.php");

    exit();
}?>