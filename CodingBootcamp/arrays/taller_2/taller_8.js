let numeros = [1, -8, -15, 6, 23, -6]
let suma = [], promedio = [];

for (let i = 0; i <= numeros.length; i++) {
    suma += numeros[i];
    promedio = suma / numeros.length;
}
console.log(promedio);
console.log(suma);

/*
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    promedio = suma / numeros.length;

    if (numeros[i] > 0) {
        sumaP += numeros[i];
        promedioP = sumaP / numeros.length;
    } else {
        sumaN += numeros[i];
        promedioN = sumaN / numeros.length;
    };
    console.log(promedio);
    console.log(promedioP);
    console.log(promedioN);
}
*/