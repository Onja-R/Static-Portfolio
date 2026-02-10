// Highlight du lien actif basé sur la page actuelle
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Message de confirmation après envoi du formulaire
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function() {
        setTimeout(() => {
            alert('Message envoyé avec succès. Je vous répondrai dans les plus brefs délais.');
        }, 100);
    });
}