function Calcular(){
    var numeroUno:string= (<HTMLInputElement>document.getElementById("numeroUno")).value;
    var numeroDos:string= (<HTMLInputElement>document.getElementById("numeroDos")).value;
    var operador:string= (<HTMLSelectElement>document.getElementById("operador")).value;
    
    let xhttp= new XMLHttpRequest();
    xhttp.open("GET","./back.php?operador="+operador+"&n1="+numeroUno+"&n2="+numeroDos, true);
    xhttp.send();
    xhttp.onreadystatechange=()=>{
 
        if (xhttp.readyState ===4 && xhttp.status === 200) {
         
            if(xhttp.responseText.length!=0 && xhttp.responseText!=null)
            {
                (<HTMLDivElement>document.getElementById("resultado")).innerHTML =xhttp.responseText;
            }else{
                    
                alert("Hubo un error");
            }
        }
    }
}