function Verificar(){
    var nombre:string= (<HTMLInputElement>document.getElementById("nombre")).value;
    let xhttp= new XMLHttpRequest();
    xhttp.open("GET","./comprobarDisponibilidad.php?nombre="+nombre, true);
    xhttp.send();
    xhttp.onreadystatechange=()=>{
 
        if (xhttp.readyState ===4 && xhttp.status === 200) {
           
            if(xhttp.responseText== "Si")
            {
               alert("Si contiene el nombre");
            }else{
                    
                alert("No contiene el nombre");
            }
        }
    }
}