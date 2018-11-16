"use strict";
function EnviarAjax() {
    var path = (document.getElementById("txtPath").value);
    var palabra = (document.getElementById("txtPalabra").value);
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "back.php?path=" + path + "&palabra=" + palabra, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("contenedor").innerHTML = "";
            var response = xhttp.responseText;
            if (response.length == 0 || response == null) {
                alert("hubo un error");
            }
            else {
                document.getElementById("contenedor").innerHTML = response;
            }
        }
        ;
    };
}
