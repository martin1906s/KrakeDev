//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;

function esMayuscula(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=65 && codigoAscii<=90){
        return true;
    }else{
        return false;
    }
}

function guardarPalabra() {
    let palabra=recuperarTexto("txtSecreta");
    let letra;
    let contadorMayusculas = 0;

    if(palabra.length!=5){
        alert("Debe ingresar una palabra de 5 letras");
    }

    for (let i = 0; i < palabra.length; i++) {
        letra = palabra.charAt(i);
        if (esMayuscula(letra)) {
            contadorMayusculas++;
        }
    }
    if (contadorMayusculas!=5) {
        alert("Debe contener 5 letras mayusculas");
    }
    palabraSecreta=palabra;
}

function mostrarLetra(letra, posicion) {
    if (posicion==0) {
        mostrarTexto("div0",letra);        
    }
    if (posicion==1) {
        mostrarTexto("div1",letra);        
    }
    if (posicion==2) {
        mostrarTexto("div2",letra);       
    }
    if (posicion==3) {
        mostrarTexto("div3",letra);       
    }
    if (posicion==4) {
        mostrarTexto("div4",letra);        
    }
}

function validar(letra) {
    let letrasEncontradas=0;
    for(let i=0;i<palabraSecreta.length;i++){
        if (letra==palabraSecreta.charAt(i)) {
            mostrarLetra(letra,i);
            letrasEncontradas++;
            coincidencias++
        }
    }
    if (letrasEncontradas==0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado()
    }
}

function ingresarLetra() {
    intentos++
    let rLetra=recuperarTexto("txtLetra");
    if(esMayuscula(rLetra)){
        validar(rLetra);
        if (coincidencias==5) {
            mostrarImagen("ahorcadoImagen","ganador.gif");
        }
        if (intentos==10) {
            mostrarImagen("ahorcadoImagen","gameOver.gif");
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }
}

function mostrarAhorcado() {
    if (errores==1) {
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png")
    }
    if (errores==2) {
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png")
    }
    if (errores==3) {
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png")
    }
    if (errores==4) {
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png")
    }
    if (errores==5) {
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png")
    }
    if (errores==6) {
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png")
    }
    if (errores==7) {
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png")
    }
    if (errores==8) {
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png")
    }
    if (errores==9) {
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png")
    }
}
