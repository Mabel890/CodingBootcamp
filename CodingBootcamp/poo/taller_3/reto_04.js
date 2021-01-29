class Forma {
    constructor(nombre, color, posicion) {
        this.nombre = nombre;
        this.color = color;
        this.posicion = posicion
    }

    imprimirForma() {
        return `Nombre: ${this.nombre}, color: ${this.color}, posición: ${this.posicion}`;
    }

    cambiarColor(colorNuevo) {
        this.color = colorNuevo;
    }

    moverForma() {
        this.posicion += 1;
    }
}

class Rectangulo extends Forma {
    constructor(nombre, color, posicion, largo, ancho) {
        super(nombre, color, posicion);
            this.largo = largo;
            this.ancho = ancho
    }

    imprimirForma() {
        return `Nombre: ${this.nombre}, color: ${this.color}, posición: ${this.posicion}, largo: ${this.largo}, ancho: ${this.ancho}`;
    }

    calcularArea() {
        let area = 0;
        area = this.largo * this.ancho;
        return `El área del rectángulo es ${area}`;
    }

    calcularPerimetro() {
        let perimetro = 0;
        perimetro = (this.largo * 2) + (2 * this.ancho);
        return `El perímetro del rectángulo es ${perimetro}`;
    }
}

let objForma = new Forma('Figura sólida', 'Azul', 0);
let objRectangulo = new Rectangulo('Figura plana', 'Rojo', 5, 4, 3);

console.log(objForma.imprimirForma());
console.log(objForma.cambiarColor());
console.log(objForma.moverForma());

console.log(objRectangulo.imprimirForma());
console.log(objRectangulo.calcularArea());
console.log(objRectangulo.calcularPerimetro());