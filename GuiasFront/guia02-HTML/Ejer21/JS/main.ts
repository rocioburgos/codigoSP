
function Calcular(){
    let numeroUno: number =parseInt((<HTMLInputElement> document.getElementById("numUno")).value);
    let numeroDos: number =parseInt((<HTMLInputElement> document.getElementById("numDos")).value);
    let operador:string= Chechekd();
    var resultado:number=0;
    switch (operador) {
        case "+":
        resultado= numeroDos+numeroUno;
        break;
        case "-":
        resultado= numeroUno-numeroDos;
        break;
        case "*":
        resultado= numeroUno*numeroDos;
        break;
        case "/":
            if(numeroDos==0){
                alert("No se puede dividir por cero.");
            }else{
                resultado= numeroUno/numeroDos;
            }
        break;
        default:
            alert("Debe seleccionar un operador");
        break;
    }
    (<HTMLInputElement>document.getElementById("resultado")).value=resultado.toString();    
    console.log(resultado);
} 

function Chechekd():string{
    let combo:any = document.getElementsByName("oper");
    for(let i=0; i<combo.length;i++){
        if(combo[i].checked){
            return ""+combo[i].value;
        }
    }
    return "";
}