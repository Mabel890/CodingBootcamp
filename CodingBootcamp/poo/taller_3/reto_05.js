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

class Elipse extends Forma {
    constructor(nombre, color, posicion, radioMayor, radioMenor) {
        super(nombre, color, posicion);
            this.radioMayor = radioMayor;
            this.radioMenor = radioMenor
    }

    imprimirForma() {
        return `Nombre: ${this.nombre}, color: ${this.color}, posición: ${this.posicion}, radio mayor: ${this.radioMayor}, radio menor: ${this.radioMenor}`;
    }

    calcularArea() {
        let area = 0;
        area = this.radioMayor * this.radioMenor * 3.14;
        return `El área de la elipse es ${area}`;
    }
}

let objForma = new Forma('Figura sólida', 'Azul', 0);
let objElipse = new Elipse('Figura plana', 'Rojo', 2, 3, 5);

console.log(objForma.imprimirForma());
console.log(objForma.cambiarColor());
console.log(objForma.moverForma());

console.log(objElipse.imprimirForma());
console.log(objElipse.calcularArea());