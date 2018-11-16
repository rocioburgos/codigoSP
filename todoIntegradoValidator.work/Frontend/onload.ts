/*Cuando se termine de cargar la página (onload), crear un array de 5 objetos JSON
(correo, clave, nombre, apellido, legajo, perfil y foto).
Guardarlo en el LocalStorage y mostrar los elementos por consola.
Si ya existe el array en el LocalStorage, no sobre escribirlo. Informar por consola su previa existencia. */
window.onload=function(){
    var local= localStorage.getItem("users");

    if(local!=null && local!= ""){
        console.log("Ya esta cargado el LS previamente");
        }else{
            var arrayJson: any[]= [{"correo":"juan@as.com" , "clave":"juanjuan", "nombre":"Juan", "apellido":"Perez", "legajo":1, "perfil":"Juan" ,"foto":"juan.jpg"},
                            {"correo":"laura@as.com" , "clave":"lauralaura", "nombre":"Laura", "apellido":"Perez", "legajo":2, "perfil":"Laura" ,"foto":"laura.jpg"},
                            {"correo":"silvia@as.com" , "clave":"silviasilvia", "nombre":"Silvia", "apellido":"Perez", "legajo":3, "perfil":"Silvia" ,"foto":"silvia.jpg"},
                            {"correo":"lucas@as.com" , "clave":"lucaslucas", "nombre":"Lucas", "apellido":"Perez", "legajo":4, "perfil":"Lucas" ,"foto":"lucas.jpg"},
                            {"correo":"maria@as.com" , "clave":"mariamaria", "nombre":"Maria", "apellido":"Perez", "legajo":5, "perfil":"Maria" ,"foto":"maria.png"}];
    
        localStorage.setItem("users",JSON.stringify(arrayJson));

        for (let index = 0; index < arrayJson.length; index++) {
            const element = arrayJson[index];

            console.log(element.correo+" "+element.nombre+ " "+ element.apellido+" "+element.legajo+" "+element.perfil+" "+element.foto);   
        }
    }
}