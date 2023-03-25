// Obtener referencia al formulario y a los campos del formulario
const form = document.querySelector('.formcontato__form');
const nombre = document.querySelector('input[name="nombre"]');
const email = document.querySelector('input[name="email"]');
const asunto = document.querySelector('input[name="asunto"]');
const mensaje = document.querySelector('textarea[name="mensaje"]');

// Agregar un manejador de eventos al enviar el formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Detener el envío del formulario

  // Verificar si los campos requeridos están completos
  if (nombre.value.trim() === '' || email.value.trim() === '' || asunto.value.trim() === '' || mensaje.value.trim() === '') {
    alert('Por favor complete todos los campos requeridos');
    return;
  }

  // Verificar si el correo electrónico tiene el formato correcto
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    alert('Por favor ingrese un correo electrónico válido');
    return;
  }

  // Si se llega hasta aquí, el formulario es válido y se puede enviar
  alert('Formulario enviado con éxito!');
  form.submit();
});
