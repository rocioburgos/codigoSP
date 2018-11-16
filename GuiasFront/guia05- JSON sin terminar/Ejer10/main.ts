
function  ArmarTabla(){
    /* 
        1-por ajax solicitar los datos al nexo.php
            1.1-En el php , leer el archivo .json, sin convertir a nada, xq es un   
                array de objetos json.
            1.2-Leerlo y mandarlo encodeado a main.ts
        2-convertir a objeto, y armar la tabla
        3- cuando este terminada asignarla al div de html
    */

   let xhttp : XMLHttpRequest = new XMLHttpRequest();

   xhttp.open("GET", "administrarCiudades.php?caso=traerCiudades", true);
   xhttp.send();
   xhttp.onreadystatechange = () => {
       if (xhttp.readyState == 4 && xhttp.status == 200) {
           //recupero, parseo muestro 
           alert(xhttp.responseText);
           let objJson:any= JSON.parse(xhttp.responseText);
          
           let tabla:string="";//= "<table border='1'> <th>ID</th><th>Nombre</th><th>Pais</th><th>Lon</th><th>Lat</th>";
           
           for(let i=0 ; i<objJson.length ; i++){
               
               tabla+="<tr><td>"+objJson[i]._id+"</td><td>"+objJson[i].name+"</td><td>"+objJson[i].country+"</td><td>"+objJson[i].coord.lon+"</td><td>"+objJson[i].coord.lat+"</td><td><a href='administrarCiudades.php?caso=quitarCiudad&codigo="+objJson[i]._id+"'>Eliminar</a></td></tr>";
           }

           //tabla+= objJson;

          // tabla+= "</table>";

           (<HTMLTableElement>document.getElementById("tabla")).innerHTML+= tabla;
       }
   };
}

function AgregarAtabla(){
    let id= (<HTMLInputElement>document.getElementById("id")).value;
    let name= (<HTMLInputElement>document.getElementById("name")).value;
    let country= (<HTMLInputElement>document.getElementById("country")).value;
    let lon= (<HTMLInputElement>document.getElementById("lon")).value;
    let lat= (<HTMLInputElement>document.getElementById("lat")).value;

    let xhttp : XMLHttpRequest = new XMLHttpRequest();

    xhttp.open("GET", "administrarCiudades.php?caso=agregarCiudad&id="+id+"&name="+name+"&country="+country+"&lon="+lon+"&lat="+lat, true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
      
            alert("Elemento agregado");
        }
    };

    /*Otra opcion es armar en front el json, en el back seria
    abrir archivo(modo a), escribir lo recibido por get $_GET['json'].'\r\n' .
     var json = {"_id":ID,"name":name,"country":country,"coord":{"lon":lon,"lat":lat}};

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    
    //alert(JSON.stringify(json));
    xhttp.open("GET" , "./administrarCiudades.php?json=" + JSON.stringify(json));
    xhttp.send();*/
}