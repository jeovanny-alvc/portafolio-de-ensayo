// script.js

// Validación del formulario de contacto
const form = document.querySelector('.contacto__formulario');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const email = document.querySelector('input[placeholder="Correo Electrónico"]').value;
    const mensaje = document.querySelector('textarea[placeholder="Mensaje"]').value;

    // Verificar que todos los campos estén completos
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        alert(`¡Gracias por tu mensaje, ${nombre}!`);
        form.reset();
    }
});

// Navegación suave entre secciones
const links = document.querySelectorAll('.cabecera__menu a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionID = link.getAttribute('href').substring(1);
        document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    });
});

// Mensaje de bienvenida dinámico
window.addEventListener('load', () => {
    const greetingMessage = document.createElement('p');
    greetingMessage.textContent = '¡Bienvenido a mi portafolio! Espero que disfrutes navegando por él.';
    greetingMessage.style.textAlign = 'center';
    greetingMessage.style.fontSize = '1.2rem';
    greetingMessage.style.margin = '20px';
    document.body.insertBefore(greetingMessage, document.body.firstChild);
});
