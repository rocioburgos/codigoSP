<?php

/* Aplicación Nº 5 (Obtener el valor del medio)
Dadas tres variables numéricas de tipo entero $a, $b y $c, realizar una aplicación que muestre
el contenido de aquella variable que contenga el valor que se encuentre en el medio de las tres
variables. De no existir dicho valor, mostrar un mensaje que indique lo sucedido.
Ejemplo 1:  => se muestra 8.
Ejemplo 2: $a = 5; $b = 1; $c = 5; => se muestra un mensaje “No hay valor del medio”*/
$a = 4; $b = 2; $c = 3;
$msjOK="El numero medio es ";
$msjFail="No hay valor medio";
$msjFinal="";
if($a<$b && $a>$c || $a<$c && $a>$b){
    $msjOK.=$a; 
    $msjFinal=$msjOK;
}else if($b<$a && $b>$c || $b<$c && $b>$a){
    $msjOK.=$b;
    $msjFinal=$msjOK;
}else if($a==$b ||$a==$c || $b==$c){
    $msjFinal=$msjFail;
}else{
    $msjOK.=$c;
    $msjFinal=$msjOK;
}

echo $msjFinal;
?>