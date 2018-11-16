function Funcion(){
    var nuevoValor: string= (<HTMLTextAreaElement>document.getElementById("texto")).value;
    var div = (<HTMLUListElement>document.getElementById("div"));
    var separador= " ";
    var agregar="<select>"
    let crearValores= nuevoValor.split(separador);
   for (let index = 0; index < crearValores.length; index++) {
       const element = crearValores[index];
           agregar+="<option>"+element+"</option>";
   }
    div.innerHTML=agregar+"</select>";
}