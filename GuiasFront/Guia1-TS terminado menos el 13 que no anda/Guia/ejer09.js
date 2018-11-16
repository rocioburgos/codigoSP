"use strict";
/*9. Realizar una función que solicite (por medio de un parámetro) un número. Si el número
es positivo, se mostrará el factorial de ese número, caso contrario se mostrará el cubo de
dicho número.
Nota : Reutilizar la función que determina el factorial de un número y la que calcula el
cubo de un número.*/
function Mostrar(valor) {
    if (valor > 0) {
        console.log(Factorial(valor));
    }
    else {
        console.log(Cuboo(valor));
    }
}
function Factorial(numero) {
    var factorial = numero;
    for (var i = numero - 1; i > 0; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
function Cuboo(numero) {
    return Math.pow(numero, 3);
}
Mostrar(5);
Mostrar(-3);
//# sourceMappingURL=ejer09.js.map