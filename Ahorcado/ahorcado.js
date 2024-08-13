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
    }
}

function ingresarLetra() {
    intentos++
    let rLetra=recuperarTexto("txtLetra");
    if(esMayuscula(rLetra)){
        validar(rLetra);
        if (coincidencias==5) {
            alert("HA GANADO");
        }
        if (intentos==10) {
            alert("HA PERDIDO")
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }
}
