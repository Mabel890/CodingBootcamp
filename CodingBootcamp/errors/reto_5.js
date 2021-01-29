'use strict'

let n = 5;
let arr = [];
function propiedades(nombre, estado) {
    this.nombre = nombre;
    this.estado = estado;
};

function sillas(arr) {
    for (let i = 0; i < n; i++) {
        let newArr = [];
    
        for (let j = 0; j < n; j++) {
            newArr[j] = estado
        }
        arr.push(newArr);
    }
    console.log(arr);
}
sillas(arr);

let silla = new propiedades(prompt('Ingrese su nombre: ', prompt('¿Qué asiento desea elegir?')));

/*
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

let diagonal = [];
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
*/