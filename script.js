// CEMADEL Brochure Interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for accordion links
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        });
    });

    // Add animation to testimonials on scroll
    const testimonials = document.querySelectorAll('.testimonial');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(20px)';
        testimonial.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(testimonial);
    });

    // Contact button functionality
    const contactBtn = document.querySelector('.btn-primary');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // Simple alert for demo, could be replaced with modal
            alert('Thank you for your interest! Please call us at 0721988120 or 0722748072 to get started.');
        });
    }

    // Add hover effects to service rows
    const serviceRows = document.querySelectorAll('tbody tr');
    serviceRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f8ff';
        });
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});