class Productos {
    constructor(fechaDeCaducidad, numeroDeLote) {
        this.fechaDeCaducidad = fechaDeCaducidad;
        this.numeroDeLote = numeroDeLote
    }

    getFechaDeCaducidad() {
        return `Fecha de caducidad del producto: ${this.fechaDeCaducidad}`;
    }

    setFechaDeCaducidad(value) {
        this.fechaDeCaducidad = value;
    }

    getNumeroDeLote() {
        return `Número de lote del producto: ${this.numeroDeLote}`;
    }

    setNumeroDeLote(value) {
        this.numeroDeLote = value;
    }

    mostrarInfo() {
        return `El producto se vence el ${this.fechaDeCaducidad}. Número de lote: ${this.numeroDeLote}`;
    }

    testProductos() {
        let objProducto = new Productos('05/12/2021', '647-452');
        console.log(objProducto.testProductos());
    }
}

class ProductoFresco extends Productos {
    constructor(fechaDeCaducidad, numeroDeLote, fechaDeEnvasado, paisDeOrigen) {
        super(fechaDeCaducidad, numeroDeLote);
        this.fechaDeEnvasado = fechaDeEnvasado;
        this.paisDeOrigen = paisDeOrigen        
    }

    getFechaDeEnvasado() {
        return `Fecha de envasado del producto: ${this.fechaDeEnvasado}`;
    }

    setFechaDeEnvasado(value) {
        this.fechaDeEnvasado = value;
    }

    getPaisDeOrigen() {
        return `País de orígen del producto: ${this.paisDeOrigen}`;
    }

    setPaisDeOrigen(value) {
        this.paisDeOrigen = value;
    }

    mostrarInfo() {
        return `El producto se vence el ${this.fechaDeCaducidad}. Número de lote: ${this.numeroDeLote}. Fue envasado el: ${this.fechaDeEnvasado} en ${this.paisDeOrigen}.`;
    }

    testProductos() {
        let objProductoFresco = new ProductosFresco('15/02/2021', '987-452', '10/01/2021', 'Colombia');
        console.log(objProductoFresco.testProductos());
    }
}

class ProductoRefrigerado extends Productos {
    constructor(fechaDeCaducidad, numeroDeLote, codigoOrganismoSupervision) {
        super(fechaDeCaducidad, numeroDeLote);
        this.codigoOrganismoSupervision = codigoOrganismoSupervision;
    }

    getCodigoOrganismoSupervisor() {
        return `Código del organismo supervisor del producto: ${this.codigoOrganismoSupervision}`;
    }

    setCodigoOrganismoSupervisor(value) {
        this.codigoOrganismoSupervision = value;
    }

    mostrarInfo() {
        return `El producto se vence el ${this.fechaDeCaducidad}. Número de lote: ${this.numeroDeLote}. Código del organismo superior: ${this.codigoOrganismoSupervision}.`;
    }

    testProductos() {
        let objProductoRefrigerado = new ProductosRefrigerado('05/12/2021', '967-052', '9874-562-021');
        console.log(objProductoRefrigerado.testProductos());
    }
}

class ProductoCongelado extends Productos {
    constructor(fechaDeCaducidad, numeroDeLote, temperaturaRecomendada) {
        super(fechaDeCaducidad, numeroDeLote);
        this.temperaturaRecomendada = temperaturaRecomendada;
    }

    getTemperaturaRecomendada() {
        return `Temperatura de congelación recomendada del producto: ${this.temperaturaRecomendada}`;
    }

    setTemperaturaRecomendada(value) {
        this.temperaturaRecomendada = value;
    }

    mostrarInfo() {
        return `El producto se vence el ${this.fechaDeCaducidad}. Número de lote: ${this.numeroDeLote}. Temperatura de congelación recomendada: ${this.temperaturaRecomendada}K.`;
    }

    testProductos() {
        let objProductoCongelado = new ProductosCongelado('17/03/2022', '857-022', '256.15');
        console.log(objProductoCongelado.testProductos());
    }
}
console.log(objProductoCongelado.mostrarInfo());
console.log(objProductoCongelado.testProductos());