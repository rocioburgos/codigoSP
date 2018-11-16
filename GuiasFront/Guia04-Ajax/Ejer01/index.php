<!DOCTYPE html>
<!-- Aplicación Nº 1 (Mostrar números impares)
Confeccionar un programa que solicite el ingreso de un número positivo (validar) y que
muestre en un <input type=”text”> la cantidad de números impares que hay entre ese número
y el cero. Realizarlo utilizando el objeto XMLHttpRequest.-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
   <script src="function.js"></script>
</head>
<body>
    <form action="index.php" method="get">
        <input type="number" name="txtNumero" id="txtNumero" placeholder="Ingrese un numero positivo">
       
        <input type="button" id="btnEnviar" name="btnEnviar" value="Enviar" onclick="EnviarAjax()">
        <div id="countPar"></div>
    </form>
</body>
</html>

