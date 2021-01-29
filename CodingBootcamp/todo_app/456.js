alert('Bienvenido a la lista de tareas');
let opcion = 0;
let id = 1, index = 0, descripcion = '';
let tareas = [];

function crearTarea(id, index, descripcion) {
    let tarea = {
        index,
        id,
        descripcion,
    };
    tareas.push(tarea);
}

do {
    opcion = Number(prompt('¿Qué desea hacer?: \n1.Crear una tarea \n2.Editar una tarea \n3.Borrar una tarea \n4.Salir'));
    if (Number.isInteger(opcion)) {
        switch (opcion) {
            case 1:
                descripcion = prompt('Ingrese la tarea');
                for (let i = 0; i < 1; i++) {
                    tareas = crearTarea(descripcion);
                }
                console.log(tareas.crearTarea());
            // case 2: 
            //     if ((id != n)) {
            //         return `Ingrese un ID válido`
            //     } else {
            //         editar = Number((prompt('Ingrese el ID de la tarea que desea ingresar: ')));
            //     }
            // case 3:
            //     if ((id != n)) {
            //         return `Ingrese un ID válido`
            //     } else {
            //         let borrar = Number((prompt('Ingrese el ID de la tarea que desea borrar: ')));
            //         delete tarea[borrar];
            //     }
            case 4:
                break;
        }
    }
} while (opcion != 4)

/*
alert('Bienvenido a la lista de tareas');
let opcion = 0;
let id = 1, n = 0;
let tareas = [];

function crearTarea() {
    let tarea = {
        index,
        id,
        descripcion,
    };
    tareas.push(tarea);
}

do {
    opcion = Number(prompt('¿Qué desea hacer?: \n1.Crear una tarea \n2.Editar una tarea \n3.Borrar una tarea \n4.Salir'));
    if (Number.isInteger(opcion)) {
        switch (opcion) {
            case 1: 
                let tarea = (prompt('Ingrese la tarea: '));
                console.log(tarea);
                //tarea.push();
            // case 2: 
            //     if ((id != n)) {
            //         return `Ingrese un ID válido`
            //     } else {
            //         editar = Number((prompt('Ingrese el ID de la tarea que desea ingresar: ')));
            //     }
            // case 3:
            //     if ((id != n)) {
            //         return `Ingrese un ID válido`
            //     } else {
            //         let borrar = Number((prompt('Ingrese el ID de la tarea que desea borrar: ')));
            //         delete tarea[borrar];
            //     }
            case 4:
                break;
        }
    }
} while (opcion != 4)
*/