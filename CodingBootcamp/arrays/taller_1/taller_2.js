let n = 5;
let suma = 0;

function sumaArray(n) {
   let arr = [1, 2, 3, 4, 5];
   for ( let i = 0; i <= n - 1; i++) {
       suma += arr[i];
   }
   console.log(suma);   
}
sumaArray(n);