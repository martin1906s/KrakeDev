let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1715614788", nombre: "Alexandra", apellido: "Flores", sueldo: 1200.0 }
]
let esNuevo = false;
let roles = [];
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
    deshabilitar();
}

function mostrarOpcionRol() {
    let divRol = mostrarComponente("divRol");
    let divEmpleado = ocultarComponente("divEmpleado");
    let divResumen = ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
}

function buscarPorRol() {
    let cmpRol = recuperarTexto("txtBusquedaCedulaRol");
    let empleadoBuscado = buscarEmpleado(cmpRol);
    if (empleadoBuscado == null) {
        alert("EMPLEADO NO ENCONTRADO")
    } else {
        mostrarTexto("infoCedula", empleadoBuscado.cedula);
        mostrarTexto("infoNombre", empleadoBuscado.nombre + " " + empleadoBuscado.apellido);
        mostrarTexto("infoSueldo", empleadoBuscado.sueldo);
    }
}

function buscarRol(cedula) {
    let buscaRol;
    let rolEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        buscaRol = roles[i];
        if (buscaRol.cedula == cedula) {
            rolEncontrado = buscaRol;
            break;
        }
    }
    return rolEncontrado;
}

function agregarRol(rol) {
    let rolAgregado = buscarRol(rol.cedula);
    if (rolAgregado == null) {
        roles.push(rol);
        alert("EXITO");
    } else {
        alert("ERROR");
    }
}

function calcularAporteEmpleador(sueldo) {
    let aporteEmpleador=(sueldo*11.15)/100;
    return aporteEmpleador;
}

function guardarRol() {
    let valorAPagar=recuperarFloatDiv("infoPago");
    let aporteEmpleado=recuperarFloatDiv("infoIESS");
    let nombre=recuperarTextoDiv("infoNombre");
    let cedula=recuperarTextoDiv("infoCedula");
    let sueldo=recuperarFloatDiv("infoSueldo");
    let aporteEmpleador=calcularAporteEmpleador(sueldo);
    let rol={};
    rol.cedula=cedula;
    rol.nombre=nombre;
    rol.sueldo=sueldo;
    rol.valorAPAgar=valorAPagar;
    rol.aporteEmpleado=aporteEmpleado;
    rol.aporteEmpleador=aporteEmpleador;
    agregarRol(rol);
    alert("ROL GUARDADO");
    deshabilitarComponente("btnGuardarRol");
}

function calcularAporteEmpleado(sueldo) {
    let aporteEmpleado = (sueldo * 9.45) / 100;
    return aporteEmpleado;
}

function calcularValorApagar(sueldo, iess, descuento) {
    iess = calcularAporteEmpleado(sueldo)
    let valorAPagar = sueldo - iess - descuento
    return valorAPagar;
}

function calcularRol() {
    let sueldo = recuperarTextoDiv("infoSueldo");
    let desuento = recuperarFloat("txtDescuentos");
    if (isNaN(desuento)) {
        mostrarTexto("lblErrorDescuentos", "EL DESCUENTO DEBE SER UN NÚMERO DECIMAL");
    } else {
        mostrarTexto("lblErrorDescuentos", "");
        if (desuento < 0) {
            mostrarTexto("lblErrorDescuentos", "EL DESCUENTO DEBE SER MAYOR A 0");
        } else if (desuento > sueldo) {
            mostrarTexto("lblErrorDescuentos", "EL DESCUENTO DEBE SER MENOR QUE " + sueldo + "$");
        } else {
            mostrarTexto("lblErrorDescuentos", "");
        }
        let aporteEmpleado = calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS", aporteEmpleado);
        let valorAPagar = calcularValorApagar(sueldo, aporteEmpleado, desuento);
        mostrarTexto("infoPago", valorAPagar);
        habilitarComponente("btnGuardarRol")
    }
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
    esNuevo = true;
}

function buscarEmpleado(cedula) {
    let buscarEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        buscarEmpleado = empleados[i];
        if (buscarEmpleado.cedula == cedula) {
            empleadoEncontrado = buscarEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

function agregarEmpleado(empleado) {
    let empleadoAgregado = buscarEmpleado(empleado.cedula);
    if (empleadoAgregado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}




function guardar() {
    let valorCedula = recuperarTexto("txtCedula");
    if (valorCedula.length != 10) {
        mostrarTexto("lblErrorCedula", "DEBE CONTENER 10 DIGITOS");
        return;
    } else {
        mostrarTexto("lblErrorCedula", "");
    }
    for (let i = 0; i < valorCedula.length; i++) {
        let digitoCedula = valorCedula.charCodeAt(i);
        if (digitoCedula < 48 || digitoCedula > 57) {
            mostrarTexto("lblErrorCedula", "DEBE CONTENER SOLO DIGITOS");
            break;
        } else {
            mostrarTexto("lblErrorCedula", "");
        }
    }
    let valorNombre = recuperarTexto("txtNombre");
    if (valorNombre.length < 3) {
        mostrarTexto("lblErrorNombre", "EL NOMBRE DEBE TENER MÍNIMO 3 CARACTERES");
        return;
    } else {
        mostrarTexto("lblErrorNombre", "");
    }
    for (let i = 0; i < valorNombre.length; i++) {
        let caracterNombre = valorNombre.charCodeAt(i);
        if (caracterNombre < 65 || caracterNombre > 90) {
            mostrarTexto("lblErrorNombre", "LAS LETRAS DEBEN SER MAYÚSCULAS");
            break;
        } else {
            mostrarTexto("lblErrorNombre", "");
        }
    }
    let valorApellido = recuperarTexto("txtApellido");
    if (valorApellido.length < 3) {
        mostrarTexto("lblErrorApellido", "EL APELLIDO DEBE TENER MÍNIMO 3 CARACTERES");
        return;
    } else {
        mostrarTexto("lblErrorApellido", "");
    }
    for (let i = 0; i < valorApellido.length; i++) {
        let caracterApellido = valorApellido.charCodeAt(i);
        if (caracterApellido < 65 || caracterApellido > 90) {
            mostrarTexto("lblErrorApellido", "LAS LETRAS DEBEN SER MAYÚSCULAS");
            break;
        } else {
            mostrarTexto("lblErrorApellido", "");
        }
    }
    let valorSueldo = recuperarFloat("txtSueldo");
    if (isNaN(valorSueldo)) {
        mostrarTexto("lblErrorSueldo", "EL SUELDO DEBE SER UN NÚMERO DECIMAL");
        return;
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }
    if (valorSueldo < 400) {
        mostrarTexto("lblErrorSueldo", "EL SUELDO DEBE SER MAYOR A 400$");
        return;
    } else if (valorSueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "EL SUELDO DEBE SER MENOR A 5000$");
        return;
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }
    if (esNuevo == true) {
        let empleados = {};
        empleados.cedula = valorCedula;
        empleados.nombre = valorNombre;
        empleados.apellido = valorApellido;
        empleados.sueldo = valorSueldo;
        let nuevoEmpleado = agregarEmpleado(empleados);
        if (nuevoEmpleado == true) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitar();
            esNuevo = false;
        } else {
            alert("YA EXISTE UN EMPLEADO CON CEDULA: " + empleados.cedula);
            let empleadoEncontrado = buscarEmpleado(valorCedula);
            empleadoEncontrado.nombre = valorNombre;
            empleadoEncontrado.apellido = valorApellido;
            empleadoEncontrado.sueldo = valorSueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            deshabilitar()
        }
    }
}

function deshabilitar() {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");

}

function habilitar() {
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");

}

function ejecutarBusqueda() {
    let valorCedula = recuperarTexto("txtBusquedaCedula");
    let empleadoBuscado = buscarEmpleado(valorCedula);
    if (empleadoBuscado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        alert("EMPLEADO ENCONTRADO");
        mostrarTextoEnCaja("txtCedula", empleadoBuscado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoBuscado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoBuscado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoBuscado.sueldo);
        habilitar();
        deshabilitarComponente("txtCedula");
    }
}

function limpiar() {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo = false;
    deshabilitar();
}