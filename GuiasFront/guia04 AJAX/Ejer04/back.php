<?php
    $numeroUno= $_GET["n1"];
    $numeroDos= $_GET["n2"];
    $operador= $_GET["operador"];
    $solucion=0;
    /*echo $operador;
    switch ($operador) {
        case '*':
            $resultado= $numeroUno * $numeroDos;
        break;
        case '+':
            $resultado= $numeroUno + $numeroDos;
        break;
        case '-':
             $resultado= $numeroUno - $numeroDos;
        break;
        
        case '/':
            if($numeroDos!=0){
                echo "Error";
            }else{
                $resultado= $numeroUno / $numeroDos;
            }
        break;
        default:
            echo "Error";
        break;
        
    }
    echo $resultado;*/
    if($operador == "suma"){
		$solucion = $numeroUno + $numeroDos;
	}else if($operador == "resta"){
		$solucion = $numeroUno - $numeroDos;
	}else if($operador == "multiplicacion"){
		$solucion = $numeroUno * $numeroDos;
	}else if($operador == "division"){
		$solucion = $numeroUno / $numeroDos;
	}
	echo "La solución es: ".$solucion;
?>