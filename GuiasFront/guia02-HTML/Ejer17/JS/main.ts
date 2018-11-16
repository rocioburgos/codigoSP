function Click():void {

    /*var cb="cb";
    for(let i=0;i<3;i++){

        let nombre  = (<HTMLInputElement> document.getElementById(cb+(i+1))).checked;
        if(nombre){
            let nombre  = (<HTMLInputElement> document.getElementById(cb+(i+1))).value;
            console.log(nombre);

        }
    }*/


    let combo:any = document.getElementsByName("cb");
    for(let i=0; i<combo.length;i++){
        if(combo[i].checked){
            console.log( combo[i].value);
        }
    }
}