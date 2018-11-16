"use strict";
/*12. Crear una función que reciba como único parámetro una cadena que contenga el día, mes
y año de nacimiento de una persona (con formato dd-mm-yyyy ). La función mostrará por
consola a que signo corresponde dicha fecha de nacimiento.
Nota : Para descomponer la fecha recibida como parámetro utilice la función split.*/
function Signo(nacimiento) {
    var vec = nacimiento.split("-");
    var signo = "";
    var dia = vec[0];
    var mes = vec[1];
    switch (mes) {
        case "1":
        case "01":
            if (dia > "21") {
                signo = "ACUARIO";
            }
            else {
                signo = "CAPRICORNIO";
            }
            break;
        case "2":
        case "02":
            if (dia > "19") {
                signo = "PISCIS";
            }
            else {
                signo = "ACUARIO";
            }
            break;
        case "3":
        case "03":
            if (dia > "20") {
                signo = "ARIES";
            }
            else {
                signo = "PISCIS";
            }
            break;
        case "4":
        case "04":
            if (dia > "20") {
                signo = "TAURO";
            }
            else {
                signo = "ARIES";
            }
            break;
        case "5":
        case "05":
            if (dia > "21") {
                signo = "GEMINIS";
            }
            else {
                signo = "TAURO";
            }
            break;
        case "6":
        case "06":
            if (dia > "20") {
                signo = "CANCER";
            }
            else {
                signo = "GEMINIS";
            }
            break;
        case "7":
        case "07":
            if (dia > "22") {
                signo = "LEO";
            }
            else {
                signo = "CANCER";
            }
            break;
        case "8":
        case "08":
            if (dia > "21") {
                signo = "VIRGO";
            }
            else {
                signo = "LEO";
            }
            break;
        case "9":
        case "09":
            if (dia > "22") {
                signo = "LIBRA";
            }
            else {
                signo = "VIRGO";
            }
            break;
        case "10":
            if (dia > "22") {
                signo = "ESCORPION";
            }
            else {
                signo = "LIBRA";
            }
            break;
        case "11":
            if (dia > "21") {
                signo = "SAGITARIO";
            }
            else {
                signo = "ESCORPION";
            }
            break;
        case "12":
            if (dia > "21") {
                signo = "CAPRICORNIO";
            }
            else {
                signo = "SAGITARIO";
            }
            break;
    }
    console.log("Es de signo " + signo);
}
Signo("22-01-1998");
//# sourceMappingURL=ejer12.js.map