<!DOCTYPE html>
<!--Aplicación Nº 38 (Descuento por Compra)
Un restaurante ofrece un descuento del 10% para consumos entre $ 300 y $ 550 y 
un descuento del 20% para consumos mayores a $ 550. Para todos los demás casos no se aplica ningún tipo de descuento.
Elaborar una aplicación web que permita determinar el importe a pagar por el consumidor.-->
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
            <input type="number" placehorder='Ingrese el importe' name='importe' id='importe'> 
        </div>
        <div>
            <input type="submit" name='submit' value='CALCULAR DESCUENTO'>
        </div>
    </form>
</body>
</html>

<?php
    if(isset($_POST['submit'])){
        $importe= $_POST['importe'];
        $descuento=0;
        if($importe>300 && $importe<=550){
            $descuento=($importe*10)/100;
        }else if($importe>550){
            $descuento=($importe*20)/100;
        }

        echo "Debe pagar: ". ($importe-$descuento);
    }
?>