// Initialize Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Image Fallback Logic
    const img = document.querySelector('.profile-img');
    const extensions = ['jpg', 'png', 'jpeg', 'JPG', 'PNG'];
    let currentIndex = 0;

    img.onerror = function() {
        if (currentIndex < extensions.length) {
            this.src = `profile.${extensions[currentIndex++]}`;
        }
    };
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .timeline-item, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Add the reveal class styles
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.padding = '16px 0';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.8)';
        nav.style.padding = '24px 0';
    }
});
