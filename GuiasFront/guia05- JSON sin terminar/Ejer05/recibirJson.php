<?php
    $obj = new stdClass();
    $obj->codigoBarra= 1234;
    $obj->nombre="harina";
    $obj->precio= 12;

    echo json_encode($obj);
?>