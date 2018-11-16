namespace Figuras{
    let puntoUno= new Punto(0,0);
    let puntoDos= new Punto(0,3);
    let puntoTres= new Punto(4,0);
    let puntoCuatro= new Punto(4,3);

    let rectangulo= new Rectangulo(puntoUno,puntoTres);
    console.log(rectangulo.ToString());
}