"use strict";
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
