function esMayuscula(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=65 && codigoAscii<=90){
        return true;
    }else{
        return false;
    }
}

function esDigito(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=48 && codigoAscii<=57){
        return true;
    }else{
        return false;
    }
}

function esGuion(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii==45){
        return true;
    }else{
        return false;
    }
}