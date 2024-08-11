calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto;
    let cantidad;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto = recuperarTexto("txtProducto");
    cajaVacia("txtProducto", "lblErrorProducto");
    esProductoValido("txtProducto");

    cantidad = recuperarInt("txtCantidad");
    cajaVacia("txtCantidad", "lblErrorCantidad");
    esCantidadValida("txtCantidad", "lblErrorCantidad");

    precioProducto = recuperarFloat("txtPrecio");
    cajaVacia("txtPrecio", "lblErrorPrecio");
    esPrecioValido("txtPrecio", "lblErrorPrecio");




    if (cajaVacia("txtProducto", "lblErrorProducto") && esProductoValido("txtProducto") && cajaVacia("txtCantidad", "lblErrorCantidad") && esCantidadValida("txtCantidad", "lblErrorCantidad") && cajaVacia("txtPrecio", "lblErrorPrecio") && esPrecioValido("txtPrecio", "lblErrorPrecio")) {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));

        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento.toFixed(2));

        valorIVA = calcularIVA(valorSubtotal - valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA.toFixed(2));

        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal.toFixed(2));
        mostrarTexto("lblResumen", "El valor a pagar por " + cantidad + " " + nombreProducto + " con " + valorDescuento.toFixed(2) + "% de descuento: USD " + valorTotal.toFixed(2));
    }
}

limpiar = function () {
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtCantidad").value = "";
    document.getElementById("lblSubtotal").innerText = "0.0";
    document.getElementById("lblDescuento").innerText = "0.0";
    document.getElementById("lblValorIVA").innerText = "0.0";
    document.getElementById("lblTotal").innerText = "0.0";
    document.getElementById("lblResumen").innerText = "";
    document.getElementById("lblErrorPrecio").innerText = "";
    document.getElementById("lblErrorProducto").innerText = "";
    document.getElementById("lblErrorCantidad").innerText = "";
}