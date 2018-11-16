function EnviarANDrecibir() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./recibirJson.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            document.getElementById("contenedor").innerHTML = response.codigoBarra + " " + response.nombre + " " + response.precio;
        }
    };
}
