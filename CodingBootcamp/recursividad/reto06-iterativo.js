'use strict'

function fibonacci(n) {
    let a = 0, b = 1, c = 0, d = 1;
    console.log(a, b);
    for (let i = 3; i <= n; i++) {
        c = a + b;
        console.log(c);
        d = d + c;
        a = b;
        b = c;
    }
}
fibonacci(6);