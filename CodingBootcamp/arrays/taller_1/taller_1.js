let n = Number(prompt('Ingrese un número entre 1 y 10; '));

if (n < 1) {
    console.log('Ingrese un número entre 1 y 10');
} else if (n > 10) {
    console.log('Ingrese un número entre 1 y 10');
} else {
    function sumaArray(n) {
        let arr = [], suma = 0;
        for (let i = 0; i < n; i++) {
            arr[i] = Math.floor
            (Math.random() * 10);
            suma += arr[i];
        }
        console.log(arr);
        console.log(suma);
    }
    sumaArray(n);
}
