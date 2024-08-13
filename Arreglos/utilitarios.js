function recuperarTexto(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;

}

function recuperarInt(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

function recuperarFloat(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorCaja);
    return valorFlotante;
}
function mostrarTexto(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente)
    componente.innerText=mensaje
}

function mostrarImg(idComponente,rutaImg){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=rutaImg;    
}

function mostrarTextoEnCaja(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente)
    componente.value=mensaje   
}