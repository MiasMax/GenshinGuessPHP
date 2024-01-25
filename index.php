<?php
session_start();
if(isset($_SESSION['idCompte'])) {
    $idCompte = $_SESSION['idCompte'];
    $username = $_SESSION['username'] ;
    $id = $_SESSION['id'];
    $nbwin = $_SESSION['win'];
}
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>GENSHIN DLE</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/index.css">
        <link rel="icon" type="img/png" sizes="16x16" href="img/logo.png">
        <script type="text/javascript" src="javascript/index.js"></script>

        <meta name="description" content="Play game on the theme of genshin and have fun :]">
        <meta name="author" content="MiasMaxence">
        <meta name="keyword" content="genshin impact,genshin,genshinguess,genshinchess,genshingames">

        <meta property="og:title" content="Genshin Guess">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://www.genshinguess.com">
        <meta property="og:site_name" content="Genshin Games">
        <meta property="og:description" content="Play game on the theme of genshin and have fun :]">
        <meta property="og:image" content="https://www.genshinguess.com/img/logo.png">
    </head>

    <body onload="onload()">
        
        <div class="navbar">
            <a href="signup.html"><input class="buttonguess" type="submit" value="Sign Up" /></a>
            <a href="login.html"><input class="buttonguess" type="submit" value="Login" /></a>
            <?php
                if(isset($_SESSION['idCompte'])) {
                    echo '<a href="#profil" id="profil">Logged in: '.$username.'</a>';
                }else{
                    echo '<a href="#profil" id="profil">You are not sign in</a>';
                }
                
            ?>
        </div>

        <div class ="accueil" id="accueil">
            <h1>
                Chose your genshin game 
            </h1>

            <h2>
                Genshin Guess
            </h2>
            <div class="guess" id="guessID" >
                <form action="genshinguess.php">
                    <input class="buttonguess" id="buttonguessID" type="submit" value="Go to GenshinGuess" />
                </form>
            </div>

            <h2 class="chess">
                Genshin Chess
            </h2>
            <div class="chess" id="chessID" >
                <form action="genshinchess.html">
                    <input type="submit" class="buttonchess" id="buttonchessID"  value="Go to GenshinChess" />
                </form>
            </div>
        </div>
    </body>
</html>