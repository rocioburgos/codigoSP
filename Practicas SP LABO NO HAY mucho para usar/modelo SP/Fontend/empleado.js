/// <reference path="./persona.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(apellido, nombre, edad, dni, puesto, ingreso, foto, email, clave) {
            var _this = _super.call(this, nombre, apellido, dni, edad) || this;
            _this._puesto = puesto;
            _this._fechaIngreso = ingreso;
            _this._foto = foto;
            _this._email = email;
            _this._clave = clave;
            return _this;
        }
        Empleado.prototype.ToJson = function () {
            var nombre = this.getNombre();
            var apellido = this.getApellido();
            var edad = this.getEdad();
            var dni = this.getDni();
            var json = { "nombre": nombre, "apellido": apellido, "email": this._email, "dni": dni, "edad": edad, "puesto": this._puesto, "fechaIngreso": this._fechaIngreso, "clave": this._clave };
            return (json);
        };
        return Empleado;
    }(Clases.Persona));
    Clases.Empleado = Empleado;
})(Clases || (Clases = {}));
