// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('form-message');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Newsletter form validation and submission
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showFormMessage('Submitting...', '');
    
    // Simulate API call with timeout
    setTimeout(() => {
        // Clear the form
        emailInput.value = '';
        
        // Show success message
        showFormMessage('Thank you for subscribing to our newsletter!', 'success');
    }, 1500);
});

// Helper function to show form messages
function showFormMessage(message, type) {
    formMessage.textContent = message;
    
    // Reset classes
    formMessage.className = '';
    
    // Add appropriate class based on message type
    if (type === 'error') {
        formMessage.classList.add('error-message');
    } else if (type === 'success') {
        formMessage.classList.add('success-message');
    }
}

// Product hover effects
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Apple website clone loaded successfully!');
});