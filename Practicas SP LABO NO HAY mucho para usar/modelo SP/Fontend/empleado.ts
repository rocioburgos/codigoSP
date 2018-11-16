/// <reference path="./persona.ts" />

namespace Clases{
     export class Empleado extends Clases.Persona{

        protected _puesto:string;
        protected _fechaIngreso:string;
        protected _foto:string;
        protected _email:string;
        protected _clave:string;

        public constructor(apellido:string, nombre:string, edad:number, dni:number, puesto:string,ingreso:string,foto:string,email:string, clave:string){
            super(nombre,apellido,dni,edad);
            this._puesto= puesto;
            this._fechaIngreso= ingreso;
            this._foto= foto;
            this._email= email;
            this._clave= clave;
        }

        public ToJson():JSON{
            let nombre= this.getNombre(); 
            let apellido= this.getApellido();
            let edad= this.getEdad();
            let dni= this.getDni();
           
            let json:any={"nombre": nombre, "apellido": apellido,"email":this._email ,"dni":  dni, "edad": edad, "puesto":this._puesto, "fechaIngreso":this._fechaIngreso, "clave":this._clave};
            return (json);
        }
    }
}