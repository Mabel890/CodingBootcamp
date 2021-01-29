let n = Number(prompt('¿Cuántos jugadores desea ingresar?: '));

let jugadores = [];

for (let i = 0; i < n; i++) {
    let item = {};

    item.nombre = prompt('Ingrese un nombre: ');
    item.puntos = Number(prompt('Ingrese un puntaje: '));
    jugadores.push(item);
}

console.log(jugadores);