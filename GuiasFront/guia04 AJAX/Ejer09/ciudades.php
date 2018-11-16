<?php
$provinciaId= $_POST["provincia"];// id de la provincia
$ciudades= "";
$a = fopen("ciudades.txt","r");
$count=0;
while(!feof($a)){

    $provincias=( fgets($a));
    $posicion= strstr($provincias,$provinciaId);
    
    if($posicion!== false){
            $datos= explode("-",$provincias);
            var_dump($datos);
            foreach ($datos as $ciudad) {
                $ciudades.="<option value=''>".$ciudad."</option>";
            }
            break;
    }

}
fclose($a);

echo $ciudades;

?>