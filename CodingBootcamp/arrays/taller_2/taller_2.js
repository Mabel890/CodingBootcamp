let n = Number(prompt('¿Cuántos números desea ingresar?; '));
let arrA = [], arrB = [], arrC = [], sumaA = 0, sumaB = 0;

for (let i = 0; i < n; i++) {
    arrA[i] = Math.floor
    (Math.random() * 10);
    sumaA += arrA[i];

    arrB[i] = Math.floor
    (Math.random() * 10);
    sumaB += arrB[i];

    arrC = (sumaA + sumaB);
}
console.log(arrA, sumaA);
console.log(arrB, sumaB);
console.log(arrC);

/*
let a = [2, 4, 6, 8];
let b = [1, 3, 5, 7];

let aSuma = a.reduce((previous, current) => current += previous);
let bSuma = b.reduce((previous, current) => current += previous);

let c = (aSuma + bSuma);

console.log(c);
*/