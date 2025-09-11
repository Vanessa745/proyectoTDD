import { validarSalida, mostrarEstadia, calcularTarifa, verificarEstadiaNocturna, calcularTarifaNocturna, calcularTarifaTotal, aplicarTope } from "./tarifas.js";

describe("Tarifas", () => {
  it("Deberia mostrar mensaje: La hora de salida es válida.", () => {
    expect(validarSalida()).toEqual("La hora de salida es válida.");
  });

  it("Deberia validar la hora de salida.", () => {
    expect(validarSalida("2025-09-08T08:30", "2025-09-08T12:00")).toEqual("La hora de salida es válida.");
  });

  it("Debería mostrar las horas de estadia.", () => {
    expect(mostrarEstadia()).toEqual("1 hora/s y 0 minuto/s.");
  });

  it("Debería mostrar las horas de estadia a partir del ingreso y salida.", () => {
    expect(mostrarEstadia("2025-09-08T08:30", "2025-09-08T12:00")).toEqual("3 hora/s y 30 minuto/s.");
  });

  it("Debería mostrar la tarifa.", () => {
    expect(calcularTarifa()).toEqual("10,00");
  });

  it("Debería mostrar la tarifa por estadía.", () => {
    expect(calcularTarifa("3", "30")).toEqual("35,10");
  });

  it("Debería mostrar las horas de estadía nocturna.", () => {
    expect(verificarEstadiaNocturna("2025-09-08T22:30", "2025-09-08T23:30")).toEqual("1 hora/s y 0 minuto/s.");
  });

  it("Debería mostrar la tarifa nocturna.", () => {
    expect(calcularTarifaNocturna()).toEqual("6,00");
  });

  it("Debería mostrar la tarifa por estadía nocturna.", () => {
    expect(calcularTarifaNocturna(2, 30)).toEqual("15,00");
  });

  it("Debería mostrar la tarifa por estadía completa (un día).", () => {
    expect(calcularTarifaTotal(2, 0, 1, 0)).toEqual("26,00");
  });

  it("Debería mostrar 50 Bs. como el tope máximo de cobro.", () => {
    expect(aplicarTope("60,00")).toEqual("50,00");
  });
});