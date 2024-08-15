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
    let producto1 = {
        nombre: "Cepillo",
        precio: 1.75,
        stock: 5
    }
    let producto2 = {
        nombre: "Pasta",
        precio: 3.50,
        stock: 16
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);

    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    }
    if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    }
    if (producto1.stock == producto2.stock) {
        console.log("Ambos tienen el mismo stock");
    }

}

function modificarAtributos() {
    let cuenta = {
        numero: "57364875638",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);

}

function crearCliente() {
    let cliente = {
        cedula: "1751013192",
        nombre: "Martín"
    }
    let cliente1 = {}
    cliente1.nombr = "Yolo";
}

function probarIncrementoSaldo() {
    let cta = {
        numero: "23422",
        saldo: 34.9
    }
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
    
}

function incrementarSaldo(cuenta, monto) {
    cuenta.saldo += monto;

}

function probarDeterminarMayor() {
    let p1={
        nombre: "Martín",
        edad: 17
    }
    let p2={
        nombre: "Wendy",
        edad: 34
    }
    let mayor=determinarMayor(p1,p2);
    if (mayor!=null) {
        console.log("El mayor es: "+mayor.nombre);
    }
}

function determinarMayor(persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona2.edad > persona1.edad) {
        return persona2;
    } else {
        return null;
    }
}