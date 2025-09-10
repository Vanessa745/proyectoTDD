import sumar from "./sumador";

const ingreso = document.querySelector("#ingreso");
const form = document.querySelector("#calculo-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const hora_i = ingreso.value;

  div.innerHTML = "<p>" + hora_i + "</p>";
});
