
<?php 
/* Aplicación Nº 31 (Superficie del rectángulo)
Confeccionar un formulario que solicite la medida de los lados de un rectángulo. 
Luego de pulsar un botón se mostrará la superficie del mismo:
a- en la misma página.
b- en otra página (con un link para poder volver).


Aplicación Nº 32 (Superficie / Perímetro del rectángulo)
Modificar el formulario del ejercicio anterior para disponer de dos controles de tipo <input> 
(type=”radio”) que permita seleccionar entre calcular la superficie y el perímetro del rectángulo.
El resultado se mostrará:
a- en la misma página.
b- en otra página (con un link para poder volver).*/
$ladoUno= $_POST["ladoUno"];
$ladoDos= $_POST["ladoDos"];
$opcion= $_POST["radio"];

$superficie= $ladoDos*$ladoUno;
$perimetro= 2*($ladoDos+$ladoUno);
$rectangulo = "";
        for($i = 0; $i<$ladoDos; $i++){
            for($j = 0; $j<$ladoUno; $j++){
                $rectangulo = $rectangulo."* ";
            }
            $rectangulo = $rectangulo."<br/>";
        }
        if($opcion=="superficie"){
            echo "Superficie: ".$superficie;
        }else{
            echo "Perimetro: ".$perimetro;
        }
        
        echo "<br>".$rectangulo;
        echo "<a href='index.html'>Volver</a>";
?>