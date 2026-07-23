import {
    validarISBN,
    validarTexto
} from "./validaciones.js";

import {
    filtrarLibros
} from "./busquedas.js";

export const registrarEventos = (
    libros,
    mostrarLibros
) => {

    const btnBuscar =
        document.getElementById("btnBuscar");

    const btnLimpiar =
        document.getElementById("btnLimpiar");

    btnBuscar.addEventListener(
        "click",
        () => {

            const isbn =
                document.getElementById("isbn")
                    .value.trim();

            const nombre =
                document.getElementById("nombre")
                    .value.trim();

            const autor =
                document.getElementById("autor")
                    .value.trim();

            const categoria =
                document.getElementById("categoria")
                    .value;

            if (!validarISBN(isbn)) {

                alert(
                    "ISBN inválido. Debe contener entre 10 y 13 números."
                );

                return;
            }

            if (!validarTexto(nombre)) {

                alert(
                    "El nombre debe tener mínimo 3 caracteres."
                );

                return;
            }

            if (!validarTexto(autor)) {

                alert(
                    "El autor debe tener mínimo 3 caracteres."
                );

                return;
            }

            const resultado =
                filtrarLibros(
                    libros,
                    isbn,
                    nombre,
                    autor,
                    categoria
                );

            mostrarLibros(resultado);
        }
    );

    btnLimpiar.addEventListener(
        "click",
        () => {

            document.getElementById("isbn").value = "";
            document.getElementById("nombre").value = "";
            document.getElementById("autor").value = "";
            document.getElementById("categoria").value = "";

            mostrarLibros(libros);

        }
    );

};