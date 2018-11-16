
function MostrarRemeras(){
        let xhttp : XMLHttpRequest = new XMLHttpRequest();

        xhttp.open("GET", "administrarRemeras.php?caso=Mostrar", true);
        xhttp.send();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                
         
                let remeras= JSON.parse(xhttp.responseText);

                var div= (<HTMLSelectElement>document.getElementById("divRemeras"));
                var tabla =`<table border='1'><tr><td>ID</td>
                <td>Slogan</td>
                <td>Size</td>
                <td>Price</td>
                <td>Color</td>
                <td>Name fabrica</td>
                <td>Logo fabrica</td>
                <td>Pais fabrica</td>
                <td>Ciudad Fabrica</td></tr>`;
              
                    for(let i=0; i< remeras.length; i++){
                        
                        let rem= remeras[i];
                        let fabrica= remeras[i].manofacturer;
                        let ubica= fabrica.location;
                       tabla+="<tr><td>"+rem.id +"</td><td>"+rem.slogan+"</td><td>"+rem.size+"</td><td>"+rem.price+"</td><td>"+rem.color+"</td><td>"+fabrica.name+"</td><td><img src='"+fabrica.logo+"' width: 150px;></td><td>"+ubica.country+ "</td><td>"+ubica.city+"</td><td><input type='button' value='Eliminar' onclick='EliminarRemera("+rem.id+")'</td><td><input type='button' value='Modificar' onclick='Modificar("+rem.id+")'></td></tr>";
                      
                    }

                    div.innerHTML+=tabla+"</table>";
            }
        };
}
function EliminarRemera(id:number){

    if(confirm("Seguro de eliminar la remera "+id)){
        let xhttp : XMLHttpRequest = new XMLHttpRequest();
        xhttp.open("GET", "administrarRemeras.php?caso=quitarRemera&id="+id, true);
        xhttp.send();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
     
           alert("Eliminada con exito");
            }
        };
    }
}


function Modificar(id: number){
    alert(id);
}

function FiltrarRemeras(){
    
    let info : string = (<HTMLInputElement> document.getElementById("txtFiltro")).value;
    let campo: string= (<HTMLSelectElement>document.getElementById("filtrado")).value;

    console.log( info + " "+ campo);
    let xhttp : XMLHttpRequest = new XMLHttpRequest();
    xhttp.open("GET", "administrarRemeras.php?caso=traerRemerasFiltradasPorCampo&info="+info+"&campo="+campo, true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
     
            let remeras= JSON.parse(xhttp.responseText);

            var div= (<HTMLSelectElement>document.getElementById("divFiltradas"));
            var tabla =`<table border='1'><tr><td>ID</td>
            <td>Slogan</td>
            <td>Size</td>
            <td>Price</td>
            <td>Color</td>
            <td>Name fabrica</td>
            <td>Logo fabrica</td>
            <td>Pais fabrica</td>
            <td>Ciudad Fabrica</td></tr>`;
          
                for(let i=0; i< remeras.length; i++){
                    
                    let rem= remeras[i];
                    let fabrica= remeras[i].manofacturer;
                    let ubica= fabrica.location;
                   tabla+="<tr><td>"+rem.id +"</td><td>"+rem.slogan+"</td><td>"+rem.size+"</td><td>"+rem.price+"</td><td>"+rem.color+"</td><td>"+fabrica.name+"</td><td><img src='"+fabrica.logo+"' width: 150px;></td><td>"+ubica.country+ "</td><td>"+ubica.city+"</td><td><input type='button' value='Eliminar' onclick='EliminarRemera("+rem.id+")'</td></tr>";
                }

                div.innerHTML=tabla+"</table>";
        }
    };
   
   
    /*del 15 let xhttp : XMLHttpRequest = new XMLHttpRequest();
    let pais : string = (<HTMLInputElement> document.getElementById("txtPais")).value;
    xhttp.open("GET", "administrarRemeras.php?caso=traerRemerasFiltradas&pais="+pais, true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
     
            let remeras= JSON.parse(xhttp.responseText);

            var div= (<HTMLSelectElement>document.getElementById("divFiltradas"));
            var tabla =`<table border='1'><tr><td>ID</td>
            <td>Slogan</td>
            <td>Size</td>
            <td>Price</td>
            <td>Color</td>
            <td>Name fabrica</td>
            <td>Logo fabrica</td>
            <td>Pais fabrica</td>
            <td>Ciudad Fabrica</td></tr>`;
          
                for(let i=0; i< remeras.length; i++){
                    
                    let rem= remeras[i];
                    let fabrica= remeras[i].manofacturer;
                    let ubica= fabrica.location;
                   tabla+="<tr><td>"+rem.id +"</td><td>"+rem.slogan+"</td><td>"+rem.size+"</td><td>"+rem.price+"</td><td>"+rem.color+"</td><td>"+fabrica.name+"</td><td><img src='"+fabrica.logo+"' width: 150px;></td><td>"+ubica.country+ "</td><td>"+fabrica.city+"</td></tr>";
                }

                div.innerHTML+=tabla+"</table>";
        }
    };*/
}

function AgregarRemera(){
    
    /*1. levantar todos los campos
      2.crear el JSON
      3. Enviarlo
      4. En el BKND agregarlo al archivo. 
     */
    let id : number = parseInt((<HTMLInputElement> document.getElementById("id")).value);
    let slogan : string = (<HTMLInputElement> document.getElementById("slogan")).value;
    let size: string= (<HTMLInputElement>document.getElementById("size")).value;
    let price : string = (<HTMLInputElement> document.getElementById("price")).value;
    let color: string= (<HTMLInputElement>document.getElementById("color")).value;
    let nameFabrica: string= (<HTMLInputElement>document.getElementById("nameFabrica")).value;
   //let logo: string='https://robohash.org/authicperferendis.bmp?size=50x50&set=set1';
   let logo:string= "holalalala"; 
   let pais: string= (<HTMLInputElement>document.getElementById("paisFabrica")).value;
    let ciudad: string= (<HTMLInputElement>document.getElementById("ciudadFabrica")).value;

//{"id":200,"slogan":"innovate 24/365 e-commerce","size":"2XL","price":"¥53.76","color":"Maroon","manofacturer":{"name":"Buzzshare","logo":"https://robohash.org/sedcupiditatenon.bmp?size=50x50&set=set1","location":{"country":"Brazil","city":"Campina Grande"}}}]
    let json= {"id":id, "slogan": slogan , "size": size, "price": price , "color": color, "manofacturer" : {"name" : nameFabrica , "logo": logo , "location" : {"country": pais, "city": ciudad}}};
   
    let xhttp : XMLHttpRequest = new XMLHttpRequest();
    xhttp.open("GET", "administrarRemeras.php?caso=agregarRemera&info="+JSON.stringify(json), true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("ok");
    };
   
}}

