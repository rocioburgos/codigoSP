/* 2. Cree una aplicación que muestre, a través de un Array , los nombres de los meses de un
año y el número al que ese mes corresponde. Utilizar una estructura repetitiva para
escribir en la consola ( console.log() */

var vec:string[] =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Sep","Octubre","Noviembre","Diciembre"];
for(let i=0; i <12;i++ ){
console.log(`${i+1} ${vec[i]}\n`);
}