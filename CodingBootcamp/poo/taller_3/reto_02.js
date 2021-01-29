class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
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

    mostrarInformacion() {
        return `Nombre: ${this.nombre}, apellido: ${this.apellido}, edad: ${this.edad}`;
    }
}
class Profesor extends Persona {
    constructor(nombre, apellido, edad, especialidad, institucion, salario) {
        super(nombre, apellido, edad);
    
        this.especialidad = especialidad,
        this.institucion = institucion,
        this.salario = salario
    }

    getEspecialidad() {
        return `Especialidad: ${this.especialidad}`;
    }

    setEspecialidad(value) {
        this.especialidad = value;
    }

    getInstitucion() {
        return `Institución: ${this.institucion}`;
    }

    setInstitucion(value) {
        this.institucion = value;
    }

    getSalario() {
        return `Salario: ${this.salario}`;
    }

    setSalario(value) {
        this.salario = value;
    }

    mostrarInformacion() {
        return `Nombre del profesor: ${this.nombre} ${this.apellido}, edad: ${this.edad}, especialidad: ${this.especialidad}, institución: ${this.institucion}, salario: ${this.salario}`;
    }
}

class Alumno extends Persona {
    constructor(nombre, apellido, edad, curso) {
        super(nombre, apellido, edad);
    
        this.curso = curso;
    }

    getCurso() {
        return `Curso: ${this.curso}`;
    }

    setCurso(value) {
        this.curso = value;
    }

    mostrarInformacion() {
        return `Nombre del alumno: ${this.nombre} ${this.apellido}, edad: ${this.edad}, curso: ${this.curso}`;
    }
}
let objPersona = new Persona(prompt('Ingrese su nombre: '), prompt('Ingrese su apellido: '), Number(prompt('Ingrese su edad: ')));
let objProfesor = new Profesor(prompt('Ingrese el nombre del profesor: '), prompt('Ingrese su apellido: '), Number(prompt('Ingrese su edad: ')), prompt('Ingrese su especialidad: '), prompt('Ingrese la institución: '), prompt('Ingrese su salario: '));
let objAlumno = new Alumno(prompt('Ingrese el nombre del alumno: '), prompt('Ingrese su apellido: '), Number(prompt('Ingrese su edad: ')), prompt('Ingrese su curso: '));

console.log(objPersona.mostrarInformacion());
console.log(objProfesor.mostrarInformacion());
console.log(objAlumno.mostrarInformacion());