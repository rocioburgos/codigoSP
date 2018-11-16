/// <reference path="./libs/jquery/index.d.ts" />
/// <reference path="./registro.ts" />


$(document).ready(function() {
    (<any>$('#form')).bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre:{
                validators:{
                    stringLength: {
                        max: 10,
                        message: 'El nombre puede tener 10 caracteres maximo'
                    },
                    notEmpty: {
                        message: 'El campo Nombre es requerido!'
                    }
                }
            },
            apellido:{
                validators:{
                    stringLength: {
                        max: 15,
                        message: 'El apellido puede tener 15 caracteres maximo'
                    },
                    notEmpty: {
                        message: 'El campo Apellido es requerido!'
                    }
                }
            },
            clave: {
                validators: {
                    stringLength:{
                        min: 4,
                        max: 8,
                        message: "La clave debe tener entre 4 y 8 caracteres"
                    },
                    notEmpty: {
                        message: 'El campo Password es requerido!'
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
                    notEmpty: {
                        message: 'El campo Repita password es requerido!'
                    },
                    identical: {
                        field: 'clave',
                        message: 'La contraseña y su confirmación no coinciden!'
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
            },
            legajo: {
                validators: {
                    stringLength: {
                        max: 6,
                        min: 3,
                        message: 'El legajo puede tener 3 y 6 digitos'
                    },
                    notEmpty: {
                        message: 'El campo legajo es requerido!'
                    }
                }
            },
            foto: {
                validators: {
                    notEmpty: {
                        message: 'Seleccione una imagen'
                    },
                    file: {
                        extension: 'jpg,png',
                        type: 'image/jpeg,image/png',
                     //   maxSize: 699392, //=> 1024 * 683 //2097152 => 2048 * 1024
                        message: 'El archivo seleccionado no es válido!'
                    },
                }
            },
        }
    })
    .on('success.form.bv', function (e:any) {
        e.preventDefault();  
        Main.Main.Registrar();
        
       
    });  
});

 