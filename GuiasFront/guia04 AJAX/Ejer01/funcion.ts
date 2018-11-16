  function funcion(){
    let numero:number= parseInt((<HTMLInputElement>document.getElementById("numero")).value);
    if(numero>0){
        let xhttp= new XMLHttpRequest();
        xhttp.open("GET","./back.php?numero="+numero);
        xhttp.send();

        	
        xhttp.onreadystatechange=()=>{

            if (xhttp.readyState ===4 && xhttp.status === 200) {
                
               //(<HTMLInputElement>document.getElementById("cantidad")).innerHTML+=xhttp.responseText;
               (<HTMLDivElement>document.getElementById("cantidad")).innerHTML ="Cantidad de impares <input type='text' value="+xhttp.responseText+">";

            }
        }
    }
}