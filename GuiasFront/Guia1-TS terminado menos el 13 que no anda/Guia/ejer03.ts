/* 3. Realizar una función que reciba un parámetro requerido de tipo numérico y otro opcional
de tipo cadena. Si el segundo parámetro es recibido, se mostrará tantas veces por
consola, como lo indique el primer parámetro. En caso de no recibir el segundo
parámetro, se mostrará el valor inverso del primer parámetro.*/
function Funcion(n1:number, cadena?:string){
    if(cadena!= null){
        for(let i=0; i<n1;i++){
            console.log(cadena);
        }
    }else{
        console.log(Invertir(n1));
    }

}

function Invertir(numero:number):number{
    var invertido = 0;
    var resto = numero;
    do {
      invertido = invertido * 10 + (resto % 10);
      resto = Math.floor(resto / 10);
    } while ( resto > 0 );
    return invertido;
} 

  Funcion(2,"Hola mundo");
  Funcion(90);

