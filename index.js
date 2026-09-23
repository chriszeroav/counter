// Seleccionamos los elementos del DOM
const number = document.getElementById("number");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const doubleButton = document.getElementById("double");

// Recuperamos el valor guardado
let counter = Number(localStorage.getItem("counter")) || 0;
if (counter === null) {
  counter = 0;
} else {
  counter = Number(counter);
}

// Función para actualizar la vista
function updateView() {
  number.textContent = counter;
  // Guardamos el valor actual
  localStorage.setItem("counter", counter);
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

updateView();
