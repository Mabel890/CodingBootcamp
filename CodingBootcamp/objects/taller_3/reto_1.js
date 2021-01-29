let n = Number(prompt('¿Cuántos productos desea ingresar?: '));

let productos = [];

for (let i = 0; i < n; i++) {
    let item = {};

    item.codigo = prompt('Ingrese un código: ');
    item.nombre = prompt('Ingrese un nombre: ');
    item.precio = Number(prompt('Ingrese un precio: '));
    productos.push(item);
}

console.log(productos);


