// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Scroll Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .about-content');
    animateElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
});

// ===== EmailJS Configuration =====
// INSTRUCCIONES PARA CONFIGURAR EMAILJS:
// 1. Crea una cuenta gratuita en https://www.emailjs.com/
// 2. Ve a "Email Services" y conecta tu servicio de email (Gmail, Outlook, etc.)
// 3. Ve a "Email Templates" y crea una nueva plantilla con estos campos:
//    - from_name: {{from_name}}
//    - from_email: {{from_email}}
//    - subject: {{subject}}
//    - message: {{message}}
// 4. Ve a "Account" > "General" y copia tu "Public Key"
// 5. Ve a "Email Services" y copia tu "Service ID"
// 6. Ve a "Email Templates" y copia tu "Template ID"
// 7. Reemplaza los valores 'YOUR_PUBLIC_KEY', 'YOUR_SERVICE_ID' y 'YOUR_TEMPLATE_ID' abajo

// Inicializar EmailJS cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Reemplaza 'YOUR_PUBLIC_KEY' con tu Public Key de EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("YOUR_PUBLIC_KEY"); // Reemplaza con tu Public Key de EmailJS
    }
});

// ===== Contact Form Handler =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btnEnviar = document.getElementById('btnEnviar');
    const mensajeEnvio = document.getElementById('mensajeEnvio');
    const nombre = document.getElementById('nombreContacto').value;
    const email = document.getElementById('emailContacto').value;
    const asunto = document.getElementById('asuntoContacto').value;
    const mensaje = document.getElementById('mensajeContacto').value;
    
    // Deshabilitar botón mientras se envía
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';
    mensajeEnvio.style.display = 'none';
    
    // Parámetros para EmailJS
    // Nota: Necesitarás configurar un servicio y plantilla en EmailJS
    // Reemplaza 'YOUR_SERVICE_ID' y 'YOUR_TEMPLATE_ID' con tus IDs
    const templateParams = {
        from_name: nombre,
        from_email: email,
        subject: asunto,
        message: mensaje,
        to_email: 'adrian.valdes.profesional@gmail.com'
    };
    
    // Enviar email usando EmailJS
    // Reemplaza 'YOUR_SERVICE_ID' y 'YOUR_TEMPLATE_ID' con tus IDs de EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            // Éxito
            mensajeEnvio.className = 'alert alert-success mt-3';
            mensajeEnvio.innerHTML = '<i class="bi bi-check-circle me-2"></i>¡Mensaje enviado correctamente! Te responderé pronto.';
            mensajeEnvio.style.display = 'block';
            
            // Resetear formulario
            document.getElementById('contactForm').reset();
            
            // Restaurar botón
            btnEnviar.disabled = false;
            btnEnviar.innerHTML = '<i class="bi bi-send me-2"></i>Enviar Mensaje';
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                mensajeEnvio.style.display = 'none';
            }, 5000);
        }, function(error) {
            // Error
            mensajeEnvio.className = 'alert alert-danger mt-3';
            mensajeEnvio.innerHTML = '<i class="bi bi-exclamation-triangle me-2"></i>Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente en adrian.valdes.profesional@gmail.com';
            mensajeEnvio.style.display = 'block';
            
            // Restaurar botón
            btnEnviar.disabled = false;
            btnEnviar.innerHTML = '<i class="bi bi-send me-2"></i>Enviar Mensaje';
            
            console.error('Error al enviar email:', error);
        });
    });
});

// ===== Typing Effect (Optional - for hero section) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.6s ease-in-out';
    });
    
    // Fade in sections on scroll
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Set initial opacity for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '1';
    }
});

// ===== Project Card Click Handler =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Prevent navigation if clicking on buttons
        if (!e.target.closest('.project-links')) {
            const projectLink = this.querySelector('.project-links a');
            if (projectLink) {
                // You can add custom behavior here
            }
        }
    });
});

// ===== Skill Badge Hover Effect =====
document.querySelectorAll('.skill-list .badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

