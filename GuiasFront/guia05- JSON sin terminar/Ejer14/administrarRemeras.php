<?php

$caso= $_GET["caso"];

switch ($caso) {
    case 'Mostrar':
            $a = fopen("./remeras.json","r");
            $linea = '';     
            while(!feof($a))
            { 
                $linea .= fgets($a);
            }   
            fclose($a);

            $remeras=$linea;
            echo $remeras;
        break;
    case 'traerRemerasFiltradas':
        $pais= $_GET["pais"];
            $a = fopen("./remeras.json","r");
            $linea = '';     
            while(!feof($a))
            { 
                $linea .= fgets($a);
            }   
            fclose($a);

            $remeras=$linea;
            
        $remerasDecode = json_decode($remeras);
        $remerasFiltradas = array();
      
        foreach($remerasDecode as $rem){
            $fabrica=$rem->manofacturer;
            $ubicacion= $fabrica->location;
      
            if($ubicacion->country == $pais)
            {
                $e = new stdclass();
                $e=$rem;
                
                array_push($remerasFiltradas, $e);
            }
        }

    
        //VUELVO A ENCODEAR A JSON, Y LO RETORNO
        if(count($remerasFiltradas) > 0)
            $remerasPorPais = json_encode($remerasFiltradas);
        else
            $remerasPorPais = "{}";
            
        echo $remerasPorPais;
    break;
    case 'traerRemerasFiltradasPorCampo':
        $campo= $_GET["campo"];
        $info= $_GET["info"];
            $a = fopen("./remeras.json","r");
            $linea = '';     
            while(!feof($a))
            { 
                $linea .= fgets($a);
            }   
            fclose($a);

            $remeras=$linea;
            
        $remerasDecode = json_decode($remeras);
        $remerasFiltradas = array();
      
        foreach($remerasDecode as $rem){
            if($campo=="Pais"){
                $fabrica=$rem->manofacturer;
                $ubicacion= $fabrica->location;
        
                if($ubicacion->country == $info)
                {
                    $e = new stdclass();
                    $e=$rem;
                    
                    array_push($remerasFiltradas, $e);
                }
            }else if($campo=="Color"){
                if( $rem->color == $info){
                    $e = new stdclass();
                    $e=$rem;
                    
                    array_push($remerasFiltradas, $e);
                }
            }else if($campo=="Tamaño"){
                if( $rem->size == $info){
                    $e = new stdclass();
                    $e=$rem;
                    
                    array_push($remerasFiltradas, $e);
                }
            }
           
        }

    
        //VUELVO A ENCODEAR A JSON, Y LO RETORNO
        if(count($remerasFiltradas) > 0)
            $remerasPorPais = json_encode($remerasFiltradas);
        else
            $remerasPorPais = "{}";
            
        echo $remerasPorPais;
    break;

    case "agregarRemera":
        $agregarElemento= $_GET["info"];
        $archivo= fopen("remeras.json","r");
        $linea="";
        while(!feof($archivo)){
            $linea.= fgets($archivo);
        }
        fclose($archivo);

        $remeras=$linea;
            
        $remerasDecode = json_decode($remeras);
     
        array_push($remerasDecode,json_decode($agregarElemento));
        
        $archivo= fopen("remeras.json","w");
        if($archivo){
            fwrite($archivo,($remerasDecode));
        }
        fclose($archivo);

    break;
    case "quitarRemera":
            $pais= $_GET["id"];
            $a = fopen("./remeras.json","r");
            $linea = '';     
            while(!feof($a))
            { 
                $linea .= fgets($a);
            }   
            fclose($a);

            $remeras=$linea;
            
        $remerasDecode = json_decode($remeras);
     

        foreach($remerasDecode as $rem){
            
            if($rem->id == $id)
            {
                
                unset($remerasDecode[$id]);
            }
        }
            $a = fopen("./remeras.json","w");
            $linea = '';     
                fwrite($a,$remerasDecode);
            fclose($a);
    break;
    
    default:
       echo "Error en caso.";
        break;
}

  
    
?>