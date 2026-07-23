import {
    registrarEventos
} from "./eventos.js";

let libros = [];

const tabla =
    document.getElementById(
        "tablaLibros"
    );

const mostrarLibros = (
    listaLibros
) => {

    tabla.innerHTML = "";

    listaLibros.forEach(
        libro => {

            tabla.innerHTML += `
                <tr>
                    <td>${libro.isbn}</td>
                    <td>${libro.nombre}</td>
                    <td>${libro.autor}</td>
                    <td>${libro.edicion}</td>
                    <td>${libro.categoria}</td>
                </tr>
            `;

        }
    );

};

const cargarLibros =
    async () => {

        try {

            const respuesta =
                await fetch(
                    "./data/libros.json"
                );

            libros =
                await respuesta.json();

            mostrarLibros(libros);

            registrarEventos(
                libros,
                mostrarLibros
            );

        } catch (error) {

            console.error(
                "Error cargando libros",
                error
            );

        }

    };

document.addEventListener(
    "DOMContentLoaded",
    cargarLibros
);