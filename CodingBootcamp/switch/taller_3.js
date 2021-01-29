let navegador = prompt('¿Qué navegador usas?');

if (navegador == "Edge") {
    console.log('Navegador de Microsoft');
} else if (navegador == "Chrome") {
    console.log('Navegador de Google');
} else if (navegador == "Firefox") {
    console.log('Navegador de Mozilla');
} else if (navegador == "Safari") {
    console.log('Navegador de Apple');
} else {
    console.log('Tal vez su navegador no está soportado');
}