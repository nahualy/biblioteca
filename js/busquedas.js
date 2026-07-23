export const filtrarLibros = (
    libros,
    isbn,
    nombre,
    autor,
    categoria
) => {

    return libros.filter(libro => {

        const coincideISBN =
            isbn === "" ||
            libro.isbn.includes(isbn);

        const coincideNombre =
            nombre === "" ||
            libro.nombre
                .toLowerCase()
                .includes(nombre.toLowerCase());

        const coincideAutor =
            autor === "" ||
            libro.autor
                .toLowerCase()
                .includes(autor.toLowerCase());

        const coincideCategoria =
            categoria === "" ||
            libro.categoria === categoria;

        return (
            coincideISBN &&
            coincideNombre &&
            coincideAutor &&
            coincideCategoria
        );

    });

};