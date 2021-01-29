let string = 'javascriptloops';
let vocales = [];
let consonantes = [];

for (let i = 0; i < string.length; i++) {
    if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
        vocales.push(string[i]);
    } else {
        consonantes.push(string[i]);
    }
}
console.log(vocales);
console.log(consonantes);