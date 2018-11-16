"use strict";
function EnviarAjax() {
    var numero = parseInt(document.getElementById("txtNumero").value);
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "back.php?numero=" + numero, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("countPar").innerHTML = "<input type='text' value='" + xhttp.responseText + "' readonly>";
            alert(xhttp.responseText);
        }
    };
}
