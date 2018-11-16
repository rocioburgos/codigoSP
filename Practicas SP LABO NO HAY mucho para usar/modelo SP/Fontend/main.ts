/// <reference path="./persona.ts" />
/// <reference path="./empleado.ts" />

namespace Main{
    export class Main{ 
        
        private static GuardarEnLS(empleado:string){

            var empleadoJson= JSON.parse(empleado);
            var existe= false;
            var json:any[]= new Array();
            var local= localStorage.getItem("empleados");
            if(local!=null && local!= ""){

              let json =JSON.parse(local); 
            
              for(let i=0; i<json.length;i++){
                 
                if(json[i].email == empleadoJson.email)
                {
                    alert("empleado existente ");
                    existe= true;
                    break;
                }
              }

              if(!existe){
                  json.push(empleadoJson);
                  localStorage.setItem("empleados",JSON.stringify(json));
              }
                
            }else{
                json.push(empleadoJson);
                localStorage.setItem("empleados",JSON.stringify(json));
            }
            
           
        }


        public static Agregar(){
         
            let nombre:string=(<HTMLInputElement>document.getElementById("nombre")).value;
            let apellido:string=(<HTMLInputElement>document.getElementById("apellido")).value;
            let email:string=(<HTMLInputElement>document.getElementById("email")).value;
            let dni:number=parseInt( (<HTMLInputElement>document.getElementById("dni")).value);
            let edad:number= parseInt((<HTMLInputElement>document.getElementById("edad")).value);
            let puesto:string=(<HTMLSelectElement>document.getElementById("puesto")).value;
            let ingreso:string=( (<HTMLInputElement>document.getElementById("fecha")).value);
            let foto:any=(<HTMLImageElement>document.getElementById("foto"));
            let clave:string=(<HTMLSelectElement>document.getElementById("clave")).value;
            let xhttp : XMLHttpRequest = new XMLHttpRequest();
            xhttp.open("POST", "./Backend/nexo.php", true);
            xhttp.setRequestHeader("enctype", "multipart/form-data");
            let form : FormData = new FormData();
            form.append('foto', foto.files[0]);
            form.append('op', "subirFoto");
            xhttp.send(form);
            
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var retJSON = JSON.parse(xhttp.responseText);
                  
                    if(retJSON.Ok==true)
                    {   
                       
                        let unEmpleado: Clases.Empleado= new Clases.Empleado(apellido, nombre, edad,dni,puesto, ingreso,retJSON.Path,email,clave);
                        Main.GuardarEnLS(JSON.stringify(unEmpleado.ToJson()));
                    }
                }
            };
            



        }     
        
        public static Ingresar(){
            //chequear el LS si existe el mail y clave, si esta manda al listado
            let email:string=(<HTMLInputElement>document.getElementById("email")).value;
            let clave:string=(<HTMLInputElement>document.getElementById("clave")).value;
            var json:any[]= new Array();
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
            
        }
    
    
    
    
    }
}