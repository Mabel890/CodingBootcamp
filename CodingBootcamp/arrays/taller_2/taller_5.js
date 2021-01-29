let n = Number(prompt('¿Cuántos números desea ingresar?; '));
let arr = [];
let orden = [arr.sort()];

for (let i = 0; i < n; i++) {
    arr[i] = Math.floor
    (Math.random() * 10);
}
console.log(arr);

if (arr == orden){
    console.log('Está ordenado');
} else {
    console.log('No está ordenado');
}