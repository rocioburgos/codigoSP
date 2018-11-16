<?php

    $productos[] = array("codigoBarra"=>123, "nombre"=>"fideo", "precio"=>12);
    $productos[] = array("codigoBarra"=>124, "nombre"=>"harina", "precio"=>12);
    $productos[] = array("codigoBarra"=>125, "nombre"=>"arroz", "precio"=>13);

    echo json_encode($productos);

    //Array de objetos indexado.
    $array= array();
    $objUno = new stdClass();
    $objDos = new stdClass();
    $objTres = new stdClass();

    $objUno->codigoBarra= 1234;
    $objUno->nombre="harina";
    $objUno->precio= 12;
    array_push($array,$objUno);


    $objDos->codigoBarra= 1235;
    $objDos->nombre="fideo";
    $objDos->precio= 12;
    array_push($array,$objDos);

    $objTres->codigoBarra= 1236;
    $objTres->nombre="arrox";
    $objTres->precio= 12;
    array_push($array,$objTres);


    $obj= $array;
  //  echo json_encode($array);


  //Por array Asociativo (podria decirse bidimensional tambien).
    $arrayDos= array(0=>["codigoBarra"=> 12 , "nombre"=>"harina" , "precio"=> 12], 1=>["codigoBarra"=> 13 , "nombre"=>"arroz" , "precio"=> 13],2=>["codigoBarra"=> 14 , "nombre"=>"fideo" , "precio"=> 14]);
  //  echo json_encode( $arrayDos);
  
?>