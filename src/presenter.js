import { validarSalida } from "./tarifas.js";

const ingreso = document.querySelector("#ingreso");
const salida = document.querySelector("#salida");
const form = document.querySelector("#calculo-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const hora_i = ingreso.value;
  const hora_s = salida.value;

  const resultado = validarSalida(hora_i, hora_s);

  div.innerHTML = "<p>Ingreso: " + hora_i + ", Salida: " + hora_s + "</p><br><p> " + resultado + "</p>";
});
