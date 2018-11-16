function Verificar() {
    var nombre = document.getElementById("nombre").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./comprobarDisponibilidad.php?nombre=" + nombre, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            if (xhttp.responseText == "Si") {
                alert("Si contiene el nombre");
            }
            else {
                alert("No contiene el nombre");
            }
        }
    };
}
