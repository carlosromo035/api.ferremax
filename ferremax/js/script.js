// Simulación de datos
let clientes = [
    {
      id: '1',
      razonSocial: 'Ferrer S.A.',
      rut: '12345678-9',
      direccion: 'malaga 79',
      nombre: 'Juan',
      apellido: 'Pérez',
      telefono: '960500400'
    },
    {
      id: '2',
      razonSocial: 'Aceros Chile',
      rut: '9000200-1',
      direccion: 'Calle mas afuera',
      nombre: 'Leonardo',
      apellido: 'Gomez',
      telefono: '950400300'
    }
  ];

// Función para validar
function validarRut(rut) {
    return true; // Reemplazar 
}

// Función para buscar cliente por RUT
document.getElementById('buscar').addEventListener('click', function() {
    const rut = prompt('Ingrese el RUT del cliente:');
    if (rut !== null) {
        const cliente = clientes.find(c => c.rut === rut.trim());

        if (cliente) {
            // Redireccionar a clientes.html con el ID del cliente como parámetro en la URL
            window.location.href = `/ferremax/clientes/clientes.html?id=${cliente.id}`;
        } else {
            alert('Cliente no encontrado');
        }
    }
});

// Función para ver lista de RUTs
document.getElementById('verLista').addEventListener('click', function() {
    const listaRuts = clientes.map(c => c.rut).join('\n');
    alert('Lista de RUTs:\n' + listaRuts);
});

// Función para guardar cliente
document.getElementById('guardar').addEventListener('click', function() {
    const id = document.getElementById('id').value;
    const razonSocial = document.getElementById('razonSocial').value;
    const rut = document.getElementById('rut').value.trim();
    const direccion = document.getElementById('direccion').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
  
    // Validación de datos completos y formato RUT
    if (!id || !razonSocial || !rut || !direccion || !nombre || !apellido || !telefono || !validarRut(rut)) {
      alert('Datos incorrectos o RUT inválido');
      return;
    }
  
    const clienteExistente = clientes.find(c => c.rut === rut);
    if (clienteExistente && clienteExistente.id !== id) {
      alert('El cliente con este RUT ya existe');
      return;
    }
  
    const nuevoCliente = { id, razonSocial, rut, direccion, nombre, apellido, telefono };
    if (clienteExistente) {
      // Actualizar cliente existente
      const index = clientes.findIndex(c => c.id === id);
      clientes[index] = nuevoCliente;
    } else {
      // Agregar nuevo cliente
      clientes.push(nuevoCliente);
    }
  
    alert('Cliente guardado exitosamente');
    limpiarFormulario();
});

// Función para limpiar el formulario
document.getElementById('nuevo').addEventListener('click', function() {
    limpiarFormulario();
});

function limpiarFormulario() {
    document.getElementById('id').value = '';
    document.getElementById('razonSocial').value = '';
    document.getElementById('rut').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('telefono').value = '';
}
