const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  const text = input.value.trim();
  if (text.length > 0) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    input.value = '';
  }
});

// Obtener la lista de tareas y el botón de borrar lista
const list = document.querySelector('ul');
const clearListButton = document.querySelector('#clear-list');

// Agregar un controlador de eventos al botón de borrar lista
clearListButton.addEventListener('click', () => {
  // Borrar todos los elementos de la lista
  list.innerHTML = '';
});
