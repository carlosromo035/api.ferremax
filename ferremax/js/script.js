document.getElementById('searchButton').addEventListener('click', searchClient);
document.getElementById('listButton').addEventListener('click', listClients);
document.getElementById('newButton').addEventListener('click', newSearch);

function searchClient() {
    const id = document.getElementById('searchInput').value;
    if (id) {
        // Llamar a la API para buscar cliente por ID
        fetch(`https://${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se encontraron datos para este ID');
                }
                return response.json();
            })
            .then(data => displayClient(data))
            .catch(error => displayError(error.message));
    } else {
        alert('Por favor, ingrese un ID de cliente.');
    }
}

function listClients() {
    // Redirije a lista clientes
    window.location.href = 'list.html';
}

function newSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('result').innerHTML = '';
}

function displayClient(client) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Información del Cliente</h2>
        <p>ID: ${client.id}</p>
        <p>Razón Social: ${client.razonSocial}</p>
        <p>RUT: ${client.rut}</p>
        <p>Dirección: ${client.direccion}</p>
        <p>Nombre: ${client.nombre}</p>
        <p>Apellido: ${client.apellido}</p>
        <p>Teléfono: ${client.telefono}</p>
    `;
}

function displayError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}
