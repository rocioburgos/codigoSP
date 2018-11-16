/* 5. Guardar su nombre y apellido en dos variables distintas. Dichas variables serán pasadas
como parámetro de la función MostrarNombreApellido , que mostrará el apellido en
mayúscula y el nombre solo con la primera letra en mayúsculas y el resto en minúsculas.
El apellido y el nombre se mostrarán separados por una coma (,).
Nota : Utilizar console.log()*/
function MostrarNombreApellido(nombre:string, apellido:string){
    console.log(Capitalizar(nombre)+", "+Capitalizar(apellido));
}
function Capitalizar(cadena: string):string {

    return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}

var apellido="BURGOS"; var nombre= "ROCIO";
MostrarNombreApellido(nombre,apellido);