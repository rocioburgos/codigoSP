/// <reference path="./persona.ts"/>
namespace Main{
    export class Empleado extends Main.Persona {
        private _legajo:number;
        private _sueldo:number;

        constructor(apellido:string,dni:number,nombre:string,sexo:string,legajo:number,sueldo:number){
            
            super(apellido,dni,nombre,sexo);
            this._legajo=legajo;
            this._sueldo=sueldo;
        }

        public Hablar(idioma:string):string{
            return "El empleado habla "+idioma;
        }

        public ToString():string{
            return super.ToString()+`-${this._legajo}-${this._sueldo}`;
        }

        public get Sueldo():number{
            return this._sueldo;
        }
        public get Legajo():number{
            return this._legajo;
        }
    }
}