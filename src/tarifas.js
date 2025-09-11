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

export { validarSalida, mostrarEstadia, calcularEstadia, calcularTarifa };