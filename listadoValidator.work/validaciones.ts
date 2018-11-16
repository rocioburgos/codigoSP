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
                        message: 'La contraseña es requerida'
                    },
                    different: {
                        field: 'email',
                        message: 'La contraseña no puede ser igual al email'
                    },
                    stringLength: {
                        min: 4,
                        max:8,
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
    .on('success.form.bv', function (e:any) {
        e.preventDefault();  
        //chequear el LS si existe el mail y clave, si esta manda al listado
        let email:string=(<HTMLInputElement>document.getElementById("email")).value;
        let clave:string=(<HTMLInputElement>document.getElementById("clave")).value;
        let existe=false;
        var json:any[]= new Array();
        var local= localStorage.getItem("users");
        if(local!=null && local!= ""){

            let json =JSON.parse(local); 

            for(let i=0; i<json.length;i++){
                console.log(json[i].email);
                if(json[i].correo ==email && json[i].clave == clave)
                {
                    alert("empleado existente ");
                    window.location.href="./lista.html";
                    
                    existe=true;
                    break;
                }
            }   

        }else{
            alert("No esta cargado el LS");
             window.location.href="./login.html";
        }
     
      
        if(!existe){
            NoIngresar();
        //    (<HTMLDivElement>document.getElementById("tabla")).style.display="block";
        }
    });  
});

function NoIngresar(){
 
    (<HTMLDivElement>document.getElementById("tabla")).style.display="block";
   
}

 