<?php
$nombre= $_POST["txtNombre"];
$apellido= $_POST["txtApellido"];
$dni= $_POST["dni"];
$sexo= $_POST["sexo"];

if(isset($nombre)&& isset($apellido)&& isset($dni)&& isset($sexo)){
    echo $nombre." ".$apellido." ".$dni." ".$sexo; 
}else{
   echo "<a href='index.html'>Inicio</a>";
}
