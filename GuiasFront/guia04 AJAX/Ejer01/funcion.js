function funcion() {
    var numero = parseInt(document.getElementById("numero").value);
    if (numero > 0) {
        var xhttp_1 = new XMLHttpRequest();
        xhttp_1.open("GET", "./back.php?numero=" + numero);
        xhttp_1.send();
        xhttp_1.onreadystatechange = function () {
            if (xhttp_1.readyState === 4 && xhttp_1.status === 200) {
                //(<HTMLInputElement>document.getElementById("cantidad")).innerHTML+=xhttp.responseText;
                document.getElementById("cantidad").innerHTML = "Cantidad de impares <input type='text' value=" + xhttp_1.responseText + ">";
            }
        };
    }
}
