/// <reference path="../../bower_components/jquery/index.d.ts" />


$(document).ready(function () {

    (<any>$("#idForm")).bootstrapValidator({

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove'
        },
        fields: {
            usuario: {
                validators: {
                    notEmpty: {
                        message: 'El nombre de usuario es requerido!!!'
                    },
                    stringLength: {
                        min: 3,
                        message: 'El mínimo de caracteres admitido es de 3!!!'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es requerida!!!'
                    },
                    stringLength: {
                        min: 6,
                        max: 20,
                        message: 'Por favor, ingrese entre 6 y 20 caracteres!!!'
                    }
                }
            }
        }
    })
    //SI SUPERA TODAS LAS VALIDACIONES, SE PROVOCA EL SUBMIT DEL FORM
    .on('success.form.bv', function (e) {
        e.preventDefault(); 
        alert("Submit...");

    });

});