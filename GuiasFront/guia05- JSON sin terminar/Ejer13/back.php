<?php

    $archivo= fopen("paises.json","r");
        $json="";
    while(!feof($archivo)){
        $json.= (fgets($archivo));
   
    }
 
    fclose($archivo);

    echo $json;

?>