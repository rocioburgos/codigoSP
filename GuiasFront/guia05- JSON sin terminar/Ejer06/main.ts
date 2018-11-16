function EnviarANDrecibir(){
    let xhttp= new XMLHttpRequest();
    xhttp.open("POST","./recibirColeccion.php",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send();
        
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
             
             alert(xhttp.responseText); //con comillas [{"codigoBarra":1234,"nombre":"harina","precio":12},{"codigoBarra":1235,"nombre":"fideo","precio":12},{"codigoBarra":1236,"nombre":"arrox","precio":12}]
          

            //Lo convierto y es un array.
            var response= JSON.parse(xhttp.responseText);
            
            for (let index = 0; index < response.length; index++) {
                var element = response[index];
                 (<HTMLDivElement>document.getElementById("contenedor")).innerHTML+=  element.codigoBarra+" "+ element.nombre + " "+ element.precio+"<br>";
            }
           
        }
    };
}