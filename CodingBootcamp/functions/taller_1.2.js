let numero = Number(prompt('Ingrese un número: '));

function numeroPar(numero) {
    if (numero % 2 == 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}
numeroPar(numero);