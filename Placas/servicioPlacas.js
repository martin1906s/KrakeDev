function validarEstructura(placa) {
    placa=recuperarTexto("txtPlaca");
    let errores="";
    if(placa.length!=7  && placa.length!=8){
        errores+="Longitud de la placa incorrecta. \n";
    }
    if(!esMayuscula(placa.charAt(0))){
        errores+="El primer caracter es una letra mayúscula. \n";
    }
    if(!esMayuscula(placa.charAt(1))){
        errores+="El segundo caracter es una letra mayúscula. \n";
    }
    if(!esMayuscula(placa.charAt(2))){
        errores+="El tercer caracter es una letra mayúscula. \n";
    }
    if(!esGuion(placa.charAt(3))){
        errores+="El cuarto caracter es un guión. \n";
    }
    if(!esDigito(placa.charAt(4))){
        errores+="El quinto caracter es un digito. \n";
    }
    if(!esDigito(placa.charAt(5))){
        errores+="El sexto caracter es un digito. \n";
    }
    if(!esDigito(placa.charAt(6))){
        errores+="El septimo caracter es un digito. \n";
    }
    if(placa.length==8){
        if(!esDigito(placa.charAt(7))){
            errores+="El octavo caracter es un digito. \n";
        }
    }

    if(errores.length>0){
        return errores;
    }else{
        return null;
    }

}