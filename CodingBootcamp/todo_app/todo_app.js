alert('Bienvenido a la lista de tareas');
let opcion = 0, numeroDeTareas = 0, id = 1, tareas = [], descripcion = '';

function crearTarea(tareas) {
    let nuevaTarea = prompt('¿Qué desea hacer?')
    tareas.push([numeroDeTareas, nuevaTarea]);
    numeroDeTareas += 1;
    console.log(numeroDeTareas, "Tareas por realizar");
}
crearTarea(tareas);

do {
    opcion = Number(prompt('¿Qué desea hacer?: '));
    if (Number.isInteger(opcion)) {
        switch (opcion) {
            case 1:
                descripcion = prompt('Ingrese la tarea');
                crearTarea(id, function(nuevaTarea) {
                    console.log(nuevaTarea);
                });
            case 2: 
            case 3:
            case 4:
                break;
        }
    }
} while (opcion != 4)
