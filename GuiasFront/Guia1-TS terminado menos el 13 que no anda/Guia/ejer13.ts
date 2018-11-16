/*13. Un número de Smith es un número entero tal que la suma de sus dígitos es igual a la
suma de los dígitos de los números restantes tras la factorización en primos (la
factorización debe estar escrita sin exponentes, repitiendo los números todas las veces
necesarias). Por ejemplo, 378 = 2 × 3 × 3 × 3 × 7 es un número de Smith en base 10,
porque 3 + 7 + 8 = 2 + 3 + 3 + 3 + 7. Por definición, se deben contar los dígitos de los
factores. Por ejemplo, 22 en base 10 es 2 × 11, y se deben contar los tres dígitos: 2, 1,
1. Por lo tanto 22 es un número de Smith porque 2 + 2 = 2 + 1 + 1
Nota : Utilice tres funciones, una realiza la comparación, otra descompone el numero en
sus factores primos y suma los coeficientes, y la última función suma cada termino.*/
 
 
function smith(sum:number, facts:number):string{//realiza la comparacion 
    var info:string = 'El numero es ';
    var tipo="normal"; 
    if    (sum == facts){ 
        tipo=  "Smith"; 
    } 
    return info+tipo; 
} 
 
function factoresPrimos(num:number):number{ //descompone en factores primos
     
    var suma:number = 0; 
    var divisor:number = 2; 
    while (divisor <= num){ 
        if(num % divisor == 0){ 
            suma = divisor + suma; 
                var cociente:number = num / divisor; 
                num = cociente; 
            } 
    divisor = divisor + 1; 
    } 
    return suma; 
} 
 
function sumNumeros(num:number):number{ //suma de coficientes
    var valor1 = num % 10, 
        valor2 = num / 10, 
        sumValores = valor1 + valor2; 
    
    return sumValores; 
} 
 
var num:number = 378;
var sum:number = sumNumeros(num); 
var facts:number = factoresPrimos(num); 
var smithFin:string = smith(sum, facts); 
console.log(smithFin); 