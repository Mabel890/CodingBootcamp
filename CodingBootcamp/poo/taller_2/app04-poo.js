let n = Number(prompt('¿Cuántos libros desea ingresar?: '));
class Libro {
    constructor(titulo,autor,isbn,numeroDePaginas) {
        this.titulo = titulo,
        this.autor = autor,
        this.isbn = isbn,
        this.numeroDePaginas = numeroDePaginas
    }

    mayorNumeroDePaginas(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr[i] = objLibro[this.numeroDePaginas].sort();
        }
    }

    infoLibro() {
        return `El libro ${this.titulo} del autor ${this.autor}, con número de ISBN ${this.isbn} tiene ${this.numeroDePaginas} páginas.`;
    }
}
let objLibro = new Libro(prompt('Titulo'), prompt('autor'), prompt('ISBN'), Number(prompt('paginas')));
console.log(objLibro.infoLibro());
console.log(objLibro.mayorNumeroDePaginas());
/*
let objLibro = new Libro('El conde de Montecristo', 'Alejandro Dumas', '978-84-9794-161-7', 717);
let obj2Libro = new Libro('It', 'Stephen King', '978-84-9759-379-3', 1503);
let obj3Libro = new Libro('Los asesinos del emperador', 'Santiago Posteguillo', '978-84-0801-324-2', 1224);

console.log(objLibro.infoLibro());
console.log(obj2Libro.infoLibro());
console.log(obj3Libro.infoLibro());
*/