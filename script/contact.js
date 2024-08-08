document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');

    contactForm.addEventListener('submit', function(event) {
        // Prévenir la soumission du formulaire
        event.preventDefault();

        // Récupérer les valeurs des champs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Initialiser la validation
        let isValid = true;

        // Validation du nom
        if (name === "") {
            showError('name', 'Name is required');
            isValid = false;
        } else {
            hideError('name');
        }

        // Validation de l'email
        if (email === "") {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError('email');
        }

        // Validation du message
        if (message === "") {
            showError('message', 'Message is required');
            isValid = false;
        } else {
            hideError('message');
        }

        // Soumettre le formulaire si toutes les validations passent
        if (isValid) {
            console.log("Form submitted successfully");
            contactForm.submit(); // Décommenter pour activer la soumission réelle du formulaire
        } else {
            console.log("Form validation failed");
        }
    });

    function showError(inputId, message) {
        const inputElement = document.getElementById(inputId);
        let errorElement = inputElement.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error')) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error');
            errorElement.style.color = 'red';
            inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
        }
        errorElement.textContent = message;
        errorElement.style.display = 'block'; // S'assurer que l'erreur est visible
    }

    function hideError(inputId) {
        const inputElement = document.getElementById(inputId);
        const errorElement = inputElement.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.style.display = 'none';
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});