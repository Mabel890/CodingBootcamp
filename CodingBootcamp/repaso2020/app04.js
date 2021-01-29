'use strict'

let n = (Number(prompt('¿Cuántos elementos desea generar?: ')));
let arr = [];

function matriz(arr) {
    for (let i = 0; i < n; i++) {
        let newArr = [];
    
        for (let j = 0; j < n; j++) {
            newArr[j] = Math.floor
            (Math.random() * 51);
        }
        arr.push(newArr);
    }
    console.log(arr);
}
matriz(arr);

let diagonal = [], suma = 0;
function diagonalM(diagonal) {
    for (let i = 0; i < n; i++) {    
        for (let j = 0; j < n; j++) {
            if (i == j) {
                diagonal.push(arr[i][j]);
            }
        }
    }
    console.log(diagonal);
}
diagonalM(diagonal);

function sumaDiagonal(diagonal) {
    for (let i = 0; i < diagonal.length; i++) {
        suma += diagonal[i];
    }
    return suma;
}
sumaDiagonal(diagonal);
console.log(suma);

