function Suggestion(cadena) {
    if (cadena.length == 0) {
        document.getElementById("divNombresSugeridos").innerHTML = "";
        return;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var sugerencias = xmlhttp.responseText;
            // sugerencias = sugerencias === "" ? "Sin Sugerencias..." : sugerencias;
            if (sugerencias === "") {
                sugerencias = "Sin Sugerencias...";
            }
            document.getElementById("divNombresSugeridos").innerHTML = sugerencias;
        }
    };
    xmlhttp.open("POST", "obtenerSugerencia.php", true);
    xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("palabra=" + cadena);
}
