var Figuras;
(function (Figuras) {
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(v1, v3) {
            this._verticeUno = v1;
            this._verticeTres = v3;
            /*
            $this->altura = $this->_vertice2->GetY() - $this->_vertice1->GetY();
            $this->base = $this->_vertice4->GetX() - $this->_vertice1->GetX();
           */
            this._verticeDos = new Punto(v1.GetX, v3.GetY);
            this._verticeCuatro = new Punto(v3.GetX, v1.GetY);
            this._ladoDos = this._verticeDos.GetY() - this._verticeUno.GetY();
            this._ladoUno = this._verticeCuatro.GetX() - this._verticeTres.GetX();
            this._area = this.GetArea();
            this._perimetro = this.GetPerimetro();
        }
        Rectangulo.prototype.GetArea = function () {
            this._area = this._ladoUno * this._ladoDos;
            return this._area;
        };
        Rectangulo.prototype.GetPerimetro = function () {
            this._perimetro = (this._ladoUno * 2) + (this._ladoDos * 2);
            return this._perimetro;
        };
        Rectangulo.prototype.ToString = function () {
            return "Area " + this._area + "\nPerimetro: " + this._perimetro + "\nLADO DOS: " + this._ladoDos + " ";
        };
        return Rectangulo;
    }());
    Figuras.Rectangulo = Rectangulo;
})(Figuras || (Figuras = {}));
