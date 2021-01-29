let a = Number(prompt('Ingrese un número: '));
let b = Number(prompt('Ingrese un número: '));
let potenciaF = a;

function potencia(a, b) {
    for (let i = 1; i < b; i++) {
        potenciaF *= a ;
    }
}
potencia(a,b);
console.log(potenciaF);