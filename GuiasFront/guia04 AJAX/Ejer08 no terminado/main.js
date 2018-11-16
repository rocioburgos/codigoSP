/*window.onload= function(){
    var uno =(<HTMLInputElement> document.getElementById('botonStop')).innerHTML;
    if(uno=="Go"){
        var intervalo= setInterval("Publicar()",5000);
    }else if(uno== "Stop"){
        clearInterval(intervalo);
    }
}*/
var intervalo = setInterval("Publicar()", 5000);
function Accion() {
    var uno = document.getElementById('botonStop');
    if (uno.innerHTML == 'Stop') {
        clearInterval(intervalo);
        uno.innerHTML = 'Go';
    }
    else {
        intervalo = setInterval("Publicar()", 5000);
        uno.innerHTML = 'Stop';
    }
    // clearInterval(intervalo);
}
function Publicar() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var noticia = xmlhttp.responseText;
            var hora = new Date();
            document.getElementById("noticias").innerHTML += noticia + "<br>" + hora.getHours();
        }
    };
    xmlhttp.open("POST", "obtenerNoticia.php", true);
    xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}
