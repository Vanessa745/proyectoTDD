describe("Validar", () => {
  it("Deberia validar la hora de salida", () => {
    expect(validarSalida()).toEqual("La hora de salida es válida.");
  });
});

function validarSalida() {
  return "La hora de salida es válida.";
}