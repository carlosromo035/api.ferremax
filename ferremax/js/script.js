document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    guardarCliente();
});

function guardarCliente() {
    var id = document.getElementById('id').value;
    var razonSocial = document.getElementById('razonSocial').value;
    var rut = document.getElementById('rut').value;
    var direccion = document.getElementById('direccion').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;

// Aquí puedes implementar el código para guardar los datos del cliente, por ejemplo, enviarlos a una base de datos
// Por ahora, simplemente mostraremos los datos en la consola
console.log("Cliente guardado:");
console.log("ID: " + id);
console.log("Razón Social: " + razonSocial);
console.log("RUT: " + rut);
console.log("Dirección: " + direccion);
console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Teléfono: " + telefono);
  }    
