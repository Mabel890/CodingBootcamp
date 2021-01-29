let n = Number(prompt('¿Cuántos productos desea ingresar?: '));

let productos = [];
let productosString = [];

for (let i = 0; i < n; i++) {
    let item = {};

    item.codigo = prompt('Ingrese un código: ');
    item.nombre = prompt('Ingrese un nombre: ');
    item.precio = Number(prompt('Ingrese un precio: '));
    productos.push(item);
}

function serializar(lista) {
    for (let obj of lista) {
        productosString.push(JSON.stringify(obj));
    }
}

serializar(productos);
console.log(productosString);


/*
let lista = [];
let listaTxt = [];

let num = Number(prompt('Cuantos productos? '));

for (let i = 0; i < num; i++) {
    let producto = {};
    producto.codigo = prompt('Codigo del producto? ');
    producto.nombre = prompt('Nombre del producto? ');
    producto.precio = Number(prompt('Precio del producto? '));
    lista.push(producto);
}

console.log(lista);

// funcion que convierta cada objeto de la lista
// en su representacion de string
// JSON.stringify(obj)

// funcion que convierta cada objeto de la lista
// en su representacion de string
// JSON.stringify(obj)

function serializarLista(listaObj) {
    for (let obj of listaObj) {
        listaTxt.push(JSON.stringify(obj));
    }
}

serializarLista(lista);
console.log(listaTxt);
*/