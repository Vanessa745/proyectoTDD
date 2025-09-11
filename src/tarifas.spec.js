import { validarSalida, calcularEstadia, calcularTarifa } from "./tarifas.js";

describe("Tarifas", () => {
  it("Deberia mostrar mensaje: La hora de salida es válida.", () => {
    expect(validarSalida()).toEqual("La hora de salida es válida.");
  });

  it("Deberia validar la hora de salida.", () => {
    expect(validarSalida("2025-09-08T08:30", "2025-09-08T12:00")).toEqual("La hora de salida es válida.");
  });

  it("Debería mostrar las horas de estadia.", () => {
    expect(calcularEstadia()).toEqual("1 hora/s y 0 minuto/s.");
  });

  it("Debería mostrar las horas de estadia a partir del ingreso y salida.", () => {
    expect(calcularEstadia("2025-09-08T08:30", "2025-09-08T12:00")).toEqual("3 hora/s y 30 minuto/s.");
  });

  it("Debería mostrar la tarifa.", () => {
    expect(calcularTarifa()).toEqual("40 Bs.");
  });
});