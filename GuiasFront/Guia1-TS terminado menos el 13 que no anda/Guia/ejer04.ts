/* 4. Realizar una función que reciba un número y que muestre (por consola) un mensaje
como el siguiente:
El número 5 es impar , siendo 5 el número recibido como parámetro.*/

function MostrarTipo(numero:number){ 
  /*  var resultado= "El numero "+numero;
    if(numero%2===0){
      resultado+=" par";
    }else{
        resultado+=" impar";
    } 
    console.log(resultado);*/

    var msj:string="El numero "+numero+" es";
    msj+= numero%2==0?" par ": " impar";
    console.log(msj);
}

MostrarTipo(5);