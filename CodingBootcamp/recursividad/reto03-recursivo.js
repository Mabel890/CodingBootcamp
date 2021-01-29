'use strict'

function sumaTodo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumaTodo(n - 1);
    }
}
console.log(sumaTodo(6));
