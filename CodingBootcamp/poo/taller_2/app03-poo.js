class Videojuego {
    constructor(titulo, horasDeJuego, genero, compañia) {
        this.titulo = titulo,
        this.horasDeJuego = horasDeJuego,
        this.genero = genero,
        this.compañia = compañia,
        this.estado = 'D'
    }

    mostrarInformacion() {
        return `Titulo: ${this.titulo}, horas de juego: ${this.horasDeJuego}, género: ${this.genero}, compañia: ${this.compañia}`
    }

    prestarVideojuego() {
        if (this.estado == 'D') {
            this.estado = 'P'
            return `El videojuego ha sido agregado al carrito`;
        } else {
            return `El videojuego no está disponible`;
        }
    }
}
let juego = new Videojuego(prompt('Ingrese el videojuego deseado: '), prompt('Ingrese su las horas de juego: '), prompt('Ingrese el género: '), prompt('Ingrese la compañia del videojuego: '))
console.log(juego.mostrarInformacion());
console.log(juego.prestarVideojuego())
