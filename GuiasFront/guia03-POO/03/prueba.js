var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main;
(function (Main) {
    var Persona = /** @class */ (function () {
        function Persona(apellido, dni, nombre, sexo) {
            this._apellido = apellido;
            this._dni = dni;
            this._nombre = nombre;
            this._sexo = sexo;
        }
        Object.defineProperty(Persona.prototype, "Apellido", {
            get: function () {
                return this._apellido;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "DNI", {
            get: function () {
                return this._dni;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Nombre", {
            get: function () {
                return this._nombre;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Sexo", {
            get: function () {
                return this._sexo;
            },
            enumerable: true,
            configurable: true
        });
        Persona.prototype.ToString = function () {
            return this._apellido + "-" + this._nombre + "-" + this._dni + "-" + this._sexo;
        };
        return Persona;
    }());
    Main.Persona = Persona;
})(Main || (Main = {}));
/// <reference path="./persona.ts"/>
var Main;
(function (Main) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(apellido, dni, nombre, sexo, legajo, sueldo) {
            var _this = _super.call(this, apellido, dni, nombre, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        Empleado.prototype.Hablar = function (idioma) {
            return "El empleado habla " + idioma;
        };
        Empleado.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + ("-" + this._legajo + "-" + this._sueldo);
        };
        Object.defineProperty(Empleado.prototype, "Sueldo", {
            get: function () {
                return this._sueldo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Empleado.prototype, "Legajo", {
            get: function () {
                return this._legajo;
            },
            enumerable: true,
            configurable: true
        });
        return Empleado;
    }(Main.Persona));
    Main.Empleado = Empleado;
})(Main || (Main = {}));
/// <reference path="./empleado.ts"/>
var empleadoUno = new Main.Empleado("Burgos", 4095, "Rocio", "F", 1, 25000);
console.log("Apellido GET: " + empleadoUno.Apellido);
console.log("Metodo hablar:" + empleadoUno.Hablar("Español"));
console.log(empleadoUno.ToString());
