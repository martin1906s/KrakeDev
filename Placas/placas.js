function validarPlaca() {
    let provincia;
    let tipo;
    let diaPyP;
    let erroresEstructura;
    recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura("txtPlaca");
    if (erroresEstructura == null) {
        provincia = obtenerProvincia("txtPlaca")
        tipo = obtenerTipoVehiculo("txtPlaca");
        diaPyP = obtenerDiaPicoYPlaca("txtPlaca");
        mostrarTexto("lblMensajeErrores", "PLACA: VALIDA");
        mostrarTexto("lblErrores", "");
        mostrarTexto("nomProvincia", provincia);
        mostrarTexto("tipoVehiculo", tipo);
        mostrarTexto("diaPyP", diaPyP);

    } else {
        mostrarTexto("lblMensajeErrores", "PLACA: INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
        mostrarTexto("nomProvincia", "");
        mostrarTexto("tipoVehiculo", "");
        mostrarTexto("diaPyP", "");
    }
}

function limpiar() {
    mostrarTexto("lblMensajeErrores", "Placa");
    mostrarTexto("lblErrores", "");
    mostrarTexto("nomProvincia", "");
    mostrarTexto("tipoVehiculo", "");
    mostrarTexto("diaPyP", "");
    mostrarTextoEnCaja("txtPlaca","");
    

}