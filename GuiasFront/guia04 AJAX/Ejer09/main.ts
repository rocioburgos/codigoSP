function CargarPaises(){
    let xmlhttp : XMLHttpRequest = new XMLHttpRequest();
   
   
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let provincia : string = xmlhttp.responseText;
            console.log(provincia);
            (<HTMLSelectElement> document.getElementById("listaPais")).innerHTML+=provincia;
        }
    }
     let provinciaSelec= (<HTMLSelectElement>document.getElementById("listaPais")).value; 
 
        xmlhttp.open("POST", "back.php", true);
        xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xmlhttp.send("provincia="+provinciaSelec);
}

function cargarCiudades(seleccionada:string){
    let xmlhttp : XMLHttpRequest = new XMLHttpRequest();
 
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let ciudades : string = xmlhttp.responseText;
            console.log(ciudades);
            (<HTMLSelectElement> document.getElementById("listaCiudad")).innerHTML=ciudades;
        }
    }
    
        xmlhttp.open("POST", "ciudades.php", true);
        xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xmlhttp.send("provincia="+seleccionada);
}