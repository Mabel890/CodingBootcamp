'use strict'

function intercambio(m, n) {
    let l = 0;
    l = m;
    m = n;
    n = l;
    return `Los valores son: ${m}, ${n}`; 
}
console.log(intercambio(2,4));