function Calcular() {
    var numeroUno = document.getElementById("numeroUno").value;
    var numeroDos = document.getElementById("numeroDos").value;
    var operador = document.getElementById("operador").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./back.php?operador=" + operador + "&n1=" + numeroUno + "&n2=" + numeroDos, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            if (xhttp.responseText.length != 0 && xhttp.responseText != null) {
                document.getElementById("resultado").innerHTML = xhttp.responseText;
            }
            else {
                alert("Hubo un error");
            }
        }
    };
}
