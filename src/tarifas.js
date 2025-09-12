function validarSalida(horaEntrada="2025-01-01T00:00", horaSalida="2025-01-01T01:00") {
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);
  if (salida <= entrada) {
    return "La hora de salida debe ser posterior a la hora de entrada.";
  } else {
    return "La hora de salida es válida.";
  }
}

function calcularTarifa(horas=1, minutos=0, tarifaHora=10, tarifaMinuto=0.17) {
  const total = (horas * tarifaHora) + (minutos * tarifaMinuto);
  return new Intl.NumberFormat('es-ES', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(total);
}

function minutosSolapados(a1, a2, b1, b2) {
  const start = Math.max(a1.getTime(), b1.getTime());
  const end   = Math.min(a2.getTime(), b2.getTime());
  return end > start ? Math.floor((end - start) / 60000) : 0;
}

function calcularTarifaNocturna(horas=1, minutos=0, tarifaHora=6, tarifaMinuto=0.10) {
  const total = (horas * tarifaHora) + (minutos * tarifaMinuto);
  return new Intl.NumberFormat('es-ES', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(total);
}

function calcularEstadiaDiurnaYNocturna(horaEntrada="2025-01-01T07:00", horaSalida="2025-01-01T08:00", opts = {}) {
  const { startHour = 22, endHour = 6 } = opts;

  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);;

  // Sumar minutos nocturnos recorriendo ventanas 22:00–06:00 por cada día
  let noctMin = 0;
  const diaInicio = new Date(entrada.getFullYear(), entrada.getMonth(), entrada.getDate() - 1);
  for (let d = new Date(diaInicio); d <= salida; d.setDate(d.getDate() + 1)) {
    const inicioRangoNoct = new Date(d.getFullYear(), d.getMonth(), d.getDate(), startHour, 0, 0);
    const finRangoNoct = endHour > startHour
      ? new Date(d.getFullYear(), d.getMonth(), d.getDate(), endHour, 0, 0)
      : new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, endHour, 0, 0);
    noctMin += minutosSolapados(entrada, salida, inicioRangoNoct, finRangoNoct);
  }

  const totalMin = Math.floor((salida - entrada) / 60000);
  const diurMin = Math.max(0, totalMin - noctMin);

  const hdi  = Math.floor(diurMin / 60);
  const mindi = diurMin % 60;
  const hnoc = Math.floor(noctMin / 60);
  const minnoc = noctMin % 60;

  return [hdi, mindi, hnoc, minnoc];
}

function calcularTarifaTotal(horasDia=0, minutosDia=0, horasNoc=0, minutosNoc=0, tarifaHoraDia=10, tarifaMinutoDia=0.17, tarifaHoraNoc=6, tarifaMinutoNoc=0.10) {
  const totalDia = (horasDia * tarifaHoraDia) + (minutosDia * tarifaMinutoDia);
  const totalNoc = (horasNoc * tarifaHoraNoc) + (minutosNoc * tarifaMinutoNoc);
  const total = totalDia + totalNoc;
  return new Intl.NumberFormat('es-ES', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(total);
}

function aplicarTope(tarifaCobrada) {
  const tar = parseFloat(tarifaCobrada.replace(",", "."));

  const tope = 50.0;
  const resultado = tar >= tope ? tope : tar;

  return new Intl.NumberFormat('es-ES', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(resultado);
}

function verificarEstadoTicket(estado="perdido") {
    if (estado === "perdido") {
        return "80,00";
    } else {
        return 0;
    }
}

export { validarSalida, calcularTarifa, calcularTarifaNocturna, calcularEstadiaDiurnaYNocturna, calcularTarifaTotal, aplicarTope, verificarEstadoTicket };