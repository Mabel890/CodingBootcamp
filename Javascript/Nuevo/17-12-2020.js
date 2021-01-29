// Reto 1
/*
let reunion = {
    titulo: 'Sesion Bootcamp JS',
    fecha: '17-Dic-2020',
    lugar: 'meetup',
    participantes: [
    'Andres',
    'Carlos',
    'Rafa',
    'Mabel',
    'Yuli'
    ]
};

function serializar(reunion) {
    return  JSON.stringify(reunion)
}

let reunionString = serializar(reunion);

console.log(reunion);
console.log(typeof reunion);
console.log(reunionString);
console.log(typeof reunionString);
*/
//Reto 2
/*
let character = `
{
 "height": "172",
 "mass": "77",
 "hair_color": "blond",
 "skin_color": "fair",
 "eye_color": "blue",
 "birth_year": "19BBY",
 "gender": "male",
 "created": "2014-12-09T13:50:51.644000Z",
 "edited": "2014-12-20T21:17:56.891000Z"
 }
 `;

function desSerializar(character) {
    return  JSON.parse(character)
}

let characterObjeto = desSerializar(character);

console.log(character);
console.log(typeof character);
console.log(characterObjeto);
console.log(typeof characterObjeto);
*/
//Reto 3.1
/*

*/
//Reto 3.2
/*
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

function serializar(productos) {
    return  JSON.stringify(productos)
}

let productosString = serializar(productos);

function serializar(suma) {
    return  JSON.stringify(suma)
}

let sumaString = serializar(suma);

console.log(productos);
console.log(typeof productos);
console.log(productosString);
console.log(typeof productosString);
console.log(suma);
console.log(typeof suma);
console.log(sumaString);
console.log(typeof sumaString);
*/
//Reto 3.3
/*
let n = Number(prompt('¿Cuántos empleados desea ingresar?: '));

let registro = [];

let nombre = "";
let suma = 0;
let salario = suma;

for (let i = 0; i < n; i++) {
    let informacion = {};

    informacion.dni = prompt('Ingrese un DNI: ');
    informacion.nombre = prompt('Ingrese un nombre: ');
    informacion.apellido = prompt('Ingrese un apellido: ');
    informacion.zona = prompt('Ingrese una zona: ');
    informacion.sueldoBase = Number(prompt('Ingrese un sueldoBase: '));
    informacion.comision = Number(prompt('Ingrese una comisión: '));
    informacion.salario = informacion.sueldoBase + informacion.comision;
    registro.push(informacion);

    //suma = informacion.sueldoBase + informacion.comision;

    nombre = registro[i].nombre;
    salario = registro[i].salario;
    console.log(`Nombre del empleado: ${nombre}, Salario del empleado: ${suma}`);
}

console.log(registro);
*/
let n = Number(prompt('¿Cuántos productos desea ingresar?: '));

let productos = [];
let codigo = [];
let nombre = [];
let precio = [];

for (let i = 0; i < n; i++) {
    let item = {};

    item.codigo = prompt('Ingrese un código: ');
    item.nombre = prompt('Ingrese un nombre: ');
    item.precio = Number(prompt('Ingrese un precio: '));
    productos.push(item);
}

for (item in productos) {
    
}
function serializar(item) {
    return  JSON.stringify(item)
}

let itemString = serializar(item);

function serializar(codigo) {
    return  JSON.stringify(codigo)
}

let codigoString = serializar(codigo);

function serializar(nombre) {
    return  JSON.stringify(nombre)
}

let nombreString = serializar(nombre);

function serializar(precio) {
    return  JSON.stringify(precio)
}

let precioString = serializar(precio);

console.log(productos);
console.log(typeof productos);
console.log(itemString);
console.log(typeof itemString);
console.log(codigoString);
console.log(typeof codigoString);
console.log(nombreString);
console.log(typeof nombreString);
console.log(precioString);
console.log(typeof precioString);