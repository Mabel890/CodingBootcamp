let nombre = 'John';

function mostrarMensaje() {
    let nombre = 'Jerry';
    console.log('Bienvenido ' + nombre);
}

mostrarMensaje(nombre); //Imprime Bienvenido Jerry, ya que la variable nombre adquiere
                       //el valor de Jerry dentro de la función mostrarMensaje()

console.log(nombre); //Imprime John, ya que es el valor original de la variable nombre.