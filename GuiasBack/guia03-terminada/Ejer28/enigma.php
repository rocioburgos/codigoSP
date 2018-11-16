<?php
/* Crear la clase Enigma, la cual tendrá la funcionalidad de encriptar/desencriptar los mensajes.
Su método estático Encriptar, recibirá un mensaje y a cada número del código ASCII de cada carácter 
del string le sumará 200. Una vez que cambie todos los caracteres, lo guardará en un archivo de texto 
(el path también se recibirá por parámetro). Retornará TRUE si pudo guardar correctamente
 el archivo encriptado, FALSE, caso contrario.
El método estático Desencriptar, recibirá sólo el path de dónde se leerá el archivo. Realizar el proceso 
inverso para restarle a cada número del código ASCII de cada carácter leído 200, para poder retornar el mensaje 
y ser mostrado desesncriptado*/
class Enigma{ 
        public static function Encriptar($cadena,$path){

            $cantCaracteres= strlen($cadena);
            $encriptado="";
            $retorno=false;
            for($i=0;$i<$cantCaracteres; $i++){

                $encriptado.= (ord($cadena[$i])+200) . " ";
            }

            $archivo=fopen($path,"w");
            if(!fwrite($archivo,$encriptado)){
                $retorno= true;
            }

            fclose($archivo);

            return $retorno;
        }

        public static function Desencriptar($path){
            $codigo="";

            //Leo el codigo a desencriptar del archivo
            $archivo= fopen($path,"r");
            $resuelto="";
            if($archivo){
                while(!feof($archivo))
                { 
                  $codigo.= fgets($archivo);
                }
            }
            fclose($archivo);

            $cantCaracteres= strlen($codigo);
            //Separo cada codigo en un index
            $ascii= explode(" ",$codigo);
           
         
            foreach($ascii as $letra){
               if( strlen($letra)>0)
                {
                    $unDesncrip=  ((int)($letra))-200;
                    $resuelto.=chr($unDesncrip);
                }
            }



            return $resuelto;
        }
}

?>