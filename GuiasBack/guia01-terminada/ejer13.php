<?php
/*Aplicación Nº 13 (Arrays asociativos II)
Cargar los tres arrays con los siguientes valores y luego ‘juntarlos’ en uno. Luego mostrarlo por
pantalla.

“1986”, “1996”, “2015”, “78”, “86”
“php”, “mysql”, “html5”, “typescript”, “ajax”
Para cargar los arrays utilizar la función array_push. Para juntarlos, utilizar la función
array_merge. */

$animales=array();
array_push($animales,"Perro","Gato","Ratón", "Araña", "Mosca");
$anio=array();
array_push($anio,1986,1996,2015,78,86);
$lenguaje=array();
array_push($lenguaje,"php","mysql","html5","typescript","ajax");
$juntos=array_merge($animales,$anio,$lenguaje);

var_dump($juntos);
?>