function calcularTasaInteres(ingresoAnual) {
    let ingresoAnualFloat=parseFloat(ingresoAnual);
    let tasa=0;
    if(ingresoAnualFloat>=0 && ingresoAnualFloat<300000){
        tasa=16;
    }else if(ingresoAnualFloat>=300000 && ingresoAnualFloat<500000){
        tasa=15;
    }else if(ingresoAnualFloat>=500000 && ingresoAnualFloat<1000000){
        tasa=14;
    }else if(ingresoAnualFloat>=1000000 && ingresoAnualFloat<2000000){
        tasa=13;
    }else if(ingresoAnualFloat>=2000000){
        tasa=12;
    }
    return tasa;
}

function calcularCapacidadPago(edad,ingresos,egresos) {
    let edadInt=0;
    edadInt=parseInt(edad);
    let ingresosFl=0;
    ingresosFl=parseFloat(ingresos);
    let egresosFl=0;
    egresosFl=parseFloat(egresos);
    let capacidad;
    if(edad>50){
        capacidad=(egresosFl-ingresosFl)*0.3;
    }else{
        capacidad=(egresosFl-ingresosFl)*0.4;
    }
    return capacidad;  
}

function calcularDescuento(precio,cantidad) {
    let precioFl;
    precioFl=parseFloat(precio);
    let cantInt;
    cantInt=parseInt(cantidad);
    let descuento;
    let total;
    if(cantInt>=3 && cantInt<=5){
        descuento=0.02;
    }else if(cantInt>=6 && cantInt<=11){
        descuento=0.03;
    }else if(cantInt>=12){
        descuento=0.04;
    }
    total=(precioFl*cantInt)*(1-descuento);
    return total;
}

function determinarColesterolLDL(nivelColesterolFl) {
    let txtColesterol;
    let nivelColesterol=parseFloat(nivelColesterolFl);
    if(nivelColesterol>=0 && nivelColesterol<100){
        txtColesterol="Óptimo (Lo mejor para su salud)";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        txtColesterol="Casi óptimo";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        txtColesterol="Límite superior del rango normal";
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        txtColesterol="Alto";
    }else if(nivelColesterol>=190){
        txtColesterol="Muy alto";
    }
    return txtColesterol; 
}

function validarClave(clave){
    let resultado;
    let tamanioClave=clave.length;
    if(tamanioClave<8 && tamanioClave>16){
        resultado=false;
    }else{
        resultado=true;
    }
    return resultado;
}

function esMayuscula(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=65 && codigoAscii<=90){
        return true;
    }else{
        return false;
    }
}

function esMinuscula(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=97 && codigoAscii<=122 || codigoAscii>=160 && codigoAscii<=163 || codigoAscii==130){
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

function darPermiso(notaMatematicaFl,notaFisicaFl,notaGeometriaFl){
    let notaMatematica=parseFloat(notaMatematicaFl);
    let notaFisica=parseFloat(notaFisicaFl);
    let notaGeometria=parseFloat(notaGeometriaFl);
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}


function otorgarPermiso(notaMatematicaFl,notaFisicaFl,notaGeometriaFl){
    let notaMatematica=parseFloat(notaMatematicaFl);
    let notaFisica=parseFloat(notaFisicaFl);
    let notaGeometria=parseFloat(notaGeometriaFl);
    if((notaMatematica>90 || notaFisica>90) && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}

function dejarSalir(notaMatematicaFl,notaFisicaFl,notaGeometriaFl){
    let notaMatematica=parseFloat(notaMatematicaFl);
    let notaFisica=parseFloat(notaFisicaFl);
    let notaGeometria=parseFloat(notaGeometriaFl);
    if((notaMatematica>90 || notaFisica>90 || notaGeometria>90) && notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }
}