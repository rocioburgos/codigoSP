"use strict";
function MostrarJsons() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "back.php", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //recupero, parseo muestro 
            var objJson = JSON.parse(xhttp.responseText);
            alert(objJson.length);
            for (var i = 0; i < objJson.length; i++) {
                console.log(objJson[i].Id + " " + objJson[i].Marca);
            }
        }
    };
}
