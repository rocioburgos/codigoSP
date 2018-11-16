function EnviarAjax():void{
    let path :string =((<HTMLInputElement> document.getElementById("txtPath")).value);

    let palabra :string =((<HTMLInputElement> document.getElementById("txtPalabra")).value);

    let xhttp : XMLHttpRequest = new XMLHttpRequest();
    
    xhttp.open("GET", "back.php?path="+path+"&palabra="+palabra, true);

    xhttp.send();

    xhttp.onreadystatechange = () => {
       
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            (<HTMLDivElement> document.getElementById("contenedor")).innerHTML="";
            let response=xhttp.responseText;
            if(response.length==0 || response==null){
                  alert("hubo un error");
            }else
            { 
               (<HTMLDivElement> document.getElementById("contenedor")).innerHTML=response;
            }
         
        
    };
}}