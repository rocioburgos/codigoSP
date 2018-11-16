
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

   xhttp.open("GET", "traerAutos.php", true);
   xhttp.send();
   xhttp.onreadystatechange = () => {
       if (xhttp.readyState == 4 && xhttp.status == 200) {
           //recupero, parseo muestro 
         //  alert(xhttp.responseText);
           let objJson:any= JSON.parse(xhttp.responseText);
          
           let tabla:string= "<table border='1'> <th>ID</th><th>Marca</th><th>Precio</th><th>Color</th><th>Modelo</th>";
           
           for(let i=0 ; i<objJson.length ; i++){
               tabla+="<tr><td>"+objJson[i].Id+"</td><td>"+objJson[i].Marca+"</td><td>"+objJson[i].Precio+"</td><td>"+objJson[i].Color+"</td><td>"+objJson[i].Modelo+"</td></tr>";
           }

           tabla+= "</table>";

           (<HTMLDivElement>document.getElementById("tabla")).innerHTML= tabla;
       }
   };
}