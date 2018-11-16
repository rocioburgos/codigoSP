<?php
$noticia = "";
$a = fopen("noticias.txt","r");

while(!feof($a)){
	$noticia .= fgets($a); 	
}
fclose($a);

echo $noticia;


?>  