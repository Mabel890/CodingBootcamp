class Precio {
    constructor(valor) {
        this.valor = valor;
    }

    getValor() {
        return `Valor: ${this.valor}`;
    }

    setValor(value) {
        this.valor = value;
    }
}

class Factura extends Precio {
    constructor(emisor, cliente, valor) {
        super(valor);
        this.emisor = emisor;
        this.cliente = cliente
    }

    getEmisor() {
        return `Emisor: ${this.emisor}`;
    }

    setEmisor(value) {
        this.emisor = value;
    }

    getCliente() {
        return `Cliente: ${this.cliente}`;
    }

    setCliente(value) {
        this.cliente = value;
    }

    imprimirFactura() {
        return `Emisor: ${this.emisor}  \nCliente: ${this.cliente}  \nValor: ${this.valor}`;
    }
}
let objFactura = new Factura(prompt('Nombre del emisor: '), prompt('Nombre del cliente: '), prompt('Valor del la factura: '));
console.log(objFactura.imprimirFactura());