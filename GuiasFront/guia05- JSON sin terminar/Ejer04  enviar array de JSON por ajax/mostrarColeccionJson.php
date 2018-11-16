<?php
    $coleccion= json_decode($_POST["coleccion"]);
 //   var_dump($coleccion);

    $obj = new stdClass();
    $obj = $coleccion;

    var_dump( $obj[0]);

    echo "Por numero de indice<br>";
    echo $obj[0]->codigoBarra. " ". $obj[0]->nombre ." ".  $obj[0]->precio  ;

    echo "por foreach <br>";
    foreach ($obj as $producto) {
        echo $producto->codigoBarra. " ". $producto->nombre ." ".  $producto->precio  ;
    }
     
?>