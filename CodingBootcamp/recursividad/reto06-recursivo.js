'use strict'

function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n = Number(prompt('¿Cuántos términos desea ingresar?'));

if (n > 0) {
    for (let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }
} 

