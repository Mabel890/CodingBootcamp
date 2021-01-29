class Persona {
    constructor(nombre, edad, documento) {
        this.nombre = nombre;
        this.edad = edad;
        this.documento = documento
    }
    mostrarDatos() {
        return `Nombre: ${this.nombre}, edad: ${this.edad}, documento: ${this.documento}`;
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return true;
        } else {
            return false;
        }
    }
}
let objeto = new Persona(prompt('Ingrese su nombre: '), Number(prompt('Ingrese su edad: ')), prompt('Ingrese su número de identificación: '));
console.log(objeto.mostrarDatos());
console.log(objeto.esMayorDeEdad());