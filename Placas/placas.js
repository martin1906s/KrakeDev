function validarPlaca() {
    let provincia;
    let erroresEstructura;
    recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura("txtPlaca");
    if (erroresEstructura==null) {
        provincia=obtenerProvincia("txtPlaca")
        mostrarTexto("lblMensajeErrores","PLACA: VALIDA");
        mostrarTexto("lblErrores","")
        mostrarTexto("nomProvincia",provincia)
        
    }else{
        mostrarTexto("lblMensajeErrores","PLACA: INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
    }
}