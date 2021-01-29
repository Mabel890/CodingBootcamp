let n = Number(prompt('Ingrese un número: '));
let factorial = function (n) {
    let x = 1;
    while (n > 1) {
        x *= n; 
        n--;
    }
    return x;
}
let resultado = factorial(n);
console.log(resultado);