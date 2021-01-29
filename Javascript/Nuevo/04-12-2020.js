/*
let numero = Number(prompt('Ingrese un número; '));
let cuadrado = function (numero) {
    return numero * numero;
}
let resultado = cuadrado(numero);
console.log(resultado);
*/

/*
let largo = Number(prompt('Ingrese el largo; '));
let ancho = Number(prompt('Ingrese el ancho; '));

let area = function (largo, ancho) {
    return largo * ancho;
}
let resultadoArea = area(largo, ancho);
console.log(resultadoArea);

let perimetro = function (largo, ancho) {
    return 2 * (largo + ancho);
}
let resultadoPerimetro = perimetro(largo, ancho);
console.log(resultadoPerimetro);
*/

/*
let n = Number(prompt('Ingrese un número; '));
let factorial = function (n) {
    let x = 1;
    while (n > 1) {
        x *= n; 
        n--;
    }
    return x;
}
let resultado = factorial(n);
console.log(resultado);
*/


// Defina una constante PI y asignele el valor de la función Math.PI, solicite un radio al usuario.
//Cree una función que calcule el área de un círculo, 0<=radio<=100
/*
const PI = Math.PI;
let radio = Number(prompt('Ingrese un radio; '));

let areaCirculo = function (PI, radio) {
    if (0 <= radio && radio <= 100) {
        return PI * radio * 2;
    } else {
        console.log('Ingrese un valor entre 0 y 100');
    }
}
let resultado = areaCirculo(PI, radio);
console.log(resultado);
*/

/*
let string = 'javascriptloops';
let vocales = [];
let consonantes = [];

for (let i = 0; i < string.length; i++) {
    if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
        vocales.push(string[i]);
    } else {
        consonantes.push(string[i]);
    }
}
console.log(vocales);
console.log(consonantes);
*/