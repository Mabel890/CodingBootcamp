class Vehiculo {
    constructor(color, ruedas) {
        this.color = color;
        this.ruedas = ruedas
    }

    catalogar() {

    }
}

class Coche extends Vehiculo {
    constructor(color, ruedas, velocidad, cilindrada) {
        super(color, ruedas);

        this.velocidad = velocidad;
        this.cilindrada = cilindrada
    }
}

class Bicicleta extends Vehiculo {
    constructor(color, ruedas, tipo) {
        super(color, ruedas);

        this.tipo = tipo;
    }
}

class Camioneta extends Coche {
    constructor(color, ruedas, velocidad, cilindrada, carga) {
        super(color, ruedas, velocidad, cilindrada);

        this.carga = carga;
    }
}

class Motocicleta extends Bicicleta {
    constructor(color, ruedas, tipo, velocidad, cilindrada) {
        super(color, ruedas, tipo);

        this.velocidad = velocidad;
        this.cilindrada = cilindrada
    }
}