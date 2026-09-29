// Seleccionamos los elementos del DOM
const number = document.getElementById("number");
const warning = document.getElementById("warning");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const doubleButton = document.getElementById("double");

let counter = Number(localStorage.getItem("counter")) || 0;
number.textContent = counter;

function updateView() {
  number.textContent = counter;
  localStorage.setItem("counter", counter);
  warning.classList.toggle("hidden", counter >= 0);
}

updateView();

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
