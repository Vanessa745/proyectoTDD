import { validarSalida } from "./tarifas.js";

describe("Validar", () => {
  it("Deberia validar la hora de salida", () => {
    expect(validarSalida()).toEqual("La hora de salida es válida.");
  });

  it("Deberia validar la hora de salida", () => {
    expect(validarSalida("2025-09-08T08:30", "2025-09-08T012:00")).toEqual("La hora de salida es válida.");
  });
});