function Funcion() {
    var nuevoValor = document.getElementById("texto").value;
    var div = document.getElementById("div");
    var separador = " ";
    var agregar = "<select>";
    var crearValores = nuevoValor.split(separador);
    for (var index = 0; index < crearValores.length; index++) {
        var element = crearValores[index];
        agregar += "<option>" + element + "</option>";
    }
    div.innerHTML = agregar + "</select>";
}
