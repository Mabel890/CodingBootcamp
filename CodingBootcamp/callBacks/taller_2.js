function numero(a, cuadrado) {
    let resultado = a * a;
    cuadrado(resultado);
}

numero(a = Number(prompt('Ingrese un número entre 1 y 100:; ')), function(result) {
    console.log('El cuadrado del número ingresado es ', result)
});