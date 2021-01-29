/*
let vehiculo = {
    marca: 'AUDI',
    modelo: 2020,
    color: 'rojo',
    peso: '200kg',
    numeroPuertas: 4,
    esNuevo: true
};

console.log(vehiculo);

// agregar propiedad valor
vehiculo.valor = 3000;
console.log(vehiculo);

// remover propiedad
delete vehiculo.esNuevo;
console.log(vehiculo);
*/
/*
RETO 1
Crear un objeto pantalla, 
que contenga las propiedades: marca, fecha de fabricación, tamaño en pulgadas, garantía, 
utilizando la notación literal y con un constructor. 
Imprima el objeto en consola, 
e imprima cada una de sus propiedades utilizando la notación de corchetes 
y la notación de punto.
*/
/*
RETO 2
Crear un objeto persona, 
que tenga las propiedades, nombre, apellido, genero, edad, peso. 
Utilizando la notación literal y con un constructor. 
Imprima el objeto en consola, 
e imprima cada una de sus propiedades utilizando la notacion de corchetes
y la notación de punto.
*/
/*
let persona = {
    nombre: 'Camilo',
    apellido: 'Varón',
    genero: 'Masculino',
    edad: 21,
    peso: '70 Kg',
};

console.log(persona);
console.log(persona["nombre"]);
console.log(persona["apellido"]);
console.log(persona["genero"]);
console.log(persona["edad"]);
console.log(persona["peso"]);
*/
/* 
function persona(nombre, apellido, genero, edad, peso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.edad = edad;
    this.peso = peso;
}

let usuario = new persona('Camilo', 'Varón', 'Masculino', 21, '70 Kg');

console.log(persona.nombre);
*/ 
/* Reto 3
let persona = {
    nombre: 'Camilo',
    apellido: 'Varón',
    genero: 'Masculino',
    edad: 21,
    peso: '70 Kg'
};
persona.redesSociales = {
    instagram: '@jcamilov',
    twitter: '@jcamilo99',
    facebook: 'Juan C Varón'
};

console.log(persona);
*/
/* Reto 4
function esVacio(objeto) {

    let contador = 0;
    for (elemento in objeto) {

        contador++;
    }

    if (contador > 0) {
        return false;

    } else {
        return true;
    }

}
let persona = {
    nombre: "carlos"


}
console.log(esVacio(persona));
*/
/*
function esVacio(objeto) {
    for (let valor in objeto) {
        if (valor) {
            return false;
        }
    }
    return true;
}

let persona = {};

console.log(esVacio(persona));
*/
/* RETO 5

Dado el siguiente objeto:

let salarios = {
	john: 260,
	ana: 150,
	pete: 300
};

function suma(a, b, c) {
    suma += salarios[salario];
}
console.log(suma);

Escriba un programa que realice la suma de los diferentes salarios.
*/
/* Reto 6
let cuadrado = {
    ancho: 200,
    largo: 300,
};

for (let propiedades in cuadrado) {
    cuadrado[propiedades] *= 2;
}
 console.log(cuadrado);
 */