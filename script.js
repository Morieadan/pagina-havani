// script.js - Rediseño inspirado en Pulsar

// Función para animar elementos al hacer scroll usando la clase .reveal
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal'); // Selecciona elementos con la clase .reveal

    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger cuando el 10% del elemento es visible
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Añade la clase active si es visible
                // Opcional: Dejar de observar una vez que se ha revelado
                // observer.unobserve(entry.target);
            } else {
                 // Opcional: Remover la clase si sale de la vista (para re-animar)
                 // entry.target.classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    reveals.forEach(reveal => {
        observer.observe(reveal); // Observa cada elemento .reveal
    });
};

// Llama a la función para iniciar la observación
revealElements();


// --- Efecto de brillo sutil siguiendo al cursor ---
// (Inspirado en efectos similares, puede requerir ajustes)

const addSpotlightEffect = () => {
    const spotlight = document.createElement('div');
    spotlight.style.position = 'fixed';
    spotlight.style.width = '400px'; // Tamaño del brillo
    spotlight.style.height = '400px';
    spotlight.style.borderRadius = '50%';
    // Gradiente radial para el brillo, usando colores primario/secundario
    spotlight.style.background = `radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0) 60%)`;
    spotlight.style.pointerEvents = 'none'; // No interferir con clics
    spotlight.style.zIndex = '-1'; // Detrás del contenido pero sobre el fondo base
    spotlight.style.transform = 'translate(-50%, -50%)'; // Centrar en el cursor
    spotlight.style.transition = 'opacity 0.2s ease-out'; // Transición suave
    spotlight.style.opacity = '0'; // Oculto inicialmente

    document.body.appendChild(spotlight);

    let timeoutId;

    document.addEventListener('mousemove', (e) => {
        clearTimeout(timeoutId); // Limpiar timeout anterior
        spotlight.style.opacity = '1'; // Mostrar al mover
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;

        // Ocultar después de un breve retraso si el mouse deja de moverse
        timeoutId = setTimeout(() => {
            spotlight.style.opacity = '0';
        }, 300); // 300ms de inactividad para ocultar
    });

     // Ocultar si el cursor sale de la ventana
    document.addEventListener('mouseleave', () => {
        clearTimeout(timeoutId);
        spotlight.style.opacity = '0';
    });
     // Mostrar si el cursor entra de nuevo
     document.addEventListener('mouseenter', () => {
        spotlight.style.opacity = '1'; // Puede necesitar ajuste si se quiere oculto al entrar
    });
};

// Añadir el efecto de brillo
addSpotlightEffect();


// --- Eliminar código anterior no necesario ---
/*
// Efecto 3D en botones (hover) - Ya no se usa este estilo
const buttons = document.querySelectorAll('.btn-neon');

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
    });
});
*/

// Puedes agregar más interacciones aquí si es necesario.
