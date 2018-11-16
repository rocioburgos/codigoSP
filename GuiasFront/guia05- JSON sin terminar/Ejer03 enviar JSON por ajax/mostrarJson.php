<?php

    //Muestro lo recibido por POST
    var_dump($_POST["json"]);

    //Convierto el string de JSON y lo muestro.
    $get= json_decode($_POST["json"]);
    var_dump($get);

    //Creo el objeto standar y le asigno el JSON decodeado.
    $objStd= new stdClass();
    $objStd= $get;

    //Ahora el JSON recibido es un objeto y lo accedo como tal.
    echo "Codigo " .$objStd->codigoBarra. " Nombre: ". $objStd->nombre. " Precio: ".$objStd->precio;

    
?>