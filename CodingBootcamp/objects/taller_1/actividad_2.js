let jugador = {
    nombre: prompt('Ingrese un nombre: '),
    puntos: Number(prompt('Ingrese un puntaje: ')),

    datosJugador: function() {
        console.log(this.nombre + '' +  this.puntos + '');
    },
    aumentarPuntos: function() {
        this.puntos += 100;
        console.log(this.puntos);
    },
    verificarSiGano: function() {
        if (this.puntos > 1000) {
            console.log('El jugador ha ganado la partida');
        }
    }
};

console.log(jugador);


/*
let n = Number(prompt('¿Cuántos jugadores desea ingresar?: '));

let jugadores = [];
let nombre = "";
let puntos = 0;
//let nuevoPuntaje = puntos;

for (let i = 0; i < n; i++) {
    let item = {};

    item.nombre = prompt('Ingrese un nombre: ');
    item.puntos = Number(prompt('Ingrese un puntaje: '));
    jugadores.push(item);

    nombre = jugadores[i].nombre;
    puntos = jugadores[i].puntos;
    console.log(`Nombre del jugador: ${nombre}, Puntaje del jugador: ${puntos}`);

    function aumentarPuntos() {
        //nuevoPuntaje = item.puntos + 100;
        ///item.puntos += 100;
    }
    //console.log(nuevoPuntaje);
    ///console.log(aumentarPuntos);

    
}

console.log(jugadores);
*/
