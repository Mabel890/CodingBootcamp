/*             Variables
Las variables se definen con:
var mivariable;      Ya no se usa
let mivariable;      Si necesito cambiar el valor de la variable después
const mivariable;    La variable no se puede cambiar

Para imprimir una variable utilizo console.log();

              Tipos numéricos
let cantidad = 10;   Números enteros
let precio = 30.5;   Números de punto flotante, tienen un peso mayor que los anteriores
let total = "300";   No es un número, es un string, así que se debe convertir a número
let nuevototal = Number(total); Esta función sirve para pasar de String a número

Función Number, parseInt, parseFloat 

Todo lo que este entre " ", ' '; ` ` son strings
              Cadenas de texto
let nombre = 'John';
let apellido = 'Doe';
let nombrecompleto = `El nombre completo es: ${nombre} ${apellido}`;
let anidada = "El señor 'John' 'Doe' tiene domicilio en Colombia";

${variable} a esto se le llama interpolar
console.log('El nombre es : ' + nombre + ' ' + apellido); a esto se le llama concatenar
(solo funciona para strings, si se utiliza en números devuelve suma)

              Convertir de número a string
let añoTexto = 2020;
let anoNumero = String(añoTexto);

              Tipos lógicos o booleanos
let encendido = true;
let apagado = false;

let esMayor = 10 < 30;
console.log('esMayor: ' + esMayor);

              Operadores aritméticos
suma +, resta -, multiplicación *, division /, modulo o resto % es el residuo de la división
Incremento ++ y decremento -- son operadores unitarios
Estos operadores pueden ser pre o pos, 
Los pre modifican la variable y luego la imprimen, los pos la evaluan y luego la modifican

let edad = 26;
let edadMabel = 20;
let totalEdad = 

              Operadores relacionales
              
              Operadores lógicos


*/