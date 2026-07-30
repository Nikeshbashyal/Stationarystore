// Contact Form submission handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the page from refreshing
        
        // Display a simple success message
        alert('Thank you for contacting Smart Stationery Store! Your message has been received.');
        
        // Clear the form fields
        this.reset();
    });
}