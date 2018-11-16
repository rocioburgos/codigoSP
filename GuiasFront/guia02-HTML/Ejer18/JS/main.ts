function Click():void{
    var voto:any= (document.getElementsByName("rdoVoto"));
    //me devulve un array, con losvalores del grupo de radio buttons
    for(let i=0;i<voto.length;i++)
    {    if(voto[i].checked){
            console.log( voto[i].value);
        }
    }

}
