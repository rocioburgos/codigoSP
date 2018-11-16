<?php

/* Aplicación No 25 (Contar letras)
Se quiere realizar una aplicación que lea un archivo (../misArchivos/palabras.txt) y ofrezca
estadísticas sobre cuantas palabras de 1, 2, 3, 4 y más de 4 letras hay en el texto. No tener en
cuenta los espacios en blanco ni saltos de líneas como palabras.
Los resultados mostrarlos en una tabla.*/

$ar= fopen("./misArchivos/palabras.txt","r");
$unaLetra=0;$dosLetras=0;$tresLetras=0;$cuatroLetras=0;$masCuatro=0;
if($ar!=null){
    while(!feof($ar)){
        $palabras= trim(fgets($ar));
        $cantidadLetras= strlen($palabras);
     //   echo $cantidadLetras ."<br>";

        if($cantidadLetras>0)
        {
            switch ($cantidadLetras) {
            case 1:
                $unaLetra++;
                break;
            case 2:
                $dosLetras++;
            break;
            case 3:
                $tresLetras++;
                break;
            case 4:
                $cuatroLetras++;

            default:
                $masCuatro++;
                break;
            }
        }

    }
}

fclose($ar);
?>


<table style="width:30%" border="1">
  <tr>
    <th>Uno</th>
    <th>Dos</th> 
    <th>Tres</th>
    <th>Cuatro</th>
    <th>Mas de cuatro</th>
  </tr>
  <tr >
    <td> <?php echo $unaLetra ?>  </td>
    <td> <?php echo $dosLetras ?></td> 
    <td> <?php echo $tresLetras ?></td>
    <td> <?php echo $cuatroLetras ?></td>
    <td>  <?php echo $masCuatro ?> </td>
    
  </tr>

</table>
