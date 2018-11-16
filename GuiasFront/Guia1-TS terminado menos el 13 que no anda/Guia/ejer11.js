"use strict";
/*11. Definir una función que determine si la cadena de texto que se le pasa como parámetro
es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural" .*/
//1 dar vuelta la oracion. 2 compararla con la primera sin los espacios
function Invertirr(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";
    while (x >= 0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(x);
        x--;
    }
    return cadenaInvertida.replace(/ /g, "");
}
function Polindromo(cadena) {
    var msj = "La cadena es de tipo ";
    var tipo = "normal";
    var nuevaCadena = cadena.replace(/ /g, "");
    var invertidaCadena = Invertirr(cadena);
    if (nuevaCadena.toLowerCase() == invertidaCadena.toLowerCase()) {
        tipo = "polindromo";
    }
    console.log(msj + tipo);
}
Polindromo("La ruta nos aporto otro paso natural");
Polindromo("neuquen");
//# sourceMappingURL=ejer11.js.map