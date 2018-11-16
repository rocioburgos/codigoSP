"use strict";
function Calcular() {
    var numeroUno = parseInt(document.getElementById("numUno").value);
    var numeroDos = parseInt(document.getElementById("numDos").value);
    var operador = Chechekd();
    var resultado = 0;
    switch (operador) {
        case "+":
            resultado = numeroDos + numeroUno;
            break;
        case "-":
            resultado = numeroUno - numeroDos;
            break;
        case "*":
            resultado = numeroUno * numeroDos;
            break;
        case "/":
            if (numeroDos == 0) {
                alert("No se puede dividir por cero.");
            }
            else {
                resultado = numeroUno / numeroDos;
            }
            break;
        default:
            alert("Debe seleccionar un operador");
            break;
    }
    document.getElementById("resultado").value = resultado.toString();
    console.log(resultado);
}
function Chechekd() {
    var combo = document.getElementsByName("oper");
    for (var i = 0; i < combo.length; i++) {
        if (combo[i].checked) {
            return "" + combo[i].value;
        }
    }
    return "";
}
