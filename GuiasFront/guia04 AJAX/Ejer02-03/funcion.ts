function Funcion(){
    var path:string= (<HTMLInputElement>document.getElementById("archivoPath")).value;
    let palabra :string =((<HTMLInputElement> document.getElementById("txtPalabra")).value);
    let xhttp= new XMLHttpRequest();
        xhttp.open("GET","./back.php?path="+path+"&palabra="+palabra, true);
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

        xhttp.onreadystatechange = () => {
       
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                (<HTMLDivElement> document.getElementById("resultado")).innerHTML="";
                let response=xhttp.responseText;
                if(response.length==0 || response==null){
                      alert("hubo un error");
                }else
                { 
                   (<HTMLDivElement> document.getElementById("resultado")).innerHTML=response;
                }
             
            
        };
    }
}