/// <reference path="./libs/jquery/index.d.ts" />
$(document).ready(function () {
    $('#form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            clave: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es requerida'
                    },
                    different: {
                        field: 'email',
                        message: 'La contraseña no puede ser igual al email'
                    },
                    stringLength: {
                        min: 4,
                        max: 8,
                        message: 'La contraseña debe tener entre 4 y 8 caracteres'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'El email es requerido'
                    },
                    emailAddress: {
                        message: 'Formato de email invalido'
                    }
                }
            }
        }
    })
        .on('success.form.bv', function (e) {
        e.preventDefault();
        //chequear el LS si existe el mail y clave, si esta manda al listado
        var email = document.getElementById("email").value;
        var clave = document.getElementById("clave").value;
        var existe = false;
        var json = new Array();
        var local = localStorage.getItem("users");
        if (local != null && local != "") {
            var json_1 = JSON.parse(local);
            for (var i = 0; i < json_1.length; i++) {
                console.log(json_1[i].email);
                if (json_1[i].correo == email && json_1[i].clave == clave) {
                    alert("empleado existente ");
                    window.location.href = "./lista.html";
                    existe = true;
                    break;
                }
            }
        }
        else {
            alert("No esta cargado el LS");
            window.location.href = "./login.html";
        }
        if (!existe) {
            NoIngresar();
            //    (<HTMLDivElement>document.getElementById("tabla")).style.display="block";
        }
    });
});
function NoIngresar() {
    document.getElementById("tabla").style.display = "block";
}
