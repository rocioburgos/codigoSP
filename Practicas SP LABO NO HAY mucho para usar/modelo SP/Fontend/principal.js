window.onload = function () {
    var local = localStorage.getItem("empleados");
    if (local != null && local != "") {
        var arrayJson = JSON.parse(local);
        var tabla = document.getElementById("tabla");
        var agregar = "<th>Nombre</th><th>Apellido</th> <th>DNI</th><th>Edad</th><th>Foto</th><th colspan='2'>Acciones</th><th>Email</th>";
        for (var i = 0; i < arrayJson.length; i++) {
            agregar += "<tr><td>" + arrayJson[i].nombre + "</td><td>" + arrayJson[i].apellido + "</td><td>" + arrayJson[i].dni + "</td><td>" + arrayJson[i].edad + "</td><td><img src='./Backend/" + arrayJson[i].foto + "' width=50px><td><button onclick='Eliminar(" + JSON.stringify(arrayJson[i]) + ")' class='btn btn-danger'>Eliminar</button></td><td><button data-toggle='modal' data-target='#myModal' class='btn btn-warning'>Modificar</button></td><td>" + arrayJson[i].email + "</td></tr>";
        }
        tabla.innerHTML = agregar;
    }
};
function Eliminar(eliminar) {
    var json = new Array();
    var local = localStorage.getItem("empleados");
    if (local != null && local != "") {
        var json_1 = JSON.parse(local);
        for (var i = 0; i < json_1.length; i++) {
            console.log(json_1[i].email);
            if (json_1[i].email == eliminar.email && json_1[i].clave == eliminar.clave) {
                if (confirm("Seguro que quiere eliminar a " + eliminar.nombre)) {
                    json_1.splice(i, 1);
                    localStorage.setItem("empleados", JSON.stringify(json_1));
                    window.location.href = "./listado.html";
                }
            }
        }
    }
}
