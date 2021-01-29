'use strict'
let numero = Number(prompt('Ingrese un número: '));

function esPositivo(numero) {
    if (numero > 0) {
        console.log('YES');
    } else if (numero < 0) {
        throw new RangeError('Negative Error');
    } else {
        throw new RangeError('Zero Error');
    }
}
esPositivo(numero);