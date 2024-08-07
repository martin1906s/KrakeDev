function saludar(){
    let valor;
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido")
}

function recuperarTexto(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;

}