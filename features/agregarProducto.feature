Feature: Validación de productos

Scenario: Agregar un producto válido

Given que el usuario desea agregar un producto

When ingresa el nombre "Monitor"

Then el nombre es válido