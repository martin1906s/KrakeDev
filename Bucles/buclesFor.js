function mostrarNumeros() {
    console.log("Antes del for");
    for(let i=0;i<4;i++){
        console.log(i);
    }
    console.log("Despúes del for");
}

function mostrarNumeros2() {
    console.log("Antes del for");
    for(let indice=1;indice<=5;indice++){
        console.log(indice);
    }
    console.log("Despúes del for");
}

function mostrarPares() {
    console.log("Antes del for");
    for(let par=2;par<=10;par+=2){
        console.log(par);
    }
    console.log("Despúes del for");
}

function mostrarInverso() {
    for(let inverso=10;inverso>0;inverso-=1){
        console.log(inverso);
    }
}

function hackeandoNasaPelis() {
    for(let nasa=0;nasa<=100;nasa+=10){
        console.log("Hackeando Nasa "+nasa+"%");
    }
    console.log("La nasa ha sido hackeada");    
}

function mostrarInpares() {
    console.log("Antes del for");
    for(let inpar=1;inpar<=21;inpar+=2){
        console.log(inpar);
    }
    console.log("Despúes del for");
}