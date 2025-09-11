import { validarSalida, mostrarEstadia, calcularEstadia, calcularTarifa, verificarEstadiaNocturna } from "./tarifas.js";

const in_ingreso = document.querySelector("#ingreso");
const in_salida = document.querySelector("#salida");
const form = document.querySelector("#calculo-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const hora_i = in_ingreso.value;
  const hora_s = in_salida.value;

  const resultado = validarSalida(hora_i, hora_s);
  const estadia = mostrarEstadia(hora_i, hora_s);
  const [horas, minutos] = calcularEstadia(hora_i, hora_s);
  const tarifa = calcularTarifa(horas, minutos);
  const nocturna = verificarEstadiaNocturna(hora_i, hora_s);

  div.innerHTML = "<p>" + resultado + "</p><br><p>Duración de la estadía: " + estadia + "</p><br><p>Tarifa a pagar: " + tarifa + " Bs.</p><br><p>Duración de la estadía nocturna: " + nocturna + "</p>";
});
