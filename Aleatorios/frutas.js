let frutas = ["pera","manzana","banana"];

function probarBusqueda() {
    let frutaIngresada=recuperarTexto("lblFruta");
    let resultado=buscar(frutaIngresada);
    if(resultado==null){
        alert("NO HAY");
    }else{
        alert(frutaIngresada+" EXISTE EN LA CESTA");
    }
}


function buscar(fruta) {
    let elemento;
    let frutaEncontrada = null
    for (let i = 0; i < frutas.length; i++) {
        elemento = frutas[i];
        if (fruta == elemento) {
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}