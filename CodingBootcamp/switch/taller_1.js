let edad = Number(prompt('Ingrese su edad: '));

switch (edad) { 
    case '(10 <= edad) && (edad < 18)':
        console.log('Adolescente');
        break;
   
    case ((18 <= edad) && (edad < 60)):
        console.log('Mayor de edad');
        break;

    case ((60 < edad)):
        console.log('Adulto mayor');
        break;

    default:
        console.log('Edad fuera de rango');
        break;
}