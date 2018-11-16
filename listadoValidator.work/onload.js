window.onload = function () {
    localStorage.setItem("perfil", "invitado");
    //si es admin , le voy a mostrar acciones.
    var acciones = false;
    if (localStorage.getItem("perfil") == "administrador") {
        acciones = true;
    }
    var local = localStorage.getItem("users");
    if (local != null || local != "") {
        var arrayJson = JSON.parse(local);
        var agregarTabla = " <th>Correo</th> <th>Nombre</th><th>Apellido</th> <th>Perfil</th> <th>Legajo</th> <th>Foto</th>";
        if (acciones) {
            agregarTabla += "<th>Acciones</th>";
        }
        for (var index = 0; index < arrayJson.length; index++) {
            var user = arrayJson[index];
            agregarTabla += "<tr><td>" + user.correo + "</td><td>" + arrayJson[index].nombre + "</td><td>" + arrayJson[index].apellido + "</td><td>" + arrayJson[index].perfil + "</td><td>" + arrayJson[index].legajo + "</td><td><img width='50px' src=./fotos/" + arrayJson[index].foto + "</td>";
            if (acciones) {
                agregarTabla += "<td><button class='btn btn-danger' onclick='Eliminar(" + JSON.stringify(arrayJson[index]) + ")'>Eliminar</button></td>";
            }
            agregarTabla += "</tr>";
        }
        document.getElementById("tabla").innerHTML += agregarTabla;
    }
};
function Eliminar(eliminar) {
    if (confirm("Seguro de eliminar a " + eliminar.nombre + ", " + eliminar.apellido)) {
        var local = localStorage.getItem("users");
        if (local != null || local != "") {
            var arrayJson = JSON.parse(local);
            for (var index = 0; index < arrayJson.length; index++) {
                if (arrayJson[index].correo == eliminar.correo) {
                    arrayJson.splice(index, 1);
                }
            }
        }
        localStorage.setItem("users", JSON.stringify(arrayJson));
        window.location.href = "./lista.html";
    }
}
