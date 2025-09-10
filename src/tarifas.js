function validarSalida(horaEntrada="2025-01-01T00:00", horaSalida="2025-01-01T01:00") {
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);
  if (salida <= entrada) {
    return "La hora de salida debe ser posterior a la hora de entrada.";
  } else {
    return "La hora de salida es válida.";
  }
}

function calcularEstadia(){
    return "5 horas y 30 minutos.";
}

export { validarSalida, calcularEstadia };