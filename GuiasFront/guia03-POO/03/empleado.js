"use strict";
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
