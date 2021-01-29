'use strict'
// modo estricto
// []
 let frutas = [
     'Manzana', 
     'Pera', 
     'Mango', 
     'Banano', 
     'Piña'
    ];

console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[5]);

// frutas.push('Fresa');
// frutas.push('Ciruela');

// frutas[frutas.length] = 'Naranja';
// console.log(frutas);

// console.log(frutas[3]);
// console.log(frutas[4]);
// console.log(frutas[5]);

// frutas.pop();
// frutas.pop();
// frutas.pop();
// frutas.pop();
// frutas.pop();

//

// Arreglos bi-dimensionales o Multidimensionales

let numeros = [1, 2, 3, 4];
let vehiculos = ['BMW', 'AUDI', 'RENAULT', 'MAZDA'];

let mix = [numeros, vehiculos];

console.log(mix);

console.log(mix[0]);
console.log(mix[1]);

console.log(mix[1][0]);
console.log(mix[1][2]);

console.log(vehiculos);
//console.log(typeof vehiculos);
//console.log(vehiculos.join());
let cadena = vehiculos.join();
console.log(cadena);
console.log(typeof cadena);