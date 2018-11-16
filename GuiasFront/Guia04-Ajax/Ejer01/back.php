<?php
$numero= $_GET["numero"];

$countPar=0;
for($i=$numero;$i>=1;$i--){
    if($i%2==0){
        $countPar++;
    }
}
    echo $countPar;
?>