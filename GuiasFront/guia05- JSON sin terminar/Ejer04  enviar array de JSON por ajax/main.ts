function EnviarColeccion(){
    var coleccionProductos= [
        {"codigoBarra": 1234, "nombre": "gaseosa", "precio": 12},
        {"codigoBarra": 1235, "nombre": "fideo", "precio": 13},
        {"codigoBarra": 1236, "nombre": "harina", "precio": 14}
    ];

    let xhttp= new XMLHttpRequest();
    xhttp.open("POST","./mostrarColeccionJson.php",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("coleccion="+JSON.stringify(coleccionProductos));
        
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert(xhttp.responseText);
        }
    };
}