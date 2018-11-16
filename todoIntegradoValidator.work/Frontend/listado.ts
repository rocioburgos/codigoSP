 
window.onload=function(){

    localStorage.setItem("perfil","administrador");
    //si es admin , le voy a mostrar acciones.
    var acciones= false;
   if(localStorage.getItem("perfil")== "administrador"){
      acciones= true;
   }
    var local:any= localStorage.getItem("users");
    if(local!=null || local!=""){
        let arrayJson= JSON.parse(local);  
      let agregarTabla=""; /*"<th>Correo</th> <th>Nombre</th><th>Apellido</th> <th>Perfil</th> <th>Legajo</th> <th>Foto</th>";
         if(acciones){
             agregarTabla+= "<th>Acciones</th>";
         }*/
       for(let index=0; index< arrayJson.length; index++){
           let user= arrayJson[index];

           agregarTabla+="<tr><td>"+user.correo+"</td><td>"+arrayJson[index].nombre+"</td><td>"+arrayJson[index].apellido+"</td><td>"+arrayJson[index].perfil+"</td><td>"+arrayJson[index].legajo+"</td><td><img width='50px' src=./BACKEND/Fotos/"+arrayJson[index].foto+"></td>";
            if(acciones){
                agregarTabla+= "<td><button class='btn btn-danger' onclick='Eliminar("+JSON.stringify( arrayJson[index])+")'>Eliminar</button></td><td><button class='btn btn-warning'  data-toggle='modal' data-target='#myModal' onclick='SetModificar("+JSON.stringify(arrayJson[index])+")' >Modificar</button></td>";
            }

            agregarTabla+="</tr>";
        
        }

        (<HTMLTableElement>document.getElementById("tabla")).innerHTML+=agregarTabla;
    }
}


function Eliminar(eliminar:any){
   if( confirm("Seguro de eliminar a "+ eliminar.nombre +", "+ eliminar.apellido)){
        var local:any= localStorage.getItem("users");
            if(local!=null || local!=""){
                var arrayJson= JSON.parse(local);  
                for(let index=0; index< arrayJson.length; index++){
                    if(arrayJson[index].correo == eliminar.correo){
                        arrayJson.splice(index, 1);
                    }
                }
            }
        localStorage.setItem("users",JSON.stringify(arrayJson));
        window.location.href="./lista.html";
   }
}

function SetModificar(eliminar:any){
   
    (<HTMLInputElement>document.getElementById("apellido")).value= eliminar.apellido;
    (<HTMLInputElement>document.getElementById("email")).value= eliminar.correo;
 }


 function Modificar(){
    
    //cargar los datos.
    var perfil:string=(<HTMLInputElement>document.getElementById("perfil")).value;
    var foto:any=(<HTMLInputElement>document.getElementById("foto"));
    var clave:string=(<HTMLInputElement>document.getElementById("clave")).value; 
    var email:string=(<HTMLInputElement>document.getElementById("email")).value; 
    

     var local:any= localStorage.getItem("users");
     if(local!=null || local!=""){
         var arrayJson = JSON.parse(local);  
        for(let index=0; index< arrayJson.length; index++){
             if(arrayJson[index].correo == email){
                alert("coinciden");
                //ESTA VERIFICACION ES XQ NO SON OBLIGATORIOS TODOS LOS CAMPOS
                //Y ASI ME ASEGURO QUE LOS DATOS NO QUEDEN MAL CARGADOS.
                if(foto==null || foto==""){
                    foto = arrayJson[index].foto;
                }
                if(clave== null || clave==""){
                    clave= arrayJson[index].clave;
                }
                if(email==null || email==""){
                    email= arrayJson[index].correo;
                }
                if(perfil=="--"){
                    perfil= arrayJson[index].perfil;
                }

                    let nuevo= {"correo": email , "clave":clave, "nombre": arrayJson[index].nombre, "apellido":arrayJson[index].apellido, "legajo":arrayJson[index].legajo, "perfil": perfil ,"foto": arrayJson[index].foto};
                            
                   arrayJson.splice(index, 1);
                    arrayJson.push(nuevo);
                    break;
                }
        }
        
        localStorage.setItem("users", JSON.stringify(arrayJson)); 
        window.location.href="./lista.html";
     }
 }
