function Añadir() {
    var nuevoValor = document.getElementById("texto").value;
    var lista = document.getElementById("lista");
    lista.innerHTML += "<li>" + nuevoValor + "</li>";
}
