"use strict";
/// <reference path="./empleado.ts"/>
var empleadoUno = new Main.Empleado("Burgos", 4095, "Rocio", "F", 1, 25000);
console.log("Apellido GET: " + empleadoUno.Apellido);
console.log("Metodo hablar:" + empleadoUno.Hablar("Español"));
console.log(empleadoUno.ToString());
