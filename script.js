// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Nav Link on Scroll
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

// Scroll Animation
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

// EmailJS Configuration 
// Contact Form Handler
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
        
        // Validar que todos los campos estén llenos
        if (!nombre || !email || !asunto || !mensaje) {
            mensajeEnvio.className = 'alert alert-warning mt-3';
            mensajeEnvio.innerHTML = '<i class="bi bi-exclamation-triangle me-2"></i>Por favor, completa todos los campos.';
            mensajeEnvio.style.display = 'block';
            return;
        }
        
        // Crear el enlace mailto con el contenido del formulario
        const subject = encodeURIComponent(asunto);
        const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`);
        const mailtoLink = `mailto:adrian.valdes.profesional@gmail.com?subject=${subject}&body=${body}`;
        
        // Abrir el cliente de correo del usuario
        window.location.href = mailtoLink;
        
        // Mostrar mensaje de éxito
        mensajeEnvio.className = 'alert alert-success mt-3';
        mensajeEnvio.innerHTML = '<i class="bi bi-check-circle me-2"></i>Se abrirá tu cliente de correo. Si no se abre automáticamente, puedes enviarme un email a: <a href="mailto:adrian.valdes.profesional@gmail.com" class="alert-link">adrian.valdes.profesional@gmail.com</a>';
        mensajeEnvio.style.display = 'block';
        
        // Resetear formulario después de un momento
        setTimeout(() => {
            document.getElementById('contactForm').reset();
            mensajeEnvio.style.display = 'none';
        }, 10000);
    });
});


// Initialize on page load
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

// Skill Badge Hover Effect
document.querySelectorAll('.skill-list .badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

