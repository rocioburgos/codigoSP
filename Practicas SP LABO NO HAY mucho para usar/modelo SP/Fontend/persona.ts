namespace Clases{
    export class Persona{
        protected _nombre:string;
        protected _apellido:string;
        protected _dni:number;
        protected _edad:number;

        public constructor(nombre:string,apellido:string,dni:number, edad:number){
            this._apellido= apellido;
            this._dni= dni;
            this._edad=edad;
            this._nombre= nombre;
        }

        

        public getNombre(){
            return this._nombre;
        }
        public getEdad(){
            return this._edad;
        }
        public getDni(){
            return this._dni;
        }
        public getApellido():string{
            return this._apellido;
        }
    }
}