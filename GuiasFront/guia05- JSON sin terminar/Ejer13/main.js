var ajax = new XMLHttpRequest();
ajax.open("GET", "back.php", true);
ajax.send();
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var response = JSON.parse(ajax.responseText);
        var select = document.getElementById("paises");
        var agregar = "";
        var existe = false;
        /**************Para evitar repetir valores al momento de cargar.*********************/
        var codigosCargados = new Array();
        var index = 0;
        for (var i = 0; i < select.length; i++) {
            codigosCargados[index] = (select[i].value);
            index++;
        }
        /****************************************************************/
        for (var i = 0; i < response.length; i++) {
            for (var k = 0; k < codigosCargados.length; k++) {
                if (response[i].CodigoPais == codigosCargados[k]) {
                    existe = true;
                }
            }
            if (!existe) {
                agregar += "<option value='" + response[i].CodigoPais + "'>" + response[i].Pais + "</option>";
                codigosCargados[index] = response[i].CodigoPais;
                index++;
            }
            existe = false;
        }
        select.innerHTML += agregar;
    }
};
function CargarPaises() {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "back.php", true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var response = JSON.parse(ajax.responseText);
            var selectPais = (document.getElementById("paises").value);
            var selectCity = document.getElementById("city");
            var agregar = "";
            for (var i = 0; i < response.length; i++) {
                if (response[i].CodigoPais == selectPais) {
                    agregar += "<option value='" + response[i].CodigoPais + "'>" + response[i].Ciudad + "</option>";
                }
            }
            selectCity.innerHTML = agregar;
        }
    };
}
