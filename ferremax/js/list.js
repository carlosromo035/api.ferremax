document.getElementById('backButton').addEventListener('click', () => {
    window.location.href = 'index.html';
});

window.addEventListener('load', () => {
    // Llamar a la API para obtener la lista de clientes
    fetch('https:')
        .then(response => response.json())
        .then(data => displayClientList(data))
        .catch(error => console.error('Error:', error));
});

function displayClientList(clients) {
    const clientListDiv = document.getElementById('clientList');
    let html = '<ul>';
    clients.forEach(client => {
        html += `
            <li>
                <strong>ID:</strong> ${client.id} <br>
                <strong>Razón Social:</strong> ${client.razonSocial} <br>
                <strong>RUT:</strong> ${client.rut} <br>
                <strong>Dirección:</strong> ${client.direccion} <br>
                <strong>Nombre:</strong> ${client.nombre} <br>
                <strong>Apellido:</strong> ${client.apellido} <br>
                <strong>Teléfono:</strong> ${client.telefono} <br><br>
            </li>
        `;
    });
    html += '</ul>';
    clientListDiv.innerHTML = html;
}
