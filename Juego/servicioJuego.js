function obtenerAleatorio() {
    let aleatorio;
    let numDecimal;
    let numEntero;
    let numAleatorio;
    aleatorio = Math.random();
    numDecimal = aleatorio * 3;
    numEntero = parseInt(numDecimal);
    numAleatorio = numEntero + 1;

    return numAleatorio;
}

function generarElemento() {
    let cadena;
    let cadenaAleatoria = obtenerAleatorio();
    if (cadenaAleatoria == 1) {
        cadena = "piedra";
    }
    if (cadenaAleatoria == 2) {
        cadena = "papel";
    }
    if (cadenaAleatoria == 3) {
        cadena = "tijera";
    }
    return cadena;
}

function determinarGanador(eleccionJ1, eleccionJ2) {
    if (eleccionJ1 == eleccionJ2) {
        return 0;
    }
    if (eleccionJ1 == "piedra" && eleccionJ2 == "tijera" || eleccionJ1 == "papel" && eleccionJ2 == "piedra" || eleccionJ1 == "tijera" && eleccionJ2 == "papel") {
        return 1;
    } else {
        return 2;
    }
}

function generarRuta(nombre) {
    let rutaImg;
    if (nombre=="piedra") {
        rutaImg="./imagenes/piedra.png";
    }
    if (nombre=="papel") {
        rutaImg="./imagenes/papel.png";
    }
    if (nombre=="tijera") {
        rutaImg="./imagenes/tijera.png";        
    }
    return rutaImg;
}