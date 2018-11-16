function Funcion() {
    var path = document.getElementById("archivoPath").value;
    var palabra = (document.getElementById("txtPalabra").value);
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./back.php?path=" + path + "&palabra=" + palabra, true);
    xhttp.send();
    /* xhttp.onreadystatechange=()=>{

         if (xhttp.readyState ===4 && xhttp.status === 200) {
             alert(xhttp.responseText);
             if(xhttp.responseText.length!=0 && xhttp.responseText!=null)
             {
                //(<HTMLInputElement>document.getElementById("cantidad")).innerHTML+=xhttp.responseText;
              (<HTMLDivElement>document.getElementById("resultado")).innerHTML =xhttp.responseText;
             }else {

                 alert("Hubo un error");
             }
         }
     }*/
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("resultado").innerHTML = "";
            var response = xhttp.responseText;
            if (response.length == 0 || response == null) {
                alert("hubo un error");
            }
            else {
                document.getElementById("resultado").innerHTML = response;
            }
        }
        ;
    };
}
