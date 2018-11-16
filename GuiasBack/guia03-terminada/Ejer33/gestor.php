<?php

/* Aplicación Nº 33 (Confirmar contraseña)
Solicitar el ingreso de una clave dos veces, es decir, disponer dos controles de tipo <input>
(type=”password”), luego en el servidor, verificar si las claves ingresadas son iguales o no,
mostrando un mensaje de bienvenida en la página welcome.php, si son iguales o redireccionar
hacia la página de inicio, en el caso de que sean distintos.*/

$clave= $_POST["txtClave"];
$confirm= $_POST["txtConfirm"];

if($clave==$confirm){
    $mensaje="Bienvenido as";
   
  }  
  include "index.html";
?>