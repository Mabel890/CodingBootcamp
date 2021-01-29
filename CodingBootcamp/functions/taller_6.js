let largo = Number(prompt('Ingrese el largo: '));
let ancho = Number(prompt('Ingrese el ancho: '));

if ((1 <= largo) && (largo <=1000) && (1 <= ancho) && (ancho <=1000)) {
    let area = function (largo, ancho) {
        return largo * ancho;
    }
    let resultadoArea = area(largo, ancho);
    console.log('El área del rectángulo es ' + resultadoArea);
    
    let perimetro = function (largo, ancho) {
        return 2 * (largo + ancho);
    }
    let resultadoPerimetro = perimetro(largo, ancho);
    console.log('El perímetro del rectángulo es ' + resultadoPerimetro);
} else {
    console.log('Ingrese valores entre 1 y 1000')
}