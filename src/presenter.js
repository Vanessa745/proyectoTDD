import { calcularEstadiaDiurnaYNocturna, calcularTarifaTotal, aplicarTope, verificarEstadoTicket } from "./tarifas.js";

const in_ingreso = document.querySelector("#ingreso");
const in_salida = document.querySelector("#salida");
const form = document.querySelector("#calculo-form");
const div = document.querySelector("#resultado-div");
const radios = document.getElementsByName("estadoTicket");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let seleccionado = null;
  for (const r of radios) {
    if (r.checked) {
      seleccionado = r.value;
      break;
    }
  }

  let tarifaTotal = 0;

  let estadoTicket = verificarEstadoTicket(seleccionado);

  if (estadoTicket === "80,00") {
    tarifaTotal = estadoTicket;

    div.innerHTML = "<p>Penalidad por ticket perdido: " + tarifaTotal + " Bs.</p>";
  } else {
    const hora_i = in_ingreso.value;
    const hora_s = in_salida.value;

    const [horasdia, minutosdia, horasnoct, minutosnoct] = calcularEstadiaDiurnaYNocturna(hora_i, hora_s);
    tarifaTotal = calcularTarifaTotal(horasdia, minutosdia, horasnoct, minutosnoct);
    const topeAplicado = aplicarTope(tarifaTotal);

    div.innerHTML = "<p>Horas día:" + horasdia + ", minutos día: " + minutosdia + ", horas noche: " + horasnoct + ", minutos noche: " + minutosnoct + "</p><br><p>Tarifa total con tope aplicado: " + topeAplicado + " Bs.</p><br></p>Estado del ticket: " + seleccionado + "</p>";
  }

  //div.innerHTML = "<p>Horas día:" + horasdia + ", minutos día: " + minutosdia + ", horas noche: " + horasnoct + ", minutos noche: " + minutosnoct + "</p><br><p>Tarifa total con tope aplicado: " + topeAplicado + " Bs.</p><br></p>Estado del ticket: " + seleccionado + "</p>";
});