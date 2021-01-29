let n = Number(prompt('¿Cuántos números desea ingresar?; '));
let arr = [], suma = 0, promedio = 0;

for (let i = 0; i < n; i++) {
    arr[i] = Math.floor
    (Math.random() * 10);
    suma += arr[i];
    promedio = suma / n;
}
console.log(arr);
console.log(promedio);