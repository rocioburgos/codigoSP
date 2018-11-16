function EnviarAjax(){
    let numero : number =parseInt((<HTMLInputElement> document.getElementById("txtNumero")).value);

        let xhttp : XMLHttpRequest = new XMLHttpRequest();
        
        xhttp.open("GET", "back.php?numero="+numero, true);

        xhttp.send();

        xhttp.onreadystatechange = () => {
           
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                (<HTMLDivElement> document.getElementById("countPar")).innerHTML="<input type='text' value='"+xhttp.responseText+"' readonly>";
               alert(xhttp.responseText);
            }
        };
}
