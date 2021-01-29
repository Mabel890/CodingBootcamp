let n = (Number(prompt('¿Cuántos libros desea ingresar?: ')));
   
for (let i = 0; i < n; i++) {
    function libros (titulo, autor, numeroDePaginas, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
        this.precio = precio;
    }
    let libro = new libros(prompt('Ingrese el título del libro'), prompt('Ingrese el autor del libro'), Number(prompt('Ingrese el número de páginas del libro')), prompt('Ingrese el precio del libro'));    
    console.log(libro);
}

    