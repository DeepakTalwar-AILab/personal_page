// Navbar scroll effect
const navbar = document.getElementById('navbar');
const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Intersection Observer for smooth animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Enhanced animation system
document.addEventListener('DOMContentLoaded', () => {
    // Observe sections for entrance animations
    const sections = document.querySelectorAll('.section-entrance');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe work cards for staggered animations
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe other elements for fade-in
    const fadeElements = document.querySelectorAll('.intro-content, .about-content, .contact-content');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        
        // Simple validation
        if (!name || !email) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to your backend
        // For now, we'll just show a success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Enhanced micro-interactions with smooth easing
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.03)';
        this.style.transition = 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.transition = 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    });
});

// Enhanced work card hover effects
document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
        this.style.transition = 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    });
});

// Enhanced portrait hover effect
document.querySelectorAll('.portrait-placeholder').forEach(portrait => {
    portrait.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
        this.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    });
    
    portrait.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment the following lines if you want a typing effect on the hero title
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
// }

// Enhanced parallax effect with smooth easing
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroBackground) {
        const yPos = -(scrolled * 0.4);
        heroBackground.style.transform = `translateY(${yPos}px)`;
    }
    
    if (heroContent) {
        const yPos = scrolled * 0.2;
        heroContent.style.transform = `translateY(${yPos}px)`;
    }
    
    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestParallaxUpdate, { passive: true });

// Cursor trail effect (optional premium feature)
class CursorTrail {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'cursor-trail';
        this.cursor.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.6;
            transition: all 0.1s ease;
        `;
        document.body.appendChild(this.cursor);
        
        this.bindEvents();
    }
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX - 4 + 'px';
            this.cursor.style.top = e.clientY - 4 + 'px';
        });
        
        document.addEventListener('mouseenter', () => {
            this.cursor.style.opacity = '0.6';
        });
        
        document.addEventListener('mouseleave', () => {
            this.cursor.style.opacity = '0';
        });
    }
}

// Uncomment to enable cursor trail effect
// new CursorTrail(); 