export const validarISBN = (isbn) => {

    if (isbn === "") return true;

    const regex = /^\d{10,13}$/;

    return regex.test(isbn);
};

export const validarTexto = (texto) => {

    if (texto === "") return true;

    return texto.trim().length >= 3;
};