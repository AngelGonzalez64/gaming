<!DOCTYPE html>
<html lang="esp">

<?php
include '../config/conexion.php';
?>

<head>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="AngelGonzalez" />
        <title>Login</title>
        <link href="../Public/css/login.css" rel="stylesheet">
        <script  src="../public/js/jquery-3.1.1.min.js" ></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" ></script>
</head>
    
<body id="page-top">
    


<!-- The video -->
<video autoplay muted loop id="myVideo">
  <source src="../Public/img/Geometric.mp4" type="video/mp4">
</video>

<div class="login-box">
    <h2>Login</h2>
    <form method="post" id="frmAcceso">
      <div class="user-box">
        <input type="text" name="logina" id="logina">
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="clavea" id="clavea">
        <label>Password</label>
      </div>
      
      <!--Button login-->
      <button type="submit" id="submit">
        <a>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        login
        </a>
      </button>
      
    </form>  

 



<script src="../public/js/login.js"></script>   
<script src="../public/js/bootbox.min.js"></script>
<script type="text/javascript" src="scripts/login.js"></script> 

<?php  
 include 'footer.php';
 ?>

</body>
</html>
