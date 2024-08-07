function jugar(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblResultado","Es mayor a 3\nGanaste\n:)")
    }else{
        cambiarTexto("lblResultado","Es menor a 3\nPerdiste\n:(")
    }
}

function lanzarDado(){
    let aleatorio;
    let numMult;
    let numEntero;
    let valorDado;
    aleatorio=Math.random();
    numMult=aleatorio*6;
    numEntero=parseInt(numMult);
    valorDado=numEntero+1;
    
    return valorDado;
}