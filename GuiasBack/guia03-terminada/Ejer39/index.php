<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action=" <?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?> "method="post">
        <div>
            <input type="number" placehorder='Ingrese un numero' name='numero' id='numero'> 
        </div>
        <div>
            <input type="submit" name='submit' value='CALCULAR DATOS'>
        </div>
    </form>
</body>
</html>





<?php

/*Aplicación Nº 39 (Información del Número)
Construya una aplicación que permita el ingreso de un número entero y muestre en pantalla la siguiente información:
1) Cantidad de cifras que posee.
2) Suma de cifras impares del número.
3) Suma de cifras pares del número.
4) Suma total de todas las cifras del número.
5) Todos los divisores de dicho número.
Mostrar los anteriores datos en una tabla convenientemente diseñada. */
    if(isset($_POST['submit'])){
        $numero= $_POST['numero'];
        $digitos=strlen($numero);
        echo "1- El numero tiene {$digitos} digitos<br>";
        
        $impares=0;
        $pares=0;
        $todasCifra=0;
        for($i=$numero;$i>0;$i--){
            if($i%2==0){
                $pares+=$i;
            }else{
                 $impares+=$i;
            }

            $todasCifra+=$i;
        }

        echo "2- Suma de las cifras impares es: {$impares}<br>3-Suma de las cifras pares: {$pares}<br>";
        echo "5- Los divisores de {$numero} son: <br>";
        for($i = 1; $i <= $numero; $i ++) {
            if ($numero % $i == 0) {
                echo  $i."-";
            }
    }
    }

?>