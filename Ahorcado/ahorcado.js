//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

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
        alert("Debe contener 5 letras mayúsculas");
    }
    palabraSecreta=palabra;
}