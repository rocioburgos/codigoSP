function Validar(){
    let nombre:string=((<HTMLInputElement> document.getElementById("txtNombre")).value);
    let apellido:string=((<HTMLInputElement> document.getElementById("txtApellido")).value);
    let dni: number = parseInt((<HTMLInputElement> document.getElementById("txtDni")).value);
    let sexo:string=((<HTMLInputElement> document.getElementById("txtSexo")).value);

    var todoOk=true;

    if(ValidarCampoVacio(nombre)==false){
        MarcarError("spanN",true);
        todoOk=false;
    }else{
        MarcarError("spanN",false);
    }

    if(ValidarCampoVacio(apellido)==false){
        MarcarError("spanA",true);
        todoOk=false;
    }else{
        MarcarError("spanA",false);
    }

    if(isNaN(dni) || dni<0){
        MarcarError("spanD",true);
        todoOk=false;
    }else{
        MarcarError("spanD",false);
    }

    if(sexo!= "F" && sexo!="M"){
        MarcarError("spanS",true);
        todoOk=false;
    }else{
        MarcarError("spanS",false);
    }

    if(todoOk){
        alert("Bienvenido "+nombre);
    }else{
        alert("Revise los datos ingresados");
    }

   /* if(ValidarCampoVacio(nombre) && ValidarCampoVacio(apellido) && dni>0 && (sexo=="F"|| sexo=="M") )
    {
       alert("Bienvenido "+nombre);
    }else{
        alert("Revise los datos ");
    }*/
}

function ValidarCampoVacio(campo:string):boolean{
    var caracter:number=campo.length;
    if(caracter>0){
        return true;
    }
    return false;
}


function MarcarError(id:string,condicion:boolean):void{
    if(condicion)
   { ((<HTMLSpanElement> document.getElementById(id))).style.display="block";}
   else{
    ((<HTMLSpanElement> document.getElementById(id))).style.display="none";
   }
    
}
