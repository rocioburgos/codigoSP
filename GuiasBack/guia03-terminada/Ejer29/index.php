<?php
/*Aplicación No 29 (Cambiar color de fondo II)
Realizar una página que posea sólo un control <select> (lista de opciones), con seis nombres
de colores como opciones (y su correspondiente código RGB como valor asociado), y un control
<input> (type=”button”) con la leyenda “Cambiar Color”.
La funcionalidad de la aplicación es sencilla, se selecciona un color del combo, se pulsa el botón
y el color de fondo de la página cambia a dicho color.*/



 $info= $_POST["colores"];
echo $info;
 ?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
</head>
<body style="background-color:<?php echo $info; ?>">
<form action="" method="POST">
        <select name="colores" id="colores">
            <option value="FFE633">Amarillo </option>
            <option value="FF7A33">Naranja</option>
            <option value="33FFA2">Verde</option>
            <option value="FF3352">Rojo</option>
            <option value="3C2DDB">Azul</option>
            <option value="F52F95">Rosa</option>
        </select>
        <input type="submit" value="Cambiar color">
    </form>
</body>
</html>

