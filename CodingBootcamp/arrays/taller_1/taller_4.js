let arr = [5, 8, 3, 1, 10, 11, 0, 2];

function maxValue(arr) {
    let mayor = arr[0];
    let posicion = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
            posicion = i;
        }
    }
    console.log(mayor);
    console.log(posicion);
}
maxValue(arr);