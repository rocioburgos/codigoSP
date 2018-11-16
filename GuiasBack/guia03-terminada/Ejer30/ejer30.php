<?php

    for($i = 0; $i < $_POST['selectFila']; $i++)
    {
     
        for($k = 0; $k < $_POST['selectColum'] ; $k++)
        {
            echo "*";
        }
        echo "<br/>";
    }
   
?>


<?php
/*Aplicación No 30 (Generar Tabla III)
Utilizando tags de Html (<table>, <tr> y <td>) se pide generar en forma dinámica una tabla.
Dicha tabla se formará a partir de los valores de dos controles de tipo <select>. Cada uno de
estos controles contendrá valores desde el 1 hasta el 50.
Al pulsar el control <input> (type=”button”) con la leyenda “Generar Tabla”, se invocará a un
procedimiento que creará la tabla a partir de la cantidad seleccionada de filas y columnas. 

$columnas=$_POST["selectColum"];
$filas=$_POST["selectFila"];



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hola</title>
</head>
<body>
  <?php echo"<table id=`tabla`  border=`1`>";

            for($i=1;$i<=$filas;$i++){//fila
                echo `<tr>`;
                    for($j=1;$j<=$columnas;$j++){//columna
                        echo `<td>c</td>`;
                    }
                
               echo `<tr>`;
            }
           
       
    echo "</table>"  ?>
</body>
</html>*/