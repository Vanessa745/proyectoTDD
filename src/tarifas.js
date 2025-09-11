function validarSalida(horaEntrada="2025-01-01T00:00", horaSalida="2025-01-01T01:00") {
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);
  if (salida <= entrada) {
    return "La hora de salida debe ser posterior a la hora de entrada.";
  } else {
    return "La hora de salida es válida.";
  }
}

function mostrarEstadia(horaEntrada="2025-01-01T00:00", horaSalida="2025-01-01T01:00"){
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);
  const diffMs = salida - entrada;
  const diffMin = Math.floor(diffMs / 60000);
  const horas = Math.floor(diffMin/60);
  const minutos = diffMin % 60;
  return horas + " hora/s y " + minutos + " minuto/s.";
}

function calcularEstadia(horaEntrada="2025-01-01T00:00", horaSalida="2025-01-01T01:00"){
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);
  const diffMs = salida - entrada;
  const diffMin = Math.floor(diffMs / 60000);
  const horas = Math.floor(diffMin/60);
  const minutos = diffMin % 60;
  return [horas, minutos];
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

function verificarEstadiaNocturna(horaEntrada="2025-01-01T00:00", horaSalida="2025-01-01T01:00") {
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);
  
  let noctMin = 0;
  const diaInicio = new Date(entrada.getFullYear(), entrada.getMonth(), entrada.getDate() - 1);

  for (let d = new Date(diaInicio); d <= salida; d.setDate(d.getDate() + 1)) {
    const inicioRangoNoct = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 22, 0, 0);
    const finRangoNoct   = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 6, 0, 0); 
    noctMin += minutosSolapados(entrada, salida, inicioRangoNoct, finRangoNoct);
  }

  const horas = Math.floor(noctMin / 60);
  const minutos = noctMin % 60;
  return `${horas} hora/s y ${minutos} minuto/s.`;
}

function calcularEstadiaNocturna(horaEntrada="2025-01-01T22:00", horaSalida="2025-01-01T23:00") {
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);
  
  let noctMin = 0;
  const diaInicio = new Date(entrada.getFullYear(), entrada.getMonth(), entrada.getDate() - 1);

  for (let d = new Date(diaInicio); d <= salida; d.setDate(d.getDate() + 1)) {
    const inicioRangoNoct = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 22, 0, 0);
    const finRangoNoct   = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 6, 0, 0); 
    noctMin += minutosSolapados(entrada, salida, inicioRangoNoct, finRangoNoct);
  }

  const horas = Math.floor(noctMin / 60);
  const minutos = noctMin % 60;
  return [horas, minutos];
}

export { validarSalida, mostrarEstadia, calcularEstadia, calcularTarifa, verificarEstadiaNocturna };