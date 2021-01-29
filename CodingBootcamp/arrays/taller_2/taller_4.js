let valores = [3, 1, 89, 45];
let minimo = valores.reduce(function(a, b) {
    return Math.min(a, b);
});

console.log(valores);
console.log(minimo);
console.log(valores.indexOf(minimo));