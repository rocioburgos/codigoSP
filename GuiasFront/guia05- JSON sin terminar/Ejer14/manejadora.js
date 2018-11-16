function MostrarRemeras() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "administrarRemeras.php?caso=Mostrar", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var remeras = JSON.parse(xhttp.responseText);
            var div = document.getElementById("divRemeras");
            var tabla = "<table border='1'><tr><td>ID</td>\n                <td>Slogan</td>\n                <td>Size</td>\n                <td>Price</td>\n                <td>Color</td>\n                <td>Name fabrica</td>\n                <td>Logo fabrica</td>\n                <td>Pais fabrica</td>\n                <td>Ciudad Fabrica</td></tr>";
            for (var i = 0; i < remeras.length; i++) {
                var rem = remeras[i];
                var fabrica = remeras[i].manofacturer;
                var ubica = fabrica.location;
                tabla += "<tr><td>" + rem.id + "</td><td>" + rem.slogan + "</td><td>" + rem.size + "</td><td>" + rem.price + "</td><td>" + rem.color + "</td><td>" + fabrica.name + "</td><td><img src='" + fabrica.logo + "' width: 150px;></td><td>" + ubica.country + "</td><td>" + ubica.city + "</td><td><input type='button' value='Eliminar' onclick='EliminarRemera(" + rem.id + ")'</td><td><input type='button' value='Modificar' onclick='Modificar(" + rem.id + ")'></td></tr>";
            }
            div.innerHTML += tabla + "</table>";
        }
    };
}
function EliminarRemera(id) {
    if (confirm("Seguro de eliminar la remera " + id)) {
        var xhttp_1 = new XMLHttpRequest();
        xhttp_1.open("GET", "administrarRemeras.php?caso=quitarRemera&id=" + id, true);
        xhttp_1.send();
        xhttp_1.onreadystatechange = function () {
            if (xhttp_1.readyState == 4 && xhttp_1.status == 200) {
                alert("Eliminada con exito");
            }
        };
    }
}
function Modificar(id) {
    alert(id);
}
function FiltrarRemeras() {
    var info = document.getElementById("txtFiltro").value;
    var campo = document.getElementById("filtrado").value;
    console.log(info + " " + campo);
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "administrarRemeras.php?caso=traerRemerasFiltradasPorCampo&info=" + info + "&campo=" + campo, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var remeras = JSON.parse(xhttp.responseText);
            var div = document.getElementById("divFiltradas");
            var tabla = "<table border='1'><tr><td>ID</td>\n            <td>Slogan</td>\n            <td>Size</td>\n            <td>Price</td>\n            <td>Color</td>\n            <td>Name fabrica</td>\n            <td>Logo fabrica</td>\n            <td>Pais fabrica</td>\n            <td>Ciudad Fabrica</td></tr>";
            for (var i = 0; i < remeras.length; i++) {
                var rem = remeras[i];
                var fabrica = remeras[i].manofacturer;
                var ubica = fabrica.location;
                tabla += "<tr><td>" + rem.id + "</td><td>" + rem.slogan + "</td><td>" + rem.size + "</td><td>" + rem.price + "</td><td>" + rem.color + "</td><td>" + fabrica.name + "</td><td><img src='" + fabrica.logo + "' width: 150px;></td><td>" + ubica.country + "</td><td>" + ubica.city + "</td><td><input type='button' value='Eliminar' onclick='EliminarRemera(" + rem.id + ")'</td></tr>";
            }
            div.innerHTML = tabla + "</table>";
        }
    };
    /*del 15 let xhttp : XMLHttpRequest = new XMLHttpRequest();
    let pais : string = (<HTMLInputElement> document.getElementById("txtPais")).value;
    xhttp.open("GET", "administrarRemeras.php?caso=traerRemerasFiltradas&pais="+pais, true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
     
            let remeras= JSON.parse(xhttp.responseText);

            var div= (<HTMLSelectElement>document.getElementById("divFiltradas"));
            var tabla =`<table border='1'><tr><td>ID</td>
            <td>Slogan</td>
            <td>Size</td>
            <td>Price</td>
            <td>Color</td>
            <td>Name fabrica</td>
            <td>Logo fabrica</td>
            <td>Pais fabrica</td>
            <td>Ciudad Fabrica</td></tr>`;
          
                for(let i=0; i< remeras.length; i++){
                    
                    let rem= remeras[i];
                    let fabrica= remeras[i].manofacturer;
                    let ubica= fabrica.location;
                   tabla+="<tr><td>"+rem.id +"</td><td>"+rem.slogan+"</td><td>"+rem.size+"</td><td>"+rem.price+"</td><td>"+rem.color+"</td><td>"+fabrica.name+"</td><td><img src='"+fabrica.logo+"' width: 150px;></td><td>"+ubica.country+ "</td><td>"+fabrica.city+"</td></tr>";
                }

                div.innerHTML+=tabla+"</table>";
        }
    };*/
}
function AgregarRemera() {
    /*1. levantar todos los campos
      2.crear el JSON
      3. Enviarlo
      4. En el BKND agregarlo al archivo.
     */
    var id = parseInt(document.getElementById("id").value);
    var slogan = document.getElementById("slogan").value;
    var size = document.getElementById("size").value;
    var price = document.getElementById("price").value;
    var color = document.getElementById("color").value;
    var nameFabrica = document.getElementById("nameFabrica").value;
    //let logo: string='https://robohash.org/authicperferendis.bmp?size=50x50&set=set1';
    var logo = "holalalala";
    var pais = document.getElementById("paisFabrica").value;
    var ciudad = document.getElementById("ciudadFabrica").value;
    //{"id":200,"slogan":"innovate 24/365 e-commerce","size":"2XL","price":"¥53.76","color":"Maroon","manofacturer":{"name":"Buzzshare","logo":"https://robohash.org/sedcupiditatenon.bmp?size=50x50&set=set1","location":{"country":"Brazil","city":"Campina Grande"}}}]
    var json = { "id": id, "slogan": slogan, "size": size, "price": price, "color": color, "manofacturer": { "name": nameFabrica, "logo": logo, "location": { "country": pais, "city": ciudad } } };
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "administrarRemeras.php?caso=agregarRemera&info=" + JSON.stringify(json), true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("ok");
        }
        ;
    };
}
