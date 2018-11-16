<?php
/*Aplicación Nº 10 (Mostrar impares)
Generar una aplicación que permita cargar los primeros 10 números impares en un Array.
Luego imprimir (utilizando la estructura for) cada uno en una línea distinta (recordar que el
salto de línea en HTML es la etiqueta <br/>). Repetir la impresión de los números utilizando
las estructuras while y foreach */
$vec=array();
$num=1;
for($i=0;$i<10;$i++){
    $vec[$i]=$num;
    $num+=2;
}

echo "Mostrando con FOR.<br>";
for($i=0;$i<10;$i++){
    echo $vec[$i]."<br>";
}
echo "<br><br>Mostrando con WHILE.<br>";
$cant=0;
while($cant<10){
    echo $vec[$cant]."<br>";
    $cant++;
}

echo "<br><br>Mostrando con FOREACH.<br>";
foreach ($vec as $num) {
    echo $num."<br>";
}

?>