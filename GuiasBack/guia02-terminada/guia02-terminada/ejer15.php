<?php

/*Aplicación No 15 (Potencias de números)
Mostrar por pantalla las primeras 4 potencias de los números del uno 1 al 4 (hacer una función
que las calcule invocando la función pow ). */


for($i=1;$i<=4;$i++){ //exponente
    for($b=1;$b<=4;$b++){ //base

        echo "base: ".$b ." Exponente: ".$i."  ";
        echo pow($b,$i)."<br>";
    }  
    echo "<br>";
}

?>