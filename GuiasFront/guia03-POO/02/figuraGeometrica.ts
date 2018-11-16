namespace Main{
    export abstract class FiguraGeometrica
    {
        protected _color;
        protected _perimetro;
        protected _superficie;
        
        public constructor(color:string) {
            this._color=color;
        }
        //Metodos getters y setters para _color
        public get Color(){
            return this._color;
        }
        
        //Metodo virtual(todos son virtuales) para ToString
        public  ToString(){}
        //Inicializa los valores de superficie y perimetro, llamados en el constructor derivado
       protected abstract    CalcularDatos();
       protected abstract   Dibujar();
    }

   export class Rectangulo extends FiguraGeometrica
    {
    private _ladoUno;
    private _ladoDos;
     public constructor(l1:number, l2:number,color:string) {
        super(color);
       
        this._ladoUno=l1;
        this._ladoDos=l2;  
        this.CalcularDatos();
    }
    protected  CalcularDatos(){
        super._perimetro=(this._ladoUno*2)+(this._ladoDos*2);
        this._superficie=this._ladoUno*this._ladoDos;
    }
    public  ToString()
    {
       //  echo "<div>". $this->Dibujar() . "</div>";
        
    }

    public  Dibujar(){
        
 /*   echo"<font color='".$this->getColor()."' >";
   echo "color: ". $this->getColor()."<br>";*/
    
    for(let i=0; i<this._ladoUno; i++)//horizontal
    {
       
      // echo "*"; 
       for(let j=1;j<this._ladoDos; j++)//vertical
        {
         //   echo "*";                
        }

         //   echo "<br>";
    }
  //  echo "</font>";
   
   
    }
}
}