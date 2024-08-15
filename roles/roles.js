let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]

function mostrarOpcionEmpleado() {
    let divEmpleado = mostrarComponente("divEmpleado");
    let divRol = ocultarComponente("divRol");
    let divResumen = ocultarComponente("divResumen");
}

function mostrarOpcionRol() {
    let divRol = mostrarComponente("divRol");
    let divEmpleado = ocultarComponente("divEmpleado");
    let divResumen = ocultarComponente("divResumen");
}

function mostrarOpcionResumen() {
    let divEmpleado = ocultarComponente("divEmpleado");
    let divRol = ocultarComponente("divRol");
    let divResumen = mostrarComponente("divResumen");
}
