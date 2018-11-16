
function Añadir(){
    var nuevoValor: string= (<HTMLTextAreaElement>document.getElementById("texto")).value;
    var lista = (<HTMLUListElement>document.getElementById("lista"));
    lista.innerHTML+="<li>"+nuevoValor+"</li>";
}