var Clases;
(function (Clases) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, dni, edad) {
            this._apellido = apellido;
            this._dni = dni;
            this._edad = edad;
            this._nombre = nombre;
        }
        Persona.prototype.getNombre = function () {
            return this._nombre;
        };
        Persona.prototype.getEdad = function () {
            return this._edad;
        };
        Persona.prototype.getDni = function () {
            return this._dni;
        };
        Persona.prototype.getApellido = function () {
            return this._apellido;
        };
        return Persona;
    }());
    Clases.Persona = Persona;
})(Clases || (Clases = {}));
