let notas = [];
function agregarElementos() {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

function probarArreglar() {
    let notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

function agregarNota(nota) {
    notas.push(nota);
}

function recorrerArreglo() {
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}

function calcularPromedio() {
    let sumaNotas=0;
    let promedio;
    for(let i=0;i<notas.length;i++){
        sumaNotas+=notas[i];
    }
    promedio=sumaNotas/notas.length
    return promedio;
}

function ejecutarPromedio() {
    let r=calcularPromedio();
    mostrarTexto("lblPromedio",r);
}