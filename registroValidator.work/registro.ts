namespace Main{
    export class Main{

        public static Registrar(){
            //Levanto todos los datos del formulario.
            var apeliido: string= (<HTMLInputElement>document.getElementById("apellido")).value;
            var nombre: string= (<HTMLInputElement>document.getElementById("nombre")).value;
            var email: string= (<HTMLInputElement>document.getElementById("email")).value;
            var legajo: number=parseInt((<HTMLInputElement>document.getElementById("legajo")).value);
            var perfil: string= (<HTMLInputElement>document.getElementById("perfil")).value; 
            var clave: string= (<HTMLInputElement>document.getElementById("clave")).value;
            //FOTO.
            var foto:any= (<HTMLInputElement>document.getElementById("foto"));
                let form : FormData = new FormData();
                form.append('foto', foto.files[0]);
          
            
            var local: any= localStorage.getItem("users");
            var existe=false;
            let xhttp : XMLHttpRequest = new XMLHttpRequest();
        
            if(local!=null || local!= ""){ 

                var arrayUsuarios= JSON.parse(local);

                for(let index=0; index< arrayUsuarios.length ; index++){
                    if(arrayUsuarios[index].correo== email){
                        existe= true;
                        break;
                    }
                }
           

                if(existe){
                    (<HTMLDivElement>document.getElementById("errorEmail")).style.display="block";
                }else{
                    xhttp.open("POST", "BACKEND/administracion.php", true);
                    xhttp.setRequestHeader("enctype", "multipart/form-data");
                        form.append('caso', "subirFoto");
                    xhttp.send(form);
                    xhttp.onreadystatechange = () => {
                        if (xhttp.readyState == 4 && xhttp.status == 200) {
                            let retJSON = JSON.parse(xhttp.responseText);
                           
                            if(retJSON.Ok)
                            { 
                                let nuevoUser:any=  {"correo":email , "clave":clave, "nombre":nombre, "apellido":apeliido, "legajo":legajo, "perfil":perfil ,"foto":retJSON.Path};
                                arrayUsuarios.push(nuevoUser);
            
                                localStorage.setItem("users",JSON.stringify( arrayUsuarios)); 
                                window.location.href= "lista.html";
                               
                            }else{
                                alert("error");
                            }
                        }
                    };
                   
                }
           
            }else{
                alert("No hay datos cargados en el LS");
            }
           
            
        }
    }
}