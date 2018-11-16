<?php

/*Aplicación Nº 37 (Solicitud de empleo)
Confeccionar un formulario que permita ingresar en una serie de controles de tipo <input>
(type=”text”) el nombre y apellido de una persona, su edad, su dirección, su mail y en un 
control de tipo <textarea> su currículum. Mostrar los datos cargados en una nueva página
PHP. */

$nombre= $_POST["nombre"];
$apellido= $_POST["apellido"];
$email= $_POST["email"];
$dni= $_POST["dni"];
$direccion= $_POST["direccion"];
$edad=$_POST["edad"];
$cv=$_POST["cv"];

echo "Nombre: ".$nombre."<br>Apellido: ".$apellido."<br>Email: ".$email."<br>DNI: ".$dni."<br>Direccion: ".$direccion."<br>Edad:".$edad."<br>CV: ".$cv;
