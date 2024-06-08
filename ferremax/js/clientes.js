document.addEventListener("DOMContentLoaded", function() {
  // Simulación de datos
  let clientes = [
      {
          id: '1',
          razonSocial: 'Ferrer S.A.',
          rut: '12345678-9',
          direccion: 'Malaga 79',
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

  // Función para obtener los parámetros de la URL
  function obtenerParametro(nombre) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(nombre);
  }

  // Obtener el ID del cliente de los parámetros de la URL
  const idCliente = obtenerParametro('id');
  
  // Encontrar el cliente por ID
  const cliente = clientes.find(c => c.id === idCliente);

  if (cliente) {
      // Mostrar los detalles del cliente
      const detallesCliente = `
          <p><strong>ID:</strong> ${cliente.id}</p>
          <p><strong>Razón Social:</strong> ${cliente.razonSocial}</p>
          <p><strong>RUT:</strong> ${cliente.rut}</p>
          <p><strong>Dirección:</strong> ${cliente.direccion}</p>
          <p><strong>Nombre:</strong> ${cliente.nombre}</p>
          <p><strong>Apellido:</strong> ${cliente.apellido}</p>
          <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
      `;
      document.getElementById('infoCliente').innerHTML = detallesCliente;
  } else {
      // Si no se encuentra el cliente, mostrar un mensaje de error
      document.getElementById('infoCliente').innerHTML = '<p>Cliente no encontrado</p>';
  }

  // Manejar el clic del botón "Volver"
  document.getElementById('volver').addEventListener('click', function() {
      window.location.href = '/ferremax/index.html'; // Redirigir al index.html
  });
});
