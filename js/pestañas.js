// 1. Buscamos los botones y las fichas.
const botones = document.querySelectorAll("[data-ficha]");
const fichas = document.querySelectorAll(".ficha");

// 2. Función para mostrar una ficha concreta.
function mostrarFicha(idFicha) {
    fichas.forEach((ficha) => {
        ficha.hidden = ficha.id !== idFicha;
    });
}

// 3. Los botones cambian directamente la ficha.
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const idFicha = boton.dataset.ficha;
        mostrarFicha(idFicha);
    });
});

// 4. Detectamos los cambios en el fragmento de la URL.
function mostrarFichaDesdeEnlace() {
    const destino = document.getElementById(location.hash.slice(1));

    // Si el destino está dentro de una ficha, la mostramos.
    const ficha = destino?.closest(".ficha");

    if (ficha) {
        mostrarFicha(ficha.id);
    }
}

// 5. Escuchamos los cambios de URL.
window.addEventListener("hashchange", mostrarFichaDesdeEnlace);

// 6. Comprobamos si la página se ha abierto con un enlace interno.
mostrarFichaDesdeEnlace();