/*7. Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función .
Nota : Utilizar console.log()*/

function PrimerosPrimos(){
    var cant=0;
    var cantDivisores=0;
    do{
        cantDivisores=0;
        for(let i=2;cant<20;i++)//supuesto num primo
		{ 
            cantDivisores=0;
            for(let j=i; j>1; j--)//para saber la cant de divisores
			{
                if(i%j==0)
                {
                    cantDivisores++;
                }
            }

            if(cantDivisores==1 && i%1==0){//Las condiciones para que sea primo.
                console.log(i); 
                cant++;
            }
         
		}
    }while(cant==20);
} 
PrimerosPrimos();