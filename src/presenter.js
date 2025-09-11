import { validarSalida, mostrarEstadia, calcularEstadia, calcularTarifa, verificarEstadiaNocturna, calcularEstadiaNocturna, calcularTarifaNocturna, calcularEstadiaDiurnaYNocturna } from "./tarifas.js";

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
  const [h_noct, m_noct] = calcularEstadiaNocturna(hora_i, hora_s);
  const tarifa_nocturna = calcularTarifaNocturna(h_noct, m_noct);
  const [horasdia, minutosdia, horasnoct, minutosnoct] = calcularEstadiaDiurnaYNocturna(hora_i, hora_s);

  div.innerHTML = "<p>Horas día:" + horasdia + ", minutos día: " + minutosdia + ", horas noche: " + horasnoct + ", minutos noche: " + minutosnoct + "</p>";
});
