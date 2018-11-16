function Suggestion(cadena:string):void{

    
    if (cadena.length == 0) { 
        (<HTMLDivElement> document.getElementById("divNombresSugeridos")).innerHTML = "";
        return;
    }
    
    let xmlhttp : XMLHttpRequest = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let sugerencias : string = xmlhttp.responseText;
           // sugerencias = sugerencias === "" ? "Sin Sugerencias..." : sugerencias;
            
            if(sugerencias===""){
                sugerencias="Sin Sugerencias...";
            }
            (<HTMLDivElement> document.getElementById("divNombresSugeridos")).innerHTML = sugerencias;
        }
    }
    
    xmlhttp.open("POST", "obtenerSugerencia.php", true);
    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.send("palabra="+cadena);

}