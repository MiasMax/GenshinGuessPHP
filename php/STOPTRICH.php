<?php
session_start();
$username = $_SESSION['username'] ;
?>
<!DOCTYPE html>
<html>
<head>
<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.big-red-text {
  font-size: 72px;
  color: red;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body>

<div class="center">
  <div class="big-red-text">you have been caught <?php echo $username;?></div>
  <img src="../img/catch.png" alt="Image description">
</div>

</body>
</html>