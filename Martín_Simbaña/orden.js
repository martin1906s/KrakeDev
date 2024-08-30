let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
]

function agregarPersona() {
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorEdad", "");
    if (nombre.length < 3) {
        mostrarTexto("lblErrorNombre", "Debe Tener Mínimo 3 Caracteres");
    } else if (edad < 0 || edad > 100 || isNaN(edad)) {
        mostrarTexto("lblErrorEdad", "Debe Estar En Un Rango Entre 0 y 100");
    } else {
        let nuevaPersona = {};
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert(nombre + " Se agregó correctamente");
        mostrarPersonas();
    }

}

function mostrarPersonas() {
    let cmpTabla = document.getElementById("tablaPersonas")
    let contenidoTabla = "<table border='3' style='border-radius: 10px; border-color: red;'><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>"
        + "</tr>";
    let elementoPersona;
    for (let i = 0; i < personas.length; i++) {
        elementoPersona = personas[i];
        contenidoTabla +=
            "<tr><td>" + elementoPersona.edad + "</td>"
            + "<td>" + elementoPersona.nombre + "</td>"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

function encontrarMayor() {
    let personaMayor = personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        if (elementoPersona.edad>personaMayor.edad) {
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}

function determinarMayor() {
    let mayor=encontrarMayor();
    mostrarTexto("personaMayor", mayor.nombre +" "+ mayor.edad+" AÑOS")    
}

function encontrarMenor() {
    let personaMenor = personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        if (elementoPersona.edad<personaMenor.edad) {
            personaMenor=elementoPersona;
        }
    }
    return personaMenor;
}

function determinarMenor() {
    let menor=encontrarMenor();
    mostrarTexto("personaMenor", menor.nombre +" "+ menor.edad+" AÑOS")    
}