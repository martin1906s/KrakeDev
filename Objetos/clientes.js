let clientes = [
    { cedula: "123456789", nombre: "Juan", edad: 20 },
    { cedula: "56789", nombre: "Mario", edad: 50 },
    { cedula: "09876456789", nombre: "Pepe", edad: 22 }];

function crearCliente() {
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarInt("txtEdad");
    let NuevoCliente={}
    NuevoCliente.cedula=valorCedula;
    NuevoCliente.nombre=valorNombre;
    NuevoCliente.edad=valorEdad;

    agragarCliente(NuevoCliente);

}

function agragarCliente(cliente) {
    let resultado = buscarCliente(cliente.cedula);
    if (resultado==null) {
        clientes.push(cliente); 
        alert("CLIENTE AGREGADO");
        mostrarClientes();
    }else{
        alert("YA ESISTE EL CLIENTE CON CEDULA: "+ cliente.cedula);
    }

}

function buscarCliente(cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}
function mostrarClientes() {
    let cmpTabla = document.getElementById("tablaClientes")
    let contenidoTabla = "<table border='1'><tr>" +
        "<th>Cedula</th>" +
        "<th>Nombre</th>" +
        "<th>Edad</th>"
        + "</tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>" + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

function guardarCambios() {
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarInt("txtEdad");
    let NuevoCliente={}
    NuevoCliente.cedula=valorCedula;
    NuevoCliente.nombre=valorNombre;
    NuevoCliente.edad=valorEdad;
    modificarCliente(NuevoCliente);
    mostrarClientes();
}
function modificarCliente(cliente) {
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if (clienteEncontrado!=null) {
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }

}
function ejecutarBusqueda() {
    let busquedaCedula=recuperarTexto("txtBusquedaCedula");
    let respuesta=buscarCliente(busquedaCedula);
    if (respuesta==null) {
        alert("CLIENTE NO ENCONTRADO");
    }else{
        alert("CLIENTE ENCONTRADO");
        mostrarTextoEnCaja("txtCedula",respuesta.cedula);
        mostrarTextoEnCaja("txtNombre",respuesta.nombre);
        mostrarTextoEnCaja("txtEdad",respuesta.edad);

    }
    
}