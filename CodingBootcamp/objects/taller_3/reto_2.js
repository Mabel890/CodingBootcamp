let n = Number(prompt('¿Cuántos productos desea ingresar?: '));

let productos = [];
let suma = 0;
let nombre = "";
let precio = 0;

for (let i = 0; i < n; i++) {
    let item = {};

    item.codigo = prompt('Ingrese un código: ');
    item.nombre = prompt('Ingrese un nombre: ');
    item.precio = Number(prompt('Ingrese un precio: '));
    productos.push(item);

    suma += item.precio;

    nombre = productos[i].nombre;
    precio = productos[i].precio;
    console.log(`Nombre del producto: ${nombre}, precio: ${precio}`);
}

console.log(suma);