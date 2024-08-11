let puntosUsuario = 0;
let puntosComputador = 0;

function jugar(seleccionado) {
    let gElemento = generarElemento();
    let gRuta = generarRuta(gElemento);
    mostrarImagen("cpuEleccion", gRuta);
    let dGanador = determinarGanador(gElemento, seleccionado);
    if (dGanador == 0) {
        mostrarTexto("lblResultado", "RESULTADO: EMPATE");
    }
    if (dGanador == 1) {
        mostrarTexto("lblResultado", "RESULTADO: PERDISTE LA PARTIDA");
        puntosComputador += 1;
        mostrarTexto("ptsCpu", puntosComputador + " pts.");
    }
    if (dGanador == 2) {
        mostrarTexto("lblResultado", "RESULTADO: GANASTE LA PARTIDA");
        puntosUsuario += 1;
        mostrarTexto("ptsUsuario", puntosUsuario + " pts.");
    }

    if (puntosComputador==1||puntosUsuario==1) {
        mostrarTexto("ptsUsuario", puntosUsuario + " pts.");
        mostrarTexto("ptsCpu", puntosComputador + " pts.");
        mostrarTexto("ganador", "");
    }
    if (puntosUsuario == 5) {
        mostrarTexto("ganador", "HAS GANADO");
        puntosUsuario=0;
        puntosComputador=0

    }
    if (puntosComputador==5) {
        mostrarTexto("ganador", "TE GANÓ EL COMPUTADOR");
        puntosUsuario=0;
        puntosComputador=0;
    }
}

function limpiar() {
    mostrarTexto("ganador", "");
    mostrarTexto("ptsUsuario","0 pts.");
    mostrarTexto("ptsCpu","0 pts.")
    mostrarImagen("cpuEleccion","")
    mostrarTexto("lblResultado", "RESULTADO:");
}