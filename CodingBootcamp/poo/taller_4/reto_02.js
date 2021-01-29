let n = Number(prompt('¿Cuántos profesores desea ingresar?: '));
let arr = [];

class Profesor {
    constructor(nombre, apellido, edad, casado, especialidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.casado = casado;
        this.especialidad = especialidad
    }

    getNombre() {
        return `Nombre: ${this.nombre}`;
    }

    setNombre(value) {
        this.nombre = value;
    }

    getApellido() {
        return `Apellido: ${this.apellido}`;
    }

    setApellido(value) {
        this.apellido = value;
    }

    getEdad() {
        return `Edad: ${this.edad}`;
    }

    setEdad(value) {
        this.edad = value;
    }

    getCasado() {
        return `Casado: ${this.casado}`;
    }

    setCasado(value) {
        this.casado = value;
    }

    getEspecialidad() {
        return `Especialidad: ${this.especialidad}`;
    }

    setEspecialidad(value) {
        this.especialidad = value;
    }

    mostrarInformacion() {
        return `Nombre del profesor: ${this.nombre} ${this.apellido} \nEdad: ${this.edad} \n¿Está casado?: ${this.casado} \n¿Tiene una especialidad?: ${this.especialidad}`;
    }

    añadirProfesores(arr) {
        for (let i = 0; i < n; i++) {
            let newArr = [];
            for (let j = 0; j < n; j++) {
                newArr = objProfesor;
            }
            arr.push(newArr);
        }
        console.log(arr);
    }
}
let objProfesor = new Profesor(prompt('Ingrese el nombre: '), prompt('Ingrese el apellido: '), Number(prompt('Ingrese la edad: ')), Boolean(prompt('¿Está casado?: ')), Boolean(prompt('¿Tiene una especialidad?: ')));
console.log(objProfesor.mostrarInformacion());
console.log(objProfesor.añadirProfesores());