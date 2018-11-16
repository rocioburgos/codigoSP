<?php

/* Aplicación Nº 35 (Empresa de turismo)
Una empresa de turismo ofrece cinco destinos: Río de Janeiro, Punta del Este, La Habana,
Miami e Ibiza. Se pide hacer una página que posea un <select> con los cinco destinos y un
botón que le permita al usuario ver el valor del viaje.
Los valores de los viajes son: €900, €550, €1000, €1250 y €1500 respectivamente. */
/*Aplicación Nº 36 (Empresa de turismo con promociones)
Modificar la aplicación anterior para que la empresa pueda ofrecer una promoción de acuerdo
al modo de pago y la cantidad de pasajes a comprar.
Si el pago es en efectivo se realizará un descuento del 12 el valor del pasaje. Si es por
medio de tarjetas de crédito o débito el descuento será del 7%.
Independientemente de la forma de pago, si la cantidad de pasajes es superior a 2 cada pasaje
extra se abonará el 35% menos.  */
$destino= $_POST["destinos"];
$pasajeros=$_POST["pasajeros"];
$pago=$_POST["pago"];
echo "Usted selecciono:<br>Destino: {$destino}<br>Pasajeros: {$pasajeros}<br>Forma de pago: {$pago}<br>";

$unPasaje=0.00;
$subtotal=0.00;
$descuentoPasajeros=0.00;
$descuentoPago=0.00;
switch ($destino) {
    case 'Rio':
     $unPasaje+= 900;
        break;
    case 'Punta':
    $unPasaje+= 550;
    break;
    case "Habana":
    $unPasaje+= 1000;
    break;
    case "Miami":
    $unPasaje+= 1250;
    break;
    case "Ibiza":
    $unPasaje+= 1500;
    break;
    default:
        echo "No se encuentra ese destino";
        die();
    break;
}

    $subtotal=($unPasaje*$pasajeros);
   echo "pasajes normal: ".$subtotal."<br>";
    if($pasajeros>2){
        $masDeDos= $pasajeros-2;
        $descuentoPasajeros= (($unPasaje*0.35))*$masDeDos;
    }
    echo "descuento pasajeros ".$descuentoPasajeros."<br>";

    if($pago=="Efectivo"){
        $descuentoPago=(($unPasaje*0.12))*$pasajeros;
    }else {
        $descuentoPago=(($unPasaje*0.07))*$pasajeros;
    }
    echo "descuento pago: ".$descuentoPago."<br>";
    $total=$subtotal-($descuentoPago+$descuentoPasajeros);
echo "total: ". $total;

?>