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
}