class Pantalla {
    constructor(marca, fechaDeFabricacion, tamañoEnPulgadas, garantia) {
        this.marca = marca,
        this.fechaDeFabricacion = fechaDeFabricacion,
        this.tamañoEnPulgadas = tamañoEnPulgadas,
        this.garantia = garantia
    }
}
let televisor = new Pantalla('LG', '2018', '60 pulgadas', '1 año');
console.log(televisor);