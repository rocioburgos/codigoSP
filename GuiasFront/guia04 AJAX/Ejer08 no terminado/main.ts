/*window.onload= function(){
    var uno =(<HTMLInputElement> document.getElementById('botonStop')).innerHTML;
    if(uno=="Go"){
        var intervalo= setInterval("Publicar()",5000);  
    }else if(uno== "Stop"){
        clearInterval(intervalo);
    }          
}*/


    var intervalo= setInterval("Publicar()",5000); 

 

function Accion(){
  
    /*var uno =(<HTMLInputElement> document.getElementById('botonStop'));
   
    if (uno.innerHTML == 'Stop') 
    {   
        clearInterval(intervalo);
        uno.innerHTML = 'Go'; 
        
    }
    else{  
        intervalo= setInterval("Publicar()",5000);  
        uno.innerHTML = 'Stop';  
    }*/

    clearInterval(intervalo);
}

function Publicar(){
   
    let xmlhttp : XMLHttpRequest = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let noticia : string = xmlhttp.responseText;
            let hora= new Date();
            (<HTMLDivElement> document.getElementById("noticias")).innerHTML += noticia +"<br>"+hora.getHours();
        }
    }
    
        xmlhttp.open("POST", "obtenerNoticia.php", true);
        xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xmlhttp.send();
}