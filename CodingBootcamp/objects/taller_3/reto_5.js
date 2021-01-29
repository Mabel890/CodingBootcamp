let string = 'JavaScript is super fun!';
let inverso = [];

for (let i = string.length - 1; i >= 0; i--) {
    inverso.push(string[i]);
}
let mensaje = inverso.join('');
console.log(mensaje);