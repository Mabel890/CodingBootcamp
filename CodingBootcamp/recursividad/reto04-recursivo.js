'use string'

function valorAbsoluto(n) {
    if (n > 0) {
        return n;
    } else {
        return valorAbsoluto(-(n));
    }
}

console.log(valorAbsoluto(-4));