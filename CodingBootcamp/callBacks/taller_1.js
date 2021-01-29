function nombre() {
    let nombreU = prompt('Ingrese su nombre:; ');
    console.log('Bienvenido ' + nombreU);
    }
function saludar(fn) { 
    fn();
    }
    saludar(nombre);