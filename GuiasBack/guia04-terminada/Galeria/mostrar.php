<?php
/* Del lado del servidor, verificar que cada archivo subido posea la extensión .jpg o .jpeg y que su tamaño 
máximo no supere los 900 kb.
Si alguno de los archivos subidos no cumple con los requisitos expuestos anteriormente, informarlo, 
caso contrario, agregarlo a la galería de imágenes.*/

if(isset($_FILES["archivo"]))
{
   /* $nombreArchivo=$_FILES['archivo']['name'];
    $nombreTemporal=$_FILES['archivo']['tmp_name'];
    $ext= pathinfo($nombreArchivo, PATHINFO_EXTENSION);
    if($ext=="jpg" || $ext== "jpeg" )
    if(move_uploaded_file($nombreTemporal,"./img/".$nombreArchivo)){
        //echo "<td><a  class='thickbox' href='mostrar.php?mostrar=img/{$nombreArchivo}'><img src='img/{$nombreArchivo}' width='100px' height='100px'></a></td>";     
        echo "<a href='index.php'>Galeria</a>";
    }*/
  
    $uploadOk = TRUE;
    $nombres = $_FILES["archivo"]["name"];
    $tmpsNames =(array) $_FILES["archivo"]["tmp_name"];
    $sizes = $_FILES["archivo"]["name"];

    $destinos = array();
    $tiposArchivo = array();

    foreach((array)$nombres as $nombre){
        $destino = "img/" . $nombre;
        array_push($destinos, $destino);
        array_push($tiposArchivo, pathinfo($destino, PATHINFO_EXTENSION));
    }

    
    foreach((array)$sizes as $size){
        if ($size > 900000) {
            echo "Archivo demasiado grande. Verifique!!!";
            $uploadOk = FALSE;
            break;
        }
        $i=0;
        foreach((array)$tmpsNames as $tmpName){
        
            $esImagen = getimagesize($tmpName);
        
            if($esImagen !== FALSE) {//ES UNA IMAGEN

                //SOLO PERMITO CIERTAS EXTENSIONES
                if($tiposArchivo[$i] != "jpg" && $tiposArchivo[$i] != "jpeg") {
                    echo "Solo son permitidas imagenes con extension JPG, JPEG.";
                    $uploadOk = FALSE;
                    break;
                }
            }
            $i++;
        }
    }

        
        if ($uploadOk === FALSE) {

            echo "<br/>NO SE PUDIERON SUBIR LOS ARCHIVOS.";

        } else {
      
            for($i=0;$i<count($tmpsNames);$i++){
                if (move_uploaded_file($tmpsNames[$i], $destinos[$i])) {
                    echo "<br/>El archivo ". basename( $tmpsNames[$i]). " ha sido subido exitosamente.";
                } else {
                    echo "<br/>Lamentablemente ocurri&oacute; un error y no se pudo subir el archivo ". basename( $tmpsNames[$i]).".";
                }
            }
        }
        echo "<a href='index.php'>Galeria</a>";
}




if(isset($_GET['mostrar'])){
    $path= $_GET['mostrar'];
    echo "<img src='{$path}' ><br><a href='index.php'>Volver</a>";
}
?>