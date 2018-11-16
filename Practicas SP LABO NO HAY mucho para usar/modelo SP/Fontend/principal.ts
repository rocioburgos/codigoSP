window.onload= function():void {

    let local= localStorage.getItem("empleados");
    if(local!= null && local!= ""){
        let arrayJson = JSON.parse(local);
        let tabla= (<HTMLTableElement>document.getElementById("tabla"));
        let agregar= "<th>Nombre</th><th>Apellido</th> <th>DNI</th><th>Edad</th><th>Foto</th><th colspan='2'>Acciones</th><th>Email</th>";
        for(let i=0 ; i< arrayJson.length; i++){
            agregar+= "<tr><td>"+arrayJson[i].nombre+"</td><td>"+arrayJson[i].apellido+"</td><td>"+arrayJson[i].dni+"</td><td>"+arrayJson[i].edad+"</td><td><img src='./Backend/"+arrayJson[i].foto+"' width=50px><td><button onclick='Eliminar("+JSON.stringify(arrayJson[i])+")' class='btn btn-danger'>Eliminar</button></td><td><button data-toggle='modal' data-target='#myModal' class='btn btn-warning'>Modificar</button></td><td>"+arrayJson[i].email+"</td></tr>";
        }

        tabla.innerHTML= agregar;
    } 

}

function Eliminar(eliminar:any){
    var json:any[]= new Array();
            var local= localStorage.getItem("empleados");
            if(local!=null && local!= ""){

              let json =JSON.parse(local); 
            
              for(let i=0; i<json.length;i++){
                  console.log(json[i].email);
                if(json[i].email ==eliminar.email && json[i].clave == eliminar.clave)
                {
                    
                    if(confirm("Seguro que quiere eliminar a "+eliminar.nombre)){
                        json.splice(i , 1);
                        localStorage.setItem("empleados",JSON.stringify(json));
                        window.location.href="./listado.html";
                    }
                }
              }   
            }
}
