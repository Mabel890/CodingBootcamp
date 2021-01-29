function validaEdad(edad) {
    return (edad > 20 ? true : false);
}
console.log(validaEdad(Number(prompt('Ingrese su edad: '))));