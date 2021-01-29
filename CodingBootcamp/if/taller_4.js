function resultado(a, b) {
    return (a + b < 4 ? "Válido" : "No válido");
}
console.log(resultado(a = Number(prompt('Ingrese un número: ')), b = Number(prompt('Ingrese un número: '))));