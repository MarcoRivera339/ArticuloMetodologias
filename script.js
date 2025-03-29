const colores = ["#ff4e50", "#fc913a", "#f9d423", "#30c39e", "#3498db"]; // Lista de colores
let index = 0; // Índice para recorrer los colores

function cambiarFondo() {
    document.body.style.transition = "background-color 2s ease-in-out"; // Suaviza la transición
    document.body.style.backgroundColor = colores[index]; // Cambia el color del fondo
    index = (index + 1) % colores.length; // Avanza al siguiente color y vuelve al inicio si llega al final
}

// Cambia el color cada 3 segundos
setInterval(cambiarFondo, 3000);
