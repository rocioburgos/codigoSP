"use strict";
function Validar() {
    var nombre = (document.getElementById("txtNombre").value);
    var apellido = (document.getElementById("txtApellido").value);
    var dni = parseInt(document.getElementById("txtDni").value);
    var sexo = (document.getElementById("txtSexo").value);
    var todoOk = true;
    if (ValidarCampoVacio(nombre) == false) {
        MarcarError("spanN", true);
        todoOk = false;
    }
    else {
        MarcarError("spanN", false);
    }
    if (ValidarCampoVacio(apellido) == false) {
        MarcarError("spanA", true);
        todoOk = false;
    }
    else {
        MarcarError("spanA", false);
    }
    if (isNaN(dni) || dni < 0) {
        MarcarError("spanD", true);
        todoOk = false;
    }
    else {
        MarcarError("spanD", false);
    }
    if (sexo != "F" && sexo != "M") {
        MarcarError("spanS", true);
        todoOk = false;
    }
    else {
        MarcarError("spanS", false);
    }
    if (todoOk) {
        alert("Bienvenido " + nombre);
    }
    else {
        alert("Revise los datos ingresados");
    }
    /* if(ValidarCampoVacio(nombre) && ValidarCampoVacio(apellido) && dni>0 && (sexo=="F"|| sexo=="M") )
     {
        alert("Bienvenido "+nombre);
     }else{
         alert("Revise los datos ");
     }*/
}
function ValidarCampoVacio(campo) {
    var caracter = campo.length;
    if (caracter > 0) {
        return true;
    }
    return false;
}
function MarcarError(id, condicion) {
    if (condicion) {
        (document.getElementById(id)).style.display = "block";
    }
    else {
        (document.getElementById(id)).style.display = "none";
    }
}
//# sourceMappingURL=main.js.map