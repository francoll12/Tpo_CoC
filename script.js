


// Validación del formulario de contacto
document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    
    if (!nombre || !email || !mensaje) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault();
    }
});

