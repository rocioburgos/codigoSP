<?php
/*Aplicación No 16 (Invertir palabra)
Realizar el desarrollo de una función que reciba un Array de caracteres y que invierta el orden
de las letras del Array.
Ejemplo: Se recibe la palabra “HOLA” y luego queda “ALOH”. */


function InvertirPalabra($palabra)
{
    $cantidadLetras= strlen($palabra);
  //  echo $cantidadLetras;
    $palabraFinal="";
    for($i= $cantidadLetras-1; $i>=0 ;$i--){
        
        $palabraFinal .=$palabra[$i];
    }

    echo $palabraFinal;
}
InvertirPalabra("TODOS");
?> 