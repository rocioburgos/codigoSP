<?php
/* Aplicación Nº 43 (Files UpLoad)
Se necesita crear una página que le permita al usuario subir al servidor web cualquier tipo de archivo. 
Sólo se restringirá el tamaño de cada archivo según el tipo de extensión que posea.
Para archivos con extensión .doc o .docx el tamaño máximo será de 60 Kb.
Archivos con extensión .jpg, jpeg o gif el valor máximo será de 300 kb.
Para el resto de las extensiones el máximo permitido será de 500 kb.
Dichos archivos se almacenarán en una carpeta llamada ‘Uploads’ que se ubicará en el directorio raíz del servidor web.
Se deberá informar si se logró subir el archivo o no. Si se pudo, informar el nombre del archivo, 
su extensión y que tamaño posee.
Aplicación Nº 44 (Files UpLoad II)
A partir del ejercicio anterior, permitirle al usuario que pueda seleccionar varios archivos 
al mismo tiempo, manteniendo las mismas restricciones mencionadas anteriormente.*/
$uploadOk = TRUE;
    $nombres = $_FILES["archivo"]["name"];
    $tmpsNames =(array) $_FILES["archivo"]["tmp_name"];
    $sizes = $_FILES["archivo"]["size"];

    echo "tamaños: "; var_dump($sizes);
    
    $destinos = array();
    $tiposArchivo = array();

	//cargo los desstinos y las extensiones de los archivos.
    foreach((array)$nombres as $nombre){
        $destino = "uploads/" . $nombre;
        array_push($destinos, $destino);
        array_push($tiposArchivo, pathinfo($destino, PATHINFO_EXTENSION));
    }
echo "<br>destinos "; var_dump($destinos);
    
  
    $i=0;
    foreach((array)$tmpsNames as $tmpName){
		if($tiposArchivo[$i] == "doc" || $tiposArchivo[$i] == "docx"  ) {
           
            if ($sizes[$i] > 60000) {
                echo "Archivo demasiado grande. Verifique!!!";
                $uploadOk = FALSE;
                break;
            }
            
		}else if($tiposArchivo[$i] != "jpg" && $tiposArchivo[$i] != "jpeg" && $tiposArchivo[$i] != "gif" && $tiposArchivo[$i] != "png") 
        {
            if($sizes[$i] > 300000) {
                echo "Archivo demasiado grande. Verifique!!!";
                $uploadOk = FALSE;
                break;
            }
        }else{
                if($sizes[$i] > 500000) {
                    echo "Archivo demasiado grande. Verifique!!!";
                    $uploadOk = FALSE;
                    break;
                }
        }
            $i++;
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
     
?>