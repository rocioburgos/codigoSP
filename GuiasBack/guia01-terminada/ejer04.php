<?php
/* Aplicación Nº 4 (Sumar números)
Confeccionar un programa que sume todos los números enteros desde 1 mientras la suma no
supere a 1000. Mostrar los números sumados y al finalizar el proceso indicar cuantos números
se sumaron. */

$suma=0;
$cantNum=0;

for($i=1;$suma+$i<=1000;$i++){
    $suma+=$i;
    $cantNum++;
    echo $i." suma va ".$suma."<br>";
}
echo "Se sumaron ".$cantNum." numeros";
?>