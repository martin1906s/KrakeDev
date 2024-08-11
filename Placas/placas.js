function validarPlaca() {
    let erroresEstructura;
    recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura("txtPlaca");
    if (erroresEstructura==null) {
        mostrarTexto("lblMensajeErrores","PLACA: VALIDA");
        mostrarTexto("lblErrores","")
        
    }else{
        mostrarTexto("lblMensajeErrores","PLACA: INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
    }
}