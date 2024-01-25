<?php
session_start();
if(isset($_SESSION['idCompte'])) {
    $idCompte = $_SESSION['idCompte'];
    $usernamecompte = $_SESSION['username'] ;
    $id = $_SESSION['id'];
    $nbwin = $_SESSION['win'];
}
// SET UP BD 

require __DIR__ . '/vendor/autoload.php';
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
    //echo "the database is connected :) !</br>";
}
// si ça marche on echo ça marche
catch(PDOException $e){
    $error_message = $e->getMessage();
    echo $error_message;
    echo " ERROR de Maxence \n" ;
    exit();
}
// FIN SET UP BD 

$req = $db->prepare('SELECT username FROM `Users` WHERE Win > 0 ORDER BY Win DESC LIMIT 3;');
$req ->execute();
$best3player = $req->fetchAll();

$player1 = $best3player[0]['username'];
$player2 = $best3player[1]['username'];
$player3 = $best3player[2]['username'];

$req2 = $db->prepare('SELECT Win FROM `Users` WHERE Win > 0 ORDER BY Win DESC LIMIT 3;');
$req2 ->execute();
$best3playernbWin = $req2->fetchAll();

$player1Win = $best3playernbWin[0]['Win'];
$player2Win = $best3playernbWin[1]['Win'];
$player3Win = $best3playernbWin[2]['Win'];

?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>GENSHIN DLE</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/genshinguess.css">
        <link rel="shortcut icon" href="img/logo.png">
        <script type="text/javascript" src="javascript/genshinguess.js"></script>
    </head>

    <body onload="choixPerso()">
    <div class="navbar">
            <a href="signup.html"><input class="buttonguess" type="submit" value="Sign Up" /></a>
            <a href="login.html"><input class="buttonguess" type="submit" value="Login" /></a>
            <?php
                if(isset($_SESSION['idCompte'])) {
                    echo '<a href="#profil" id="profil">Logged in: '.$usernamecompte.'</a>';
                }else{
                    echo '<a href="#profil" id="profil">You are not sign in</a>';
                }
                
            ?>
        </div>

        <div class ="accueil">
            <h1>
                Genshin Guess
            </h1>
            <p>
                Guess Genshin Impact character !
            </p>
            <?php
                if(isset($_SESSION['idCompte'])) {
                    echo  "<h2>You have ".$nbwin." Win in Total </h2>";
                }           
            ?>
        </div>


        <div class ="leaderboard">
            <div class ="leaderboardvisible">
                <button class="" id="plus" onclick="getTheAnimation()">
                    <img src="img/plus.png"/><!--image : Flaticon.com Pixel perfect-->
                </button >
                <div class ="leaderboardtext">
                    <a>leaderboard</a>
                </div>
            </div>
            <div class="slide-in-start" id="slide-in-left">
                <div class ="mec1">
                    <img src="img/1er-prix.png"/><p><?php echo $player1." : ".$player1Win;?></p><!--image : Flaticon.com Md Tanvirul Haque-->
                </div>
                <div class ="mec2">
                    <img src="img/2eme-place.png"/><p><?php echo $player2." : ".$player2Win;?></p><!--image : Flaticon.com Md Tanvirul Haque-->
                </div>
                <div class ="mec3">
                    <img src="img/3eme-place.png"/><p><?php echo $player3." : ".$player3Win; ?></p><!--image : Flaticon.com Md Tanvirul Haque-->
                </div>
            </div>
        </div>



        <div class="rep"><!--le Form -->
            <div class="autocomplete">
                <input id="form" placeholder="Type character name ..." type="search" name="nom" onkeypress="verifInput(this.id, 'ok');"/><!--le textBox -->
                <script>autocomplete(document.getElementById("form"), listNomCharacter);</script><!--lance le script autocomplete -->
            </div>
            <input type="submit" value="OK" onclick="createLine()" id="ok" name="btnSub" /><!--le OK -->
        </div>
        
        <div class="button">
            <form action="index.php"><input class="return" type="submit" value="Return to Menu"></form>  <!--pour return au menu-->
            <input class="resetclear" type="submit" value="Reset & Clear" onclick="ResetClearButton()"></input><!--le bouton reset pour reset les guess -->
            <input class="buttonGiveUp" type="submit" value="GiveUp" onclick="GiveUp()"></input><!--pour afficher le nom à trouver -->
        </div>

        <div id="GiveUpid" class="GiveUp"></div>

        <div id="jeu" class="jeu"><!--la partie ou le jeu se passe -->
            <div class ="categorie"><!--la partie qui affiche les différentes catégorie  -->
                    <div>
                        <h3>
                            Image
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Name
                        </h3>
                    </div>
                    <div>
                            <h3>
                                Gender
                            </h3>
                    </div>
                    <div>
                            <h3>
                                Region
                            </h3>
                    </div>
                    <div>
                            <h3>
                                Elemental Power
                            </h3>
                    </div>
                    <div>
                            <h3>
                                Weapon Type
                            </h3>
                    </div>
                    <div>
                            <h3>
                                Team Placement
                            </h3>
                    </div>
                    <div>
                        <h3>
                            Release Patch
                        </h3>
                    </div>
            </div>
            
            <div id="ListeGuess" class="ListeGuess"><!--sert de repere pour la géneration des casses -->
                <div id="Guess" class="Guess"></div><!--sert de first child-->
            </div>  
        </div>
    </body>
</html>