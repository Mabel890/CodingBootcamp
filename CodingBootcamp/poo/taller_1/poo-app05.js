class Clientes {
    constructor(nombre, apellido, telefono, correoElectronico, totalCompras) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.telefono = telefono,
        this.correoElectronico = correoElectronico,
        this.totalCompras = totalCompras
    }

    sumaComprasClientes() {
        let sumaComprasC = 0, n = prompt('¿Cuántos productos desea ingresar? ');
        for (let i = 0; i <= n; i++) {
            sumaComprasC += totalCompras[i];
        }
        console.log(sumaComprasC);
    }

    sumaCompras(totalCompras) {
        let sumaComprasT = 0;
        for (let i = 0; i <= 3; i++) {
            sumaComprasT += totalCompras[i];
        }
        console.log(sumaComprasT);
    }
};

sumaComprasClientes();
sumaCompras();

let cliente1 = new Clientes('John', 'Doe', 3216840418, 'johdoe@gmail.com', );
let cliente2 = new Clientes('Dave', 'Smith', 3023241536, 'davesmith@gmail.com', );
let cliente3 = new Clientes('Allen', 'Bullock', 3168523017, 'allenb@gmail.com', );

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
