<?php

    $archivo= fopen("autos.json","r");
    $datos="";
    while(!feof($archivo)){
        $datos.= fgets($archivo);
    }
    fclose($archivo);
    echo $datos;

?>