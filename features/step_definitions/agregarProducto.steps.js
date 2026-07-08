const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("node:assert");
const { validarNombreProducto } = require("../../scripts/script");

let nombre;
let resultado;

Given("que el usuario desea agregar un producto", function () {
});

When("ingresa el nombre {string}", function (texto) {
    nombre = texto;
});

Then("el nombre es válido", function () {
    resultado = validarNombreProducto(nombre);
    assert.strictEqual(resultado, true);
});