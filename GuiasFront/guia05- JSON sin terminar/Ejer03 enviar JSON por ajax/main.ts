
function EnviarAjax(){
    
    var unProducto= {"codigoBarra": 1234, "nombre": "gaseosa", "precio": 12};

    let xhttp= new XMLHttpRequest();
    xhttp.open("POST","./mostrarJson.php",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("json="+JSON.stringify(unProducto));
        
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert(xhttp.responseText);
        }
    };
}