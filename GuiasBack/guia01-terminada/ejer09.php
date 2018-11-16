<?php
/* Aplicación Nº 9 (Carga aleatoria)
Definir un Array de 5 elementos enteros y asignar a cada uno de ellos un número (utilizar la
función rand). Mediante una estructura condicional, determinar si el promedio de los números
son mayores, menores o iguales que 6. Mostrar un mensaje por pantalla informando el
resultado.*/
$vec= array();
$suma=0;
$promedio;
$msj="El promedio es ";
for($i=0;$i<5;$i++)
{
    $vec[$i]= rand(1,10);
    $suma+=$vec[$i];
}
var_dump($vec);
$promedio=$suma/5;

if($promedio>6){
    $msj.="mayor a seis ";
}else if($promedio<6){
    $msj.="menor a seis ";
}else{
    $msj.="igual a seis ";
}

echo $msj.$promedio;

?>