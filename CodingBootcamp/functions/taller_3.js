let numero1 = Number(prompt('Ingrese un número: '));
let numero2 = Number(prompt('Ingrese un número: '));

function multiplicacion(numero1, numero2) {
    if (numero1 = ' ') {
        numero1 = 0 ;
    } else if (numero2 = ' '){
        numero2 = 0;
    } else {
        multiplicacion(numero1 * numero2)
    }
}
console.log(numero1 * numero2)