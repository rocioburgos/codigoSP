/*8. Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota : Utilizar console.log()*/

function Factorioal(numero:number):void{
    var factorial=numero;
    for(let i=numero-1; i>0; i--){
       factorial= factorial*i;
    }
    console.log(`El factorial de ${numero} es ${factorial}`);
}

Factorioal(4);