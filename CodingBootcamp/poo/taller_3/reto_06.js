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

class Cuadrado extends Forma {
    constructor(nombre, color, posicion, lado) {
        super(nombre, color, posicion);
            this.lado = lado
    }

    imprimirForma() {
        return `Nombre: ${this.nombre}, color: ${this.color}, posición: ${this.posicion}, lado: ${this.lado}`;
    }

    calcularArea() {
        let area = 0;
        area = this.lado * this.lado;
        return `El área del cuadrado es ${area}`;
    }

    calcularPerimetro() {
        let perimetro = 0;
        perimetro = 4 * this.lado;
        return `El perímetro del cuadrado es ${perimetro}`;
    }
}

let objForma = new Forma('Figura sólida', 'Azul', 0);
let objCuadrado = new Cuadrado('Figura plana', 'Rojo', 5, 6);

console.log(objForma.imprimirForma());
console.log(objForma.cambiarColor());
console.log(objForma.moverForma());

console.log(objCuadrado.imprimirForma());
console.log(objCuadrado.calcularArea());
console.log(objCuadrado.calcularPerimetro());