function calcularValorDescuento(monto, porcentajeDescuento) {
    let valorDescuento = (monto * porcentajeDescuento) / 100;
    return valorDescuento;
}

function calcularIVA(monto) {
    let valorIVA = monto * 0.12;
    return valorIVA;
}

function calcularSubtotal(precio, cantidad) {
    let tot = precio * cantidad;
    return tot;
}

function calcularTotal(subtotal, descuento, iva) {
    let valorTotal = (subtotal - descuento) + iva;
    return valorTotal
}


function calcularDescuentoPorVolumen(subtotal, cantidad) {
    let descuento = 0;
    if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    }
    if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04;
    }
    if (cantidad >= 12) {
        descuento = subtotal * 0.05;
    }
    return descuento;
}


function cajaVacia(idCaja, idMensajeError) {
    let producto = document.getElementById(idCaja);
    let errorProducto = document.getElementById(idMensajeError);

    if (producto.value.trim() === "") {
        errorProducto.innerText = "Campo obligatorio";
        return false;  // Devuelve false si el campo está vacío
    } else {
        errorProducto.innerText = "";
        return true;  // Devuelve true si el campo tiene un valor
    }
}


function esProductoValido(idProducto) {
    let valorProducto = document.getElementById(idProducto).value;
    if (valorProducto.length > 10) {
        mostrarTexto("lblErrorProducto", "Nombre muy largo");
    } else {
        return true;
    }
}


function esCantidadValida(idCantidad, idMensajeErrorC) {
    let cantidad = recuperarInt("txtCantidad");
    if (cantidad >= 0 && cantidad <= 100) {
        mostrarTexto("lblErrorCantidad", "");
        return true;
    } else if (isNaN(cantidad)) {
        cajaVacia(idCantidad, "lblErrorCantidad");
    } else {
        mostrarTexto("lblErrorCantidad", "Cantidad muy alta");
    }
}


function esPrecioValido(idPrecio, idMensajeErrorP) {
    let precio = recuperarFloat("txtPrecio");
    if (precio >= 0 && precio <= 50) {
        mostrarTexto("lblErrorPrecio", "");
        return true;
    } else if (isNaN(precio)) {
        cajaVacia(idPrecio, "lblErrorPrecio");
    } else {
        mostrarTexto("lblErrorPrecio", "Precio fuera del rango permitido");
    }
}
