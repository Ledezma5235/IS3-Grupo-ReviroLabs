if (typeof module !== "undefined") {
    module.exports = {
        mostrarMensaje,
        validarNombreProducto,
        agregar
    };
}
function mostrarMensaje(){
    alert("¡Docker está funcionando correctamente!");
}

function validarNombreProducto(nombre) {
    return nombre.trim().length > 0;
}

function agregar() {
    const nombre = document.getElementById("nombre").value;

    if (validarNombreProducto(nombre)) {
        document.getElementById("resultado").textContent =
            "Producto válido";
    } else {
        document.getElementById("resultado").textContent =
            "Producto inválido";
    }
}

