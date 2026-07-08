const {
    validarNombreProducto,
    mostrarMensaje,
    agregar
} = require("../scripts/script");

test("Un nombre válido devuelve true", () => {
    expect(validarNombreProducto("Monitor")).toBe(true);
});

test("Un nombre vacío devuelve false", () => {
    expect(validarNombreProducto("   ")).toBe(false);
});

test("El mensaje es correcto", () => {
    expect(mostrarMensaje()).toBe("¡Docker está funcionando correctamente!");
});
test("Al agregar un producto válido se actualiza el mensaje", () => {

    document.body.innerHTML = `
        <input id="nombre">
        <button id="btnAgregar"></button>
        <p id="resultado"></p>
    `;

    document.getElementById("nombre").value = "Monitor";

    agregar();

    expect(document.getElementById("resultado").textContent)
        .toBe("Producto válido");
});