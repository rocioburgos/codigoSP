/// <reference path="./libs/jquery/index.d.ts" />

/// <reference path="./listado.ts" />


$(document).ready(function() {
    (<any>$('#myModal')).bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            clave: {
                validators: {
                    stringLength:{
                        min: 4,
                        max: 8,
                        message: "La clave debe tener entre 4 y 8 caracteres"
                    },
                    identical: {
                        field: 'confirm',
                        message: 'La contraseña y su confirmación no coinciden!'
                    }
                }
            },
             confirm: {
                validators: {
                    stringLength:{
                        min: 4,
                        max: 8,
                        message: "La confimacion debe tener entre 4 y 8 caracteres"
                    }, 
                    identical: {
                        field: 'clave',
                        message: 'La contraseña y su confirmación no coinciden!'
                    }
                }
            },
            foto: {
                validators: {
                    file: {
                        extension: 'jpg,png',
                        type: 'image/jpeg,image/png',
                     //   maxSize: 699392, //=> 1024 * 683 //2097152 => 2048 * 1024
                        message: 'El archivo seleccionado no es válido!'
                    },
                }
            }
        }
    })
    .on('success.form.bv', function (e:any) {
    //    e.preventDefault();  
        Modificar();
    });  
});



 