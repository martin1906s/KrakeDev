let puntos=0;
let lanzamiento=5;
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamiento();
}
function modificarPuntos(numero){
    puntos+=numero;
    cambiarTexto("lblPuntos",puntos);
    if(puntos>20){
        cambiarTexto("lblResultado","GANASTE :)");
        limpiar();
    }
    
    
}
function modificarLanzamiento(){
    lanzamiento-=1
    cambiarTexto("lblLanzamiento",lanzamiento);
    if (lanzamiento==0){
        cambiarTexto("veredicto","GAME OVER!!!!: "+puntos+"pts.");
        limpiar(); 
    }

}
function limpiar(){
    cambiarTexto("lblPuntos",0);
    cambiarTexto("lblLanzamiento",5);
    puntos=0;
    lanzamiento=5;
    cambiarImagen("imgDado","") 
}
function mostrarCara(numero){
    if(numero==1){
        cambiarImagen("imgDado","dados1.png")
    }else if(numero==2){
        cambiarImagen("imgDado","dados2.png")
    }else if(numero==3){
        cambiarImagen("imgDado","dados3.png")
    }else if(numero==4){
        cambiarImagen("imgDado","dados4.png")
    }else if(numero==5){
        cambiarImagen("imgDado","dados5.png")
    }else if(numero==6){
        cambiarImagen("imgDado","dados6.png")
    }
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}