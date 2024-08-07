function calcularValorDescuento(monto,porcentajeDescuento){
    let valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;
}

function calcularIVA(monto){
    let valorIVA=monto*0.12;
    return valorIVA;
}

function calcularSubtotal(precio,cantidad){
    let tot=precio*cantidad;
    return tot;
}

function calcularTotal(subtotal,descuento,iva){
    let valorTotal=(subtotal-descuento)+iva;
    return valorTotal
}