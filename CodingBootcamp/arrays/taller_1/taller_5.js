let arr = [5, 8, 3, 1, 10, 11, 0, 2];

function valorPromedio(arr) {
    let suma = 0, promedio = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
        promedio = suma / arr.length;
    }
    console.log(promedio);
}
valorPromedio(arr);