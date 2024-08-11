function validarPlaca() {
    let provincia;
    let tipo;
    let erroresEstructura;
    recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura("txtPlaca");
    if (erroresEstructura == null) {
        provincia = obtenerProvincia("txtPlaca")
        tipo = obtenerTipoVehiculo("txtPlaca");
        mostrarTexto("lblMensajeErrores", "PLACA: VALIDA");
        mostrarTexto("lblErrores", "");
        mostrarTexto("nomProvincia", provincia);
        mostrarTexto("tipoVehiculo", tipo);

    } else {
        mostrarTexto("lblMensajeErrores", "PLACA: INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
        mostrarTexto("nomProvincia", "");
        mostrarTexto("tipoVehiculo", "");
    }
}