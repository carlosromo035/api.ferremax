document.getElementById('nuevo').addEventListener('click', () => {
  // Limpiar formulario para nuevo cliente
  document.getElementById('clientForm').reset();
});

document.getElementById('listar').addEventListener('click', async () => {
  try {
      const response = await fetch('API_ENDPOINT_FOR_LISTAR');
      const data = await response.json();
      alert(data.map(client => client.rut).join('\n'));
  } catch (error) {
      alert('Error al listar clientes');
  }
});

document.getElementById('buscar').addEventListener('click', async () => {
  const id = document.getElementById('id').value;
  try {
      const response = await fetch(`API_ENDPOINT_FOR_BUSCAR/${id}`);
      const client = await response.json();
      document.getElementById('razonSocial').value = client.razonSocial;
      document.getElementById('rut').value = client.rut;
      document.getElementById('direccion').value = client.direccion;
      document.getElementById('nombre').value = client.nombre;
      document.getElementById('apellido').value = client.apellido;
      document.getElementById('telefono').value = client.telefono;
  } catch (error) {
      alert('Error al buscar cliente');
  }
});

document.getElementById('borrar').addEventListener('click', async () => {
  const id = document.getElementById('id').value;
  try {
      await fetch(`API_ENDPOINT_FOR_BORRAR/${id}`, { method: 'DELETE' });
      alert('Cliente borrado exitosamente');
      document.getElementById('clientForm').reset();
  } catch (error) {
      alert('Error al borrar cliente');
  }
});

document.getElementById('actualizar').addEventListener('click', async () => {
  const id = document.getElementById('id').value;
  const client = {
      razonSocial: document.getElementById('razonSocial').value,
      rut: document.getElementById('rut').value,
      direccion: document.getElementById('direccion').value,
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      telefono: document.getElementById('telefono').value,
  };

  try {
      await fetch(`API_ENDPOINT_FOR_ACTUALIZAR/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(client)
      });
      alert('Cliente actualizado exitosamente');
  } catch (error) {
      alert('Error al actualizar cliente');
  }
});
