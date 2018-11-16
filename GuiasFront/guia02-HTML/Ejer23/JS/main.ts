function CalcularSueldo(){
    //6.88*hsWork
    let horas: number =parseInt((<HTMLInputElement> document.getElementById("txtHoras")).value);


    let valorHoras:number= ObtenerCoeficiente();
    (<HTMLInputElement>document.getElementById("txtSueldo")).value=(horas*valorHoras).toString();    
}


function ObtenerCoeficiente():number{
    return 6.88;
}