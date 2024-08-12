function ejecutarPrueba1() {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

function recorrerCadena(cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " POSICION " + posicion);
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " POSICION " + posicion);
    }
}

function ejecutarPrueba2() {
    let mensaje = recuperarTexto("txtCadena");
    let txtInvertido = invertirCadena(mensaje);
    mostrarTexto("lblResultado", invertirCadena(mensaje));
}

function invertirCadena(cadena) {
    let almacenamiento = "";
    for (let tamaño = cadena.length - 1; tamaño >= 0; tamaño -= 1) {
        let letra = cadena.charAt(tamaño);
        almacenamiento += letra;
    }
    return almacenamiento;
}