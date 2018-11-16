/// <reference path="./libs/jquery/index.d.ts" />

$(document).ready(function() {
    (<any>$('#form')).bootstrapValidator({
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
                        message: 'The password is required and cannot be empty'
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            }
        }
    })
    .on('success.form.bv', function (e:any) {
        e.preventDefault();  
        //chequear el LS si existe el mail y clave, si esta manda al listado
        let email:string=(<HTMLInputElement>document.getElementById("email")).value;
        let clave:string=(<HTMLInputElement>document.getElementById("clave")).value;
      /*  var json:any[]= new Array();
        var local= localStorage.getItem("empleados");
        if(local!=null && local!= ""){

        let json =JSON.parse(local); 

        for(let i=0; i<json.length;i++){
            console.log(json[i].email);
            if(json[i].email ==email && json[i].clave == clave)
            {
                alert("empleado existente ");
                window.location.href="./listado.html";
                break;
            }
        }   
        }else{
            alert("no exite");
            window.location.href="./index.html";
        }
       */
      alert(email+" "+clave);
      window.location.href= "./lista.html";

    });
});