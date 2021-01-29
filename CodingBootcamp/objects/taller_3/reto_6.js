let persona = {
    nombre: 'Felipe',
    apellido: 'Alvarez',
    edad: 20,
    ciudad: 'Medellín'
};

let copiaPersona = {};

for (let key in persona) {
    copiaPersona[key] = persona[key];
}

copiaPersona.atributos = ['puedeLeer', 'puedeEditar', 'puedeBorrar'];

console.log(persona);
console.log(copiaPersona);