<?php

$caso = isset($_POST["caso"]) ? $_POST["caso"] : null;

sleep(1);

switch ($caso) {

    case 'agregar':

        $cadenaJSON = isset($_POST['cadenaJson']) ? $_POST['cadenaJson'] : null;

        $ar = fopen("./ciudadanos.json", "a");
		
		$cant = fwrite($ar, $cadenaJSON . "\r\n");

        fclose($ar);

        $resultado["TodoOK"] = $cant > 0 ? true : false;

        echo json_encode($resultado);
    break;

    case 'mostrar':
    
        $a = fopen("./ciudadanos.json", "r");

        $string = "";

        while(!feof($a)){
        
            $linea = trim(fgets($a));
        
            if(strlen($linea) > 0)
                $string .=  $linea . ',';        
        }
        
        fclose($a);

        $string = substr($string, 0, strlen($string)-1);        
        
        echo ('['.$string.']');
        
    break;

    case 'eliminar':

        $cadenaJSON = isset($_POST['cadenaJson']) ? $_POST['cadenaJson'] : null;
        $obj = json_decode($cadenaJSON);

        $a = fopen("./ciudadanos.json","r");

        $string = '';

        while(!feof($a)){
            $linea = trim(fgets($a));
            
            if(strlen($linea) > 0){
                $vec = explode(":", $linea);
                $dni = $vec[5];
                
                if($dni == $obj->dni){
                    continue;
                }
                $string .= $linea . "\r\n";
            }         
        }

        fclose($a);

        $objRetorno = new stdClass();
        $objRetorno->TodoOK = TRUE;

        $a = fopen("./ciudadanos.json","w");
        
        $cant = fwrite($a, $string);

        fclose($a);

        if($cant < 1){
            $objRetorno->TodoOK = FALSE;
        }

        echo json_encode($objRetorno);        
        
    break;

    case 'modificar':

        $cadenaJSON = isset($_POST['cadenaJson']) ? $_POST['cadenaJson'] : null;
        $obj = json_decode($cadenaJSON);

        $a = fopen("./ciudadanos.json","r");

        $string = '';

        while(!feof($a)){
            $linea = trim(fgets($a));
            
            if(strlen($linea) > 0){
                $vec = explode(":", $linea);
                $dni = $vec[5];
                
                if($dni == $obj->dni){
                    continue;
                }
                $string .= $linea . "\r\n";
            }         
        }

        $string .=  $cadenaJSON . "\r\n";

        fclose($a);

        $objRetorno = new stdClass();
        $objRetorno->TodoOK = TRUE;

        $a = fopen("./ciudadanos.json","w");
        
        $cant = fwrite($a, $string);

        fclose($a);

        if($cant < 1){
            $objRetorno->TodoOK = FALSE;
        }

        echo json_encode($objRetorno);        

    break;

    case "paises":
    
        $a = fopen("./paises.json","r");
        $paises = fread($a, filesize("./paises.json"));
        fclose($a);

        echo ($paises);

    break;
    case "subirFoto":
    
        $objRetorno = new stdClass();
        $objRetorno->Ok = false;
        $uploadOk=false;
      
      $nombre= $_FILES["foto"]["name"];
        $destino = "./Fotos/" . $nombre;
        $tipoArchivo = pathinfo($destino, PATHINFO_EXTENSION);
    
         if($tipoArchivo != "jpg"  && $tipoArchivo != "png" ) {
            echo "Solo son permitidas imagenes con extension JPG, JPEG, BMP ,PNG o GIF.";
            $uploadOk = FALSE;
        }else{
           
            if(move_uploaded_file($_FILES["foto"]["tmp_name"], $destino) ){
                $objRetorno->Ok = true;
                $objRetorno->Path = $nombre;
            }
        }
        
        echo json_encode($objRetorno);

        break;

    break;

    default:
        echo ":(";
        break;
}


