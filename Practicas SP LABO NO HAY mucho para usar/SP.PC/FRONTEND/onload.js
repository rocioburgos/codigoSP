/*Cuando se termine de cargar la página (onload), crear un array de 5 objetos JSON
(correo, clave, nombre, apellido, legajo, perfil y foto).
Guardarlo en el LocalStorage y mostrar los elementos por consola.
Si ya existe el array en el LocalStorage, no sobre escribirlo. Informar por consola su previa existencia. */
window.onload = function () {
    var local = localStorage.getItem("users");
    if (local != null && local != "") {
        console.log("Ya esta cargado el LS previamente");
    }
    else {
        var arrayJson = [{ "correo": "juan@as.com", "clave": "juan", "nombre": "Juan", "apellido": "Perez", "legajo": 1, "perfil": "Juan", "foto": "juan.jpg" },
            { "correo": "laura@as.com", "clave": "laura", "nombre": "Laura", "apellido": "Perez", "legajo": 2, "perfil": "Laura", "foto": "laura.png" },
            { "correo": "silvia@as.com", "clave": "silvia", "nombre": "Silvia", "apellido": "Perez", "legajo": 3, "perfil": "Silvia", "foto": "silvia.png" },
            { "correo": "lucas@as.com", "clave": "lucas", "nombre": "Lucas", "apellido": "Perez", "legajo": 4, "perfil": "Lucas", "foto": "lucas.jpg" },
            { "correo": "maria@as.com", "clave": "maria", "nombre": "Maria", "apellido": "Perez", "legajo": 5, "perfil": "Maria", "foto": "maria.jpg" }];
        localStorage.setItem("users", JSON.stringify(arrayJson));
        for (var index = 0; index < arrayJson.length; index++) {
            var element = arrayJson[index];
            console.log(element.correo + " " + element.nombre + " " + element.apellido + " " + element.legajo + " " + element.perfil + " " + element.foto);
        }
    }
};
