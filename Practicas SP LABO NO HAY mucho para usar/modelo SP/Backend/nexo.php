<?php
    $caso= $_POST["op"];

    switch ($caso) {
        case 'subirFoto':
            $objRetorno = new stdClass();
            $objRetorno->Ok = false;

            $destino = "./fotos/" . date("Ymd_His") . ".jpg";
            
            if(move_uploaded_file($_FILES["foto"]["tmp_name"], $destino) ){
                $objRetorno->Ok = true;
                $objRetorno->Path = $destino;
            }

            echo json_encode($objRetorno);
        break;
        
        default:
            # code...
            break;
    }
?>