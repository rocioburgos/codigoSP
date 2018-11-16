<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Galeria de imagenes</title>
</head>
<body>  
    <table border='1'>
    <?php
    
            $directory="./img";
            $dirint = dir($directory);
            while (($archivo = $dirint->read()) !== false)
            {
                if(preg_match("/jpg/",$archivo)===1 || preg_match("/png/",$archivo)===1 ){

                
                   echo" <td><a  class='thickbox' href='mostrar.php?mostrar=img/{$archivo}'><img src='img/{$archivo}' width='100px'  height='100px'></a></td>";
                    
                }
            }
            $dirint->close();
    ?>
    </table>
        

    <form action="mostrar.php" method="POST" enctype="multipart/form-data" >
        <label for="">Foto</label> <input type="file"  id="archivo" name="archivo[]" multiple>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>

<?php

/* Aplicación Nº 40 (Generar Tabla de Imágnes)
Generar una tabla que posea fotos en un tamaño de 100x100 píxeles y que al pulsar se muestre la 
foto en su tamaño original en una página distinta (agregarle un link para poder volver a la página de inicio).*/
/* Aplicación Nº 41 (Galería de Imágenes)
Amplíe el ejercicio de la galería de fotos realizada anteriormente y permita al 
usuario añadir nuevas fotos. Para ello hay que poner el atributo enctype=”multipart/form-data” 
en el FORM y usar la variable $_FILES['foto'].*/

/*Aplicación Nº 42 (Galería de Imágenes II)
Amplíe el ejercicio anterior y permita al usuario añadir múltiples fotos en una misma subida. 
Para ello agregar el atributo ‘multiple’ en el input (type=”file”).
Del lado del servidor, verificar que cada archivo subido posea la extensión .jpg o .jpeg y que su tamaño 
máximo no supere los 900 kb.
Si alguno de los archivos subidos no cumple con los requisitos expuestos anteriormente, informarlo, 
caso contrario, agregarlo a la galería de imágenes.





echo "<table border='1'>

    <td><a  class='thickbox' href='mostrar.php?mostrar=img/conjuntoCebra.jpg'><img src='img/conjuntoCebra.jpg' width='100px'  height='100px'></a></td>
    <td><a  class='thickbox' href='mostrar.php?mostrar=img/conjuntoRosa.jpg'><img src='img/conjuntoRosa.jpg' width='100px' height='100px'></a></td>
    <td><img src='img/conjuntoSandia.jpg' width='100px' height='100px'></td>
    <td><a  class='thickbox' href='mostrar.php?mostrar=img/conjuntoVerde.jpg'><img src='img/conjuntoVerde.jpg' width='100px' height='100px'></a></td>
</table>";

*/
?>