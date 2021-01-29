'use strict'
let numero = Number(prompt('Ingrese un número: '));

function esPositivo(numero) {
    if (numero > 0) {
        console.log('YES');
    } else if (numero < 0) {
        console.error('Negative Error');
    } else {
        console.error('Zero Error');
    }
}
esPositivo(numero);