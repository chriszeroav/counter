// Seleccionamos los elementos del DOM
const number = document.getElementById("number");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const doubleButton = document.getElementById("double");

// Variable que guarda el valor actual
let counter = 0;

// Función para actualizar la vista
function updateView() {
    number.textContent = counter;
}

// Eventos de los botones
increaseButton.addEventListener("click", () => {
    counter++;
    updateView();
});

decreaseButton.addEventListener("click", () => {
    counter--;
    updateView();
});

resetButton.addEventListener("click", () => {
    counter = 0;
    updateView();
});

doubleButton.addEventListener("click", () => {
    counter *= 2;
    updateView();
});