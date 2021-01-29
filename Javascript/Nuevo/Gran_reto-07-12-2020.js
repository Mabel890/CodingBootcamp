do {
    let opciones = prompt('¿Qué desea hacer?:\n 0.Salir\n 1.suma\n 2.Resta\n 3.Producto\n 4.División\n 5.Módulo\n 6.Cuadrado\n 7.Raíz\n 8.Potencia\n 9.Máximo\n 10.Mínimo\n');
    console.log(opciones);
} while (opciones != 0)


let a = Number(prompt('Ingrese un número; '));
let b = Number(prompt('Ingrese un número; '));

if ((a <= 0) && (a >=100) && (b <= 0) && (b >=100)) {
    console.log("Los valores deben estar entre 0 y 100");
} else {
    console.log("¿Qué desea hacer?");
}

function suma(a, b) {
return (a + b);
}
let resultado1 = suma(a, b);
console.log(resultado1);

function resta(a, b) {
return (a - b);
}
let resultado2 = resta(a, b);
console.log(resultado2);

function producto(a, b) {
return (a * b);
}
let resultado3 = producto(a, b);
console.log(resultado3);

function division(a, b) {
return (a / b);
}
let resultado4 = division(a, b);
console.log(resultado4);

function modulo(a, b) {
return (a % b);
}
let resultado5 = modulo(a, b);
console.log(resultado5);

function cuadrado(a) {
return (a * a);
}
let resultado6 = cuadrado(a);
console.log(resultado6);

function raizCuadrada(a) {
return Math.sqrt(a);
}
let resultado7 = raizCuadrada(a);
console.log(resultado7);

function potencia(a, b) {
return Math.pow(a, b);
}
let resultado8 = potencia(a, b);
console.log(resultado8);

function maximo(a, b) {
return Math.max(a, b);
}
let resultado9 = maximo(a, b);
console.log(resultado9);

function minimo(a, b) {
return Math.min(a, b);
}
let resultado10 = minimo(a, b);
console.log(resultado10);


/*
for ((a && b) = 0; (a && b) <= 100; (a && b)++) {
    if ((a || b) == 0) {
        break;
    }
}
*/
/*
for (0 < (a || b|| c || x || y) && (a || b|| c || x || y) <= 100) {
    

}

*/
/*
    if ((a, b, c, x, y) < 0 && 100 < (a, b, c, x, y)){
        console.log("Los valores deben estar entre 0 y 100");
   } else {
       console.log("¿Qué desea hacer?");
   }
*/
/*
 
*/