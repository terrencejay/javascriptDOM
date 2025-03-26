// Array to store all form submissions
let submissions = [];

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate form
function validateForm(formData) {
    let isValid = true;
    const errors = {
        name: false,
        email: false,
        message: false
    };

    // Reset all error states
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    document.querySelectorAll('input, textarea').forEach(input => input.classList.remove('input-error'));

    // Validate name
    if (!formData.name.trim()) {
        document.getElementById('nameError').style.display = 'block';
        document.getElementById('name').classList.add('input-error');
        errors.name = true;
        isValid = false;
    }

    // Validate email
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('email').classList.add('input-error');
        errors.email = true;
        isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
        document.getElementById('messageError').style.display = 'block';
        document.getElementById('message').classList.add('input-error');
        errors.message = true;
        isValid = false;
    }

    return isValid;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Create object with form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        timestamp: new Date()
    };

    // Validate form
    if (validateForm(formData)) {
        // Add submission to array
        submissions.push(formData);

        // Log the submission (you could send this to a server instead)
        console.log('Form submitted:', formData);
        console.log('All submissions:', submissions);

        // Reset form
        event.target.reset();

        // Show success message (you could enhance this)
        alert('Form submitted successfully!');
    }
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleSubmit);

    // Add real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            validateForm(formData);
        });
    });
});
