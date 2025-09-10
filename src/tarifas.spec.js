import { validarSalida, calcularEstadia } from "./tarifas.js";

describe("Tarifas", () => {
  it("Deberia mostrar mensaje: La hora de salida es válida.", () => {
    expect(validarSalida()).toEqual("La hora de salida es válida.");
  });

  it("Deberia validar la hora de salida.", () => {
    expect(validarSalida("2025-09-08T08:30", "2025-09-08T012:00")).toEqual("La hora de salida es válida.");
  });

  it("Debería mostrar las horas de estadia.", () => {
    expect(calcularEstadia()).toEqual("5 horas y 30 minutos.");
  });
});