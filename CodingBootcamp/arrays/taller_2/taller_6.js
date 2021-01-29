
let empleados = {
    Juan: 1500000,
    Valentina: 4900000,
    Camilo: 2800000,
    Angélica: 6500000,
    David: 1200000,
    Isabella: 1200000,
    Felipe: 900000,
    Antonia: 1000000,
    Alejandro: 6000000,
    Sara: 900000
};

let lowMiddle = Math.floor((Object.values(empleados).length - 1) / 2);
let highMiddle = Math.ceil((Object.values(empleados).length - 1) / 2);
let media = (Object.values(empleados)[lowMiddle] + Object.values(empleados)[highMiddle]) / 2;

console.log(media);

let mayor = Object.values(empleados).reduce(function(a, b) {
    return Math.max(a, b);
});

console.log(mayor);
