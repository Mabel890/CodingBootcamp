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