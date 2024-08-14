function numeroAleatorio() {
    let randomFl=Math.random()
    let random=randomFl*100
    random=parseInt(random)+1;
    return random;
}

function generarAleatorios() {
    let aleatorios=[];
    let Raleatorio;
    let recuperaNumero=recuperarInt("txtNumero");
    if (recuperaNumero>=5 && recuperaNumero<=20) {
        for(let i=0;i<recuperaNumero;i++){
            console.log(i);
            Raleatorio=numeroAleatorio();
            aleatorios.push(Raleatorio);
        }
        mostrarResultados(aleatorios);
    }
}


function mostrarResultados(arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table border='2'>";
    for (let i = 0; i < arregloNumeros.length; i++) {
        contenidoTabla += "<tr><td>" + arregloNumeros[i] + "</tr></td>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}