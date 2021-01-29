class Persona {
    constructor(nombre, apellido, genero, edad, peso) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.genero = genero,
        this.edad = edad,
        this.peso = peso
    }
}
let objeto = new Persona('Luis', 'Arango', 'Masculino', '78', '75 Kg');
console.log(objeto);