function validarPassword(password) {
    let errores = "";
    if (password.length < 8) {
        errores += "Mínimo 8 caracteres\n";
    }
    if (password.length > 16) {
        errores += "Máximo 16 caracteres \n";
    }

    let letra;
    let contadorMayusculas = 0;
    for (let i = 0; i < password.length; i++) {
        letra = password.charAt(i);
        if (esMayuscula(letra)) {
            contadorMayusculas++;
        }
    }
    if(contadorMayusculas<1){
        errores+="Debe contener al menos una letra mayúscula\n";
    }

    let digito;
    let contadorDigito=0;
    for(let j=0;j<password.length;j++){
        digito=password.charAt(j);
        if(esDigito(digito)){
            contadorDigito++;
        }
    }
    if (contadorDigito<1) {
        errores+="Debe contener al menos un digito\n";
    }

    let caracter;
    let contadorCaracter=0;
    for(let k=0;k<password.length;k++){
        caracter=password.charAt(k);
        if(esCaracterEspecial(caracter)){
            contadorCaracter++;
        }
    }
    if (contadorCaracter<1) {
        errores+="Debe contener al menos un caracter especial ( * - _ )\n";
    }

    return errores;
}

function ejecutarValidacion() {
    let text=recuperarTexto("txtPassword");
    let validacion=validarPassword(text);
    if (validacion=="") {
        mostrarTexto("lblResultado", "PASSWORD CORRECTO");
    }else{
        mostrarTexto("lblResultado", validacion);
    }
}