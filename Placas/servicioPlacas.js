function validarEstructura(placa) {
    placa = recuperarTexto("txtPlaca");
    let errores = "";
    if (placa.length != 7 && placa.length != 8) {
        errores += "Longitud de la placa incorrecta. \n";
    }
    if (!esMayuscula(placa.charAt(0))) {
        errores += "El primer caracter es una letra mayúscula. \n";
    }
    if (!esMayuscula(placa.charAt(1))) {
        errores += "El segundo caracter es una letra mayúscula. \n";
    }
    if (!esMayuscula(placa.charAt(2))) {
        errores += "El tercer caracter es una letra mayúscula. \n";
    }
    if (!esGuion(placa.charAt(3))) {
        errores += "El cuarto caracter es un guión. \n";
    }
    if (!esDigito(placa.charAt(4))) {
        errores += "El quinto caracter es un digito. \n";
    }
    if (!esDigito(placa.charAt(5))) {
        errores += "El sexto caracter es un digito. \n";
    }
    if (!esDigito(placa.charAt(6))) {
        errores += "El septimo caracter es un digito. \n";
    }
    if (placa.length == 8) {
        if (!esDigito(placa.charAt(7))) {
            errores += "El octavo caracter es un digito. \n";
        }
    }

    if (errores.length > 0) {
        return errores;
    } else {
        return null;
    }

}

function obtenerProvincia(placa) {
    let nomProvincia;
    placa = recuperarTexto("txtPlaca");
    if (placa.charCodeAt(0) == 65) {
        nomProvincia = "Azuay";
    }
    if (placa.charCodeAt(0) == 66) {
        nomProvincia = "Bolívar";
    }
    if (placa.charCodeAt(0) == 67) {
        nomProvincia = "Carchi";
    }
    if (placa.charCodeAt(0) == 68) {
        nomProvincia = null;
    }
    if (placa.charCodeAt(0) == 69) {
        nomProvincia = "Esmeraldas";
    }
    if (placa.charCodeAt(0) == 70) {
        nomProvincia = null;
    }
    if (placa.charCodeAt(0) == 71) {
        nomProvincia = "Guayaquil";
    }
    if (placa.charCodeAt(0) == 72) {
        nomProvincia = "Chimborazo";
    }
    if (placa.charCodeAt(0) == 73) {
        nomProvincia = "Imbabura";
    }
    if (placa.charCodeAt(0) == 74) {
        nomProvincia = null;
    }
    if (placa.charCodeAt(0) == 75) {
        nomProvincia = "Sucumbíos";
    }
    if (placa.charCodeAt(0) == 76) {
        nomProvincia = "Loja";
    }
    if (placa.charCodeAt(0) == 77) {
        nomProvincia = "Manabí";
    }
    if (placa.charCodeAt(0) == 78) {
        nomProvincia = "Napo";
    }
    if (placa.charCodeAt(0) == 79) {
        nomProvincia = "El Oro";
    }
    if (placa.charCodeAt(0) == 80) {
        nomProvincia = "Pichincha";
    }
    if (placa.charCodeAt(0) == 81) {
        nomProvincia = "Orellana";
    }
    if (placa.charCodeAt(0) == 82) {
        nomProvincia = "Los Ríos";
    }
    if (placa.charCodeAt(0) == 83) {
        nomProvincia = "Pastaza";
    }
    if (placa.charCodeAt(0) == 84) {
        nomProvincia = "Tungurahua";
    }
    if (placa.charCodeAt(0) == 85) {
        nomProvincia = "Cañar";
    }
    if (placa.charCodeAt(0) == 86) {
        nomProvincia = "Morona Santiago";
    }
    if (placa.charCodeAt(0) == 87) {
        nomProvincia = "Galápagos";
    }
    if (placa.charCodeAt(0) == 88) {
        nomProvincia = "Cotopaxi";
    }
    if (placa.charCodeAt(0) == 89) {
        nomProvincia = "Santa Elena";
    }
    if (placa.charCodeAt(0) == 90) {
        nomProvincia = "Zamora Chincipe";
    }
    return nomProvincia;
}

function obtenerTipoVehiculo(placa) {
    let tipoVehiculo = "Vehiculo Particular (Privado)";
    placa = recuperarTexto("txtPlaca");

    if (placa.charAt(1) < "A" || placa.charAt(1) > "Z") {
        tipoVehiculo = null;
    }
    if (placa.charAt(1) == "A" || placa.charAt(1) == "Z") {
        tipoVehiculo = "Vehiculo Comercial";
    }
    if (placa.charAt(1) == "E") {
        tipoVehiculo = "Vehiculo Gubernamental";
    }
    if (placa.charAt(1) == "X") {
        tipoVehiculo = "Vehiculo de uso Oficial";
    }
    if (placa.charAt(1) == "S") {
        tipoVehiculo = "Vehiculo del Gobierno Provincial";
    }
    if (placa.charAt(1) == "M") {
        tipoVehiculo = "Vehiculo Municipal"
    }

    return tipoVehiculo;
}

function obtenerDiaPicoYPlaca(placa) {
    let picoYplaca;
    let Vplaca;
    placa = recuperarTexto("txtPlaca");
    Vplaca = placa.charAt(placa.length - 1);
    if (Vplaca == "1" || Vplaca == "2") {
        picoYplaca = "Lunes"
    }
    if (Vplaca == "3" || Vplaca == "4") {
        picoYplaca = "Martes"
    }
    if (Vplaca == "5" || Vplaca == "6") {
        picoYplaca = "Miércoles"
    }
    if (Vplaca == "7" || Vplaca == "8") {
        picoYplaca = "Jueves"
    }
    if (Vplaca == "9" || Vplaca == "0") {
        picoYplaca = "Viernes"
    }

    return picoYplaca;
}