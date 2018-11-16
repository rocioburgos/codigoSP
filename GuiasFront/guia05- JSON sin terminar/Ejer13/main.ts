
    let ajax= new XMLHttpRequest();
    ajax.open("GET", "back.php", true);
    ajax.send();
   
    ajax.onreadystatechange = () => {
       if (ajax.readyState == 4 && ajax.status == 200) { 
         
            var response= JSON.parse(ajax.responseText);
            let select= (<HTMLSelectElement>document.getElementById("paises"));
             let agregar="";
            let existe=false;
            /**************Para evitar repetir valores al momento de cargar.*********************/
                let codigosCargados:string[]=new Array();
                let index=0;
                for(let i=0; i<select.length ; i++){
                
                    codigosCargados[index] =((<HTMLOptionElement>select[i]).value);
                    index++;
                }
            /****************************************************************/           
           
            for(let i=0 ;i < response.length;i++){ 
                for(let k=0; k < codigosCargados.length ;k++){
                    if(response[i].CodigoPais== codigosCargados[k]){
                        existe= true;
                    }
                }

                if(!existe){
                   
                    agregar+="<option value='"+response[i].CodigoPais+"'>"+response[i].Pais+"</option>";
                    codigosCargados[index]= response[i].CodigoPais;
                    index++;
                }
                existe=false;
            }
          
            select.innerHTML+= agregar;
       }
   };

function CargarPaises(){
 
    let ajax= new XMLHttpRequest();

    ajax.open("GET", "back.php", true);
    ajax.send();
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) { 
            var response= JSON.parse(ajax.responseText);
            let selectPais= ((<HTMLOptionElement>document.getElementById("paises")).value);
            let selectCity = <HTMLSelectElement>document.getElementById("city");
            let agregar="";
            for(let i=0 ;i < response.length;i++){ 
                if(response[i].CodigoPais== selectPais){
                 agregar+= "<option value='"+response[i].CodigoPais+"'>"+response[i].Ciudad+"</option>";
                }
            }
            selectCity.innerHTML=agregar;
        }
    }; 
}