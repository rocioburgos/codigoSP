<?php
    $opcion= $_GET["caso"];

    switch ($opcion) {
        case 'traerCiudades':
            $archivo= fopen("city.list.min.json","r");
            $datos="[";
            
            while(!feof($archivo)){
                $datos.= trim( fgets($archivo));
                $datos.=",";
            }
            fclose($archivo);
            $datos = substr ($datos, 0, strlen($datos) - 2);
            $datos.="]";
            echo  ($datos);
        break;
        case "agregarCiudad":
            $id=$_GET["id"]; 
            $name=$_GET["name"];
            $country=$_GET["country"]; 
            $lon=$_GET["lon"]; 
            $lat=$_GET["lat"];
        
            $json=('{"_id":'.$id.',"name":"'. $name.'","country":"'. $country.'","coord":{"lon":'.$lon.',"lat":'.$lat.'}}');

            $archivo= fopen("city.list.min.json","a");
            fwrite($archivo,$json."\r\n");
            fclose($archivo);

            break;
        case "quitarCiudad":
            $archivo= fopen("city.list.min.json","r");
            $datos="[";
            
            while(!feof($archivo)){
                $datos.= trim( fgets($archivo));
                $datos.=",";
            }
            fclose($archivo);

            $datos = substr ($datos, 0, strlen($datos) - 2);
            $datos.="]";
            $arrayJson= json_decode($datos);

            $buscar= $_GET["codigo"];
            $i=0;
            $archivo= fopen("city.list.min.json","w");
            foreach ($arrayJson as $city) {
                if($city->_id == $buscar){                  
                    unset($arrayJson[$i]);
                }

                if(isset($arrayJson[$i])){

                    fwrite($archivo , json_encode($arrayJson[$i])."\r\n");
                }   
            
                $i++;
            }

            fclose($archivo);
            header("Location: ./index.html");
          /*  $archivo= fopen("city.list.min.json","w");
            $escribir="";
            foreach($arrayJson as $city){
                $escribir.= json_decode($city);
            }
            fwrite($archivo,$escribir);
           
*/
            

//            var_dump($arrayJson);
        break;

        default:
         echo "no hay esa opcion";
            break;
    }

    
?>