<?php
    $numero= $_GET["numero"];
    $count=0;
    for($i=$numero;$i>0;$i--){
        if($i % 2!=0){
            $count++;
        }
    }
    echo $count;

?>