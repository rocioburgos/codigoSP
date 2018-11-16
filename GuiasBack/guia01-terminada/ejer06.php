<?php
/* Aplicación Nº 6 (Calculadora)
Escribir un programa que use la variable  que pueda almacenar los símbolos
matemáticos: ‘+’, ‘-’, ‘/’ y ‘*’; y definir dos variables enteras $op1 y $op2. De acuerdo al
símbolo que tenga la variable $operador, deberá realizarse la operación indicada y mostrarse el
resultado por pantalla.
*/
$operador="-";
$op1=1; $op2=3;

switch ($operador) {
    case '+':
        echo $op1+$op2;
        break;
    case '-':
    echo $op1-$op2;
    break;
    case '*':
    echo $op1*$op2;
        break;
    case '/':
        if($op2==0){
            echo "No se puede dividir por cero";
        }else{
            echo $op1/$op2;
        }
    break;
    default:
        echo "No se reconoce el operador.";
    break;
}
?>