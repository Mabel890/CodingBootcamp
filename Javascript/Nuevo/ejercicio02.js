// Dado un array de n elementos diseñe una función que me retorne la suma de cada elemento 
//n=5
//Contar con un arreglo
//suma +=numero
// for ()

const n = 5;

function SumaArray(n) {
   let arr = [], suma = 0;
   for ( let i = 0; i <= n; i++) {
    arr[i] = Math.floor
    (Math.random() * 10);
    suma += arr[i];
   }
   console.log(arr);
   console.log(suma);
}

SumaArray(n);