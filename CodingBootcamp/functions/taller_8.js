const PI = Math.PI;
let radio = Number(prompt('Ingrese un radio: '));

let areaCirculo = function (PI, radio) {
    if (0 <= radio && radio <= 100) {
        return PI * radio * 2;
    } else {
        console.log('Ingrese un valor entre 0 y 100');
    }
}
let resultado = areaCirculo(PI, radio);
console.log('El área del círculo es de ' + resultado);