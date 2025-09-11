function validarSalida(horaEntrada="2025-01-01T00:00", horaSalida="2025-01-01T01:00") {
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);
  if (salida <= entrada) {
    return "La hora de salida debe ser posterior a la hora de entrada.";
  } else {
    return "La hora de salida es válida.";
  }
}

function calcularEstadia(horaEntrada="2025-01-01T00:00", horaSalida="2025-01-01T01:00"){
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);
  const diffMs = salida - entrada;
  const diffMin = Math.floor(diffMs / 60000);
  const horas = "" + Math.floor(diffMin/60);
  const minutos = "" + diffMin % 60;
  return horas + " hora/s y " + minutos + " minuto/s.";
}

function calcularTarifa(){
  return "40 Bs.";
}

export { validarSalida, calcularEstadia, calcularTarifa };