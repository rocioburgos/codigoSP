
 function MostrarJsons(){
   
    let xhttp : XMLHttpRequest = new XMLHttpRequest();

        xhttp.open("GET", "back.php", true);
        xhttp.send();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //recupero, parseo muestro 
                
                let objJson= JSON.parse(xhttp.responseText);
                alert(objJson.length);
                    for(let i=0; i< objJson.length; i++){
                        console.log(objJson[i].Id+" "+objJson[i].Marca);
                    }
            }
        };
}