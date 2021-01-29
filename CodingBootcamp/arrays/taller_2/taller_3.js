let valores = [3, 1, 89, 45];
let mayor = valores.reduce(function(a, b) {
    return Math.max(a, b);
});

console.log(valores);
console.log(mayor);
console.log(valores.indexOf(mayor));