function calcularPromedioNotas(){
    let n1;
    let n2;
    let n3;
    let promedio;
    n1=recuperarFlotante("n1");
    n2=recuperarFlotante("n2");
    n3=recuperarFlotante("n3");
    promedio=calcularPromedio(n1,n2,n3);
    promedio=promedio.toFixed(2);
    cambiarTexto("Promedio","Promedio: "+promedio);
    if(promedio<5 && promedio>0){
        cambiarTexto("Resultado","Resultado: REPROBADO")
        cambiarImagen("img","./imagen/reprobado.gif")
    }else if(promedio>=5 && promedio<=8){
        cambiarTexto("Resultado","Resultado: BUEN TRABAJO")
        cambiarImagen("img","./imagen/buentrabajo.gif")
    }else if(promedio>8 && promedio<=10){
        cambiarTexto("Resultado","Resultado: EXCELENTE")
        cambiarImagen("img","./imagen/excelente.gif")
    }else{
        cambiarTexto("Resultado","Resultado: DATOS INCORRECTOS")
        cambiarImagen("img","./imagen/error.gif")
    }
}