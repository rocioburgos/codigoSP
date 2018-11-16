/*10. Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/
function InfoCadena(cadena:string):string {
 
    var resultado:string = "La cadena \""+cadena+"\" ";
   
    // Comprobar mayúsculas y minúsculas
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
   
    return resultado;
  }
   
console.log(InfoCadena("ARBOL"));                                                                                                                                                                                                                                                                                                                                                                                            