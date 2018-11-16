"use strict";
function CalcularSueldo() {
    //6.88*hsWork
    var horas = parseInt(document.getElementById("txtHoras").value);
    var valorHoras = ObtenerCoeficiente();
    document.getElementById("txtSueldo").value = (horas * valorHoras).toString();
}
function ObtenerCoeficiente() {
    return 6.88;
}
