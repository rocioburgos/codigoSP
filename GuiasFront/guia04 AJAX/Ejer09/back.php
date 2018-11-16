<?php

$provincias = "";
$a = fopen("provincias.txt","r");
$count=0;
while(!feof($a)){
	$provincias= fgets($a);

	echo "<option value='".$count."'>".$provincias."</option>";
	$count++;
}
fclose($a);

echo $provincias;

?>