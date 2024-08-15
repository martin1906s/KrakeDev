let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1715614788", nombre: "Alexandra", apellido: "Flores", sueldo: 1200.0 }
]
let esNuevo = false;

function mostrarEmpleados() {
    let cmpTabla = document.getElementById("tablaEmpleados")
    let contenidoTabla = "<table border='3' style='border-radius: 30px; border-color: red;'><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>"
        + "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
function mostrarOpcionEmpleado() {
    mostrarEmpleados()
    let divEmpleado = mostrarComponente("divEmpleado");
    let divRol = ocultarComponente("divRol");
    let divResumen = ocultarComponente("divResumen");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
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

function ejecutarNuevo() {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
}
