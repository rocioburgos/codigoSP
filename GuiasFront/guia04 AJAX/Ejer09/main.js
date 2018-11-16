function CargarPaises() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var provincia = xmlhttp.responseText;
            console.log(provincia);
            document.getElementById("listaPais").innerHTML += provincia;
        }
    };
    var provinciaSelec = document.getElementById("listaPais").value;
    xmlhttp.open("POST", "back.php", true);
    xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("provincia=" + provinciaSelec);
}
function cargarCiudades(seleccionada) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var ciudades = xmlhttp.responseText;
            console.log(ciudades);
            document.getElementById("listaCiudad").innerHTML = ciudades;
        }
    };
    xmlhttp.open("POST", "ciudades.php", true);
    xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("provincia=" + seleccionada);
}
