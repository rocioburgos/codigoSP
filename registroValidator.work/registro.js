var Main;
(function (Main_1) {
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.Registrar = function () {
            //Levanto todos los datos del formulario.
            var apeliido = document.getElementById("apellido").value;
            var nombre = document.getElementById("nombre").value;
            var email = document.getElementById("email").value;
            var legajo = parseInt(document.getElementById("legajo").value);
            var perfil = document.getElementById("perfil").value;
            var clave = document.getElementById("clave").value;
            //FOTO.
            var foto = document.getElementById("foto");
            var form = new FormData();
            form.append('foto', foto.files[0]);
            var local = localStorage.getItem("users");
            var existe = false;
            var xhttp = new XMLHttpRequest();
            if (local != null || local != "") {
                var arrayUsuarios = JSON.parse(local);
                for (var index = 0; index < arrayUsuarios.length; index++) {
                    if (arrayUsuarios[index].correo == email) {
                        existe = true;
                        break;
                    }
                }
                if (existe) {
                    document.getElementById("errorEmail").style.display = "block";
                }
                else {
                    xhttp.open("POST", "BACKEND/administracion.php", true);
                    xhttp.setRequestHeader("enctype", "multipart/form-data");
                    form.append('caso', "subirFoto");
                    xhttp.send(form);
                    xhttp.onreadystatechange = function () {
                        if (xhttp.readyState == 4 && xhttp.status == 200) {
                            var retJSON = JSON.parse(xhttp.responseText);
                            if (retJSON.Ok) {
                                var nuevoUser = { "correo": email, "clave": clave, "nombre": nombre, "apellido": apeliido, "legajo": legajo, "perfil": perfil, "foto": retJSON.Path };
                                arrayUsuarios.push(nuevoUser);
                                localStorage.setItem("users", JSON.stringify(arrayUsuarios));
                                window.location.href = "lista.html";
                            }
                            else {
                                alert("error");
                            }
                        }
                    };
                }
            }
            else {
                alert("No hay datos cargados en el LS");
            }
        };
        return Main;
    }());
    Main_1.Main = Main;
})(Main || (Main = {}));
