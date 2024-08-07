function saludar(){
    let valor;
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura")
    let mensajeBienvenido="Bienenido "+nombre+" "+apellido
    mostrarTexto("lblResultado",mensajeBienvenido);
    mostrarImg("imgSaludo","./Imagenes/saludo.gif")
    mostrarTextoEnCaja("txtNombre","")
}