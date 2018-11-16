<?php
    //leo,envio , no se hace un encode porque en el archivo ya tiene formato JSON.
    $a = fopen("./auto.json","r");
        $linea = '';
        
           $linea .= fgets($a);
        
    fclose($a);

    //$obj = new stdClass();
    $obj= ($linea);
    echo $obj;
?>