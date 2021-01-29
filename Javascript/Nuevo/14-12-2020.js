//Reto 1: crea una copia 
let persona = {
    nombre: 'David',
    apellido: 'Espinosa'
};

let user = JSON.parse(JSON.stringify(persona));
delete user.apellido

console.log(persona);

console.log(user);