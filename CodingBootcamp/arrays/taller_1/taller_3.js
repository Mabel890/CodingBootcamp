let array = [3, 2, 6, 4, 5];

function cuadradoArray(array) {
    let cuadradoArray = [];
    for (let i = 0; i < array.length; i++) {
        cuadradoArray[i] = Math.pow(array[i], 2);
    }
    console.log(cuadradoArray);
}
console.log(array);
cuadradoArray(array);