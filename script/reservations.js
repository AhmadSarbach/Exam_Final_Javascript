document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.querySelector('form');

    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('nom-complet').value.trim();
        const email = document.getElementById('email').value.trim();
        const statut = document.getElementById('statut').value;
        const adresse = document.getElementById('adresse').value.trim();

        let isValid = true;

        if (fullName === "") {
            showError('nom-complet', 'Full Name is required');
            isValid = false;
        } else {
            hideError('nom-complet');
        }

        if (email === "") {
            showError('email', 'Email Address is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError('email');
        }

        if (statut === "") {
            showError('statut', 'Please select your marital status');
            isValid = false;
        } else {
            hideError('statut');
        }

        if (adresse === "") {
            showError('adresse', 'Postal Address is required');
            isValid = false;
        } else {
            hideError('adresse');
        }

        if (isValid) {
            console.log("Reservation submitted successfully");
            reservationForm.submit();
        } else {
            console.log("Reservation validation failed");
        }
    });

    function showError(inputId, message) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.getElementById(inputId + '-error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    function hideError(inputId) {
        const errorElement = document.getElementById(inputId + '-error');
        errorElement.classList.remove('show');
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
