/* Aplicación Nº 7 (Leer un archivo .json)
Realizar una aplicación web que, a través de Ajax, lea el archivo auto.json desde la página
traerAuto.php y muestre el JSON recibido por alert() y en el console.log() */
//LEO EL ARCHIVO Y LO RETORNO (ES UN ARRAY DE JSON)

    let xhttp : XMLHttpRequest = new XMLHttpRequest();

        xhttp.open("GET", "back.php", true);
        xhttp.send();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //recupero, parseo muestro 
                alert(xhttp.responseText);
                let objJson:any= JSON.parse(xhttp.responseText);
               
                alert(objJson.Marca+ " "+ objJson.Id + " "+ objJson.Precio);
                console.log(objJson.Marca+ " "+ objJson.Id + " "+ objJson.Precio);

                
            }
        };