<?php

    $path =$_GET["path"];
    $palabra = $_GET["palabra"];
    try{ 
            $archivo= fopen($path,"r");
            if(($archivo)){
                $contenido="";
                while(!feof($archivo)){
                    $contenido.= fgets($archivo);
                
                }
                fclose($archivo);  
                echo $contenido;
                if(isset($palabra))
                {
                    if(strpos($contenido, $palabra)){
                        echo "Contiene la palabra buscada";
                    }else{
                        echo "No contiene la palabra";
                    }
                }
            }else{

                //fclose($archivo);
                echo "Error el archivo no existe.";
            }
    }catch(IOException $e){
        echo "Error el archivo no existe.";
    }
   
/*  try
    {
        $path= $_GET["path"];
        if(isset($path))
        {   
            $lineas="";
    
            $archivo= fopen($path,"r");
            if($archivo){
                while(!feof($archivo)){
                    $lineas.=fgets($archivo);
                }
                fclose($archivo);
                echo $lineas;
        }
        }
    }catch(IOException $e){
        echo "Error";
    }

?> */
?>