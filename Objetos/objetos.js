function probarAtributos() {
    let persona = {
        nombre: "Martín",
        apellido: "Simbaña",
        edad: 17,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("Muerto");

    } else {
        console.log("Vivo");

    }
}

function crearProducto() {
    let producto1={
        nombre: "Cepillo",
        precio: 1.75,
        stock: 5
    }
    let producto2={
        nombre: "Pasta",
        precio: 3.50,
        stock: 16
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);

    if (producto1.stock>producto2.stock) {
        console.log("Producto 1 tiene mayor stock");      
    }
    if (producto1.stock<producto2.stock) {
        console.log("Producto 2 tiene mayor stock");      
    }
    if (producto1.stock==producto2.stock) {
        console.log("Ambos tienen el mismo stock");      
    }
    
}