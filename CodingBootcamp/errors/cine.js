'use strict'
alert('Bienvenido a cine 123');
let opcion = 0, n = 5, arr = [];

function sillas(arr) {
    for (let i = 0; i < n; i++) {
        let newArr = [];
    
        for (let j = 0; j <= n; j++) {
            newArr = ['L', 'L', 'L', 'L', 'L'];
        }
        arr.push(newArr);
    }
    console.log(arr);
}
sillas(arr);

do {
    opcion = Number(prompt('¿Qué desea hacer?:\n 0. Salir\n 1. Reservar entradas\n 2. Comprar entradas\n '));
    if (Number.isInteger(opcion)) {
        switch (opcion) {
            case 0:
                break;
            case 1: 
                Anim //Permite cambiar el estado de las sillas
                if ((silla == 'R') || (silla == 'C')) {
                    console.error('La silla seleccionada no se encuentra disponible');
                } else {
                    console.log(prompt('Ingrese su nombre: '));
                }
            case 2:
                jbhu //Permite cambiar el estado de las sillas
                if ((silla == 'R') || (silla == 'C')) {
                    console.error('La silla seleccionada no se encuentra disponible');
                } else {
                    console.log(prompt('Ingrese su nombre: '));
                }
            default:
                console.log('Seleccione una de las opciones disponibles');
                break;
        }
    }
} while (opcion != 0)


/*
Usted ha sido seleccionado para desarrollar una aplicación de gestion de un pequeño teatro. Nuestro cliente
requiere gestionar las sillas de un pequeño teatro que cuenta con 5 filas, cada una con 5 sillas.
Se requiere crear la siguiente funcionalidad:
Cada silla representa un objeto que tiene propiedades, nombre y estado.
Los estados de la silla son: Libre (L), Reservado (R), Comprado (C).
Cree la funcionalidad necesaria para, reservar y/o comprar la silla en el teatro.
El programa desarrollado debe contar con un menu, para las funcionalidades mencionadas.
Si el usuario selecciona una silla que tiene estado reservado y/o comprado, debe mostrar un error en
consola y permitirle seleccionar otra silla.
Por cada cambio se debe mostrar el estado de las sillas en la sala.
El usuario debe poder contar con la opcion de salir del programa.
*/