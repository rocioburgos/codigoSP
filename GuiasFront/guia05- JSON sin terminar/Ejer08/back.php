<?php
    //leo, encodeo y envio , NO SE ENCODEA  xq el archivo ya es un array de JSON.
    $a = fopen("./autos.json","r");
        $linea = '';     
        while(!feof($a))
        { 
            $linea .= fgets($a);
        }   
    fclose($a);

  /*  if(count($linea)>0){
        $auto=$linea;
    }else{
        $auto="{}";
    }*/
    $auto=$linea;
    echo $auto;
?>

