<?php

/*Aplicación No 27 (Copiar archivos invirtiendo su contenido)
Modificar el ejercicio anterior para que el contenido del archivo se copie de manera invertida,
es decir, si el archivo origen posee ‘Hola mundo’ en el archivo destino quede ‘odnum aloH’.*/

$rutaIngresada="./misArchivos/". $_GET["info"];
$fecha= date("y_m_d_G_i_s");
$nuevaRuta="./misArchivos/".$fecha.".txt";

$ar= fopen($rutaIngresada,"r+");
    if($ar!=null){
        $contenido= fread($ar,filesize($rutaIngresada));
        
    }
    fclose($ar);

    if(strlen($contenido)>0){
        $invertido= strrev($contenido);
        $arCopia= fopen($nuevaRuta,"w");
        if(fwrite($arCopia,$invertido)>0){
          echo "Copiado con exito";
        }else{
            echo "Hubo un error";
        }
        fclose($arCopia);
    }
    
    
?>
