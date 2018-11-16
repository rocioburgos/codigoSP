<?php
/*Aplicación Nº 7 (Mostrar fecha y estación)
Obtenga la fecha actual del servidor (función date) y luego imprímala dentro de la página con
distintos formatos (seleccione los formatos que más le guste). Además indicar que estación del
año es. Utilizar una estructura selectiva múltiple(switch).
 */

 //j	Día del mes sin ceros iniciales	1 a 31
 //n	Representación numérica de un mes, sin ceros iniciales	1 hasta 12
 //Y	Una representación numérica completa de un año, 4 dígitos	Ejemplos: 1999 o 2003
$dia= date("j");
$mes= date("n");
$anio= date("Y"); 
$estacion=""; 

    switch ($mes) {
        case '12':
            if($dia>="21")
            {
                $estacion="Verano";
            }else
            {
                $estacion="Primavera";
            }
        break;
        case "1":
        case "2":
            $estacion="Verano";
        break; 
        case "3":
        if($dia<="20")
        {
            $estacion="Verano";
        }else
        {
            $estacion="Otoño";
        }
        break;
        case "4":
        case "5":
            $estacion="Otoño";
        break;
        case "6":
        if($dia<="20"){
            $estacion="Otoño";
        }else{
            $estacion="Invierno";
        }
        break;
        case "7":
        case "8":
        $estacion="Invierno";
        break;
        case "9":
        if($dia<="20"){
            $estacion="Invierno";
        }else{
            $estacion="Primavera";
        }
        break;
        case "10":
        case "11":
        $estacion="Primavera";
        break;
    }
    echo $dia."/".$mes."/".$anio."<br>Estacion: ".$estacion;
?>