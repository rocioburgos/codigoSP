/// <reference path="./persona.ts" />
/// <reference path="./empleado.ts" />
var Main;
(function (Main_1) {
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.GuardarEnLS = function (empleado) {
            var empleadoJson = JSON.parse(empleado);
            var existe = false;
            var json = new Array();
            var local = localStorage.getItem("empleados");
            if (local != null && local != "") {
                var json_1 = JSON.parse(local);
                for (var i = 0; i < json_1.length; i++) {
                    if (json_1[i].email == empleadoJson.email) {
                        alert("empleado existente ");
                        existe = true;
                        break;
                    }
                }
                if (!existe) {
                    json_1.push(empleadoJson);
                    localStorage.setItem("empleados", JSON.stringify(json_1));
                }
            }
            else {
                json.push(empleadoJson);
                localStorage.setItem("empleados", JSON.stringify(json));
            }
        };
        Main.Agregar = function () {
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var email = document.getElementById("email").value;
            var dni = parseInt(document.getElementById("dni").value);
            var edad = parseInt(document.getElementById("edad").value);
            var puesto = document.getElementById("puesto").value;
            var ingreso = (document.getElementById("fecha").value);
            var foto = document.getElementById("foto");
            var clave = document.getElementById("clave").value;
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "./Backend/nexo.php", true);
            xhttp.setRequestHeader("enctype", "multipart/form-data");
            var form = new FormData();
            form.append('foto', foto.files[0]);
            form.append('op', "subirFoto");
            xhttp.send(form);
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var retJSON = JSON.parse(xhttp.responseText);
                    if (retJSON.Ok == true) {
                        var unEmpleado = new Clases.Empleado(apellido, nombre, edad, dni, puesto, ingreso, retJSON.Path, email, clave);
                        Main.GuardarEnLS(JSON.stringify(unEmpleado.ToJson()));
                    }
                }
            };
        };
        Main.Ingresar = function () {
            //chequear el LS si existe el mail y clave, si esta manda al listado
            var email = document.getElementById("email").value;
            var clave = document.getElementById("clave").value;
            var json = new Array();
            var local = localStorage.getItem("empleados");
            if (local != null && local != "") {
                var json_2 = JSON.parse(local);
                for (var i = 0; i < json_2.length; i++) {
                    console.log(json_2[i].email);
                    if (json_2[i].email == email && json_2[i].clave == clave) {
                        alert("empleado existente ");
                        window.location.href = "./listado.html";
                        break;
                    }
                }
            }
            else {
                alert("no exite");
                window.location.href = "./index.html";
            }
        };
        return Main;
    }());
    Main_1.Main = Main;
})(Main || (Main = {}));
