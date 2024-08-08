document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const stickyOffset = header.offsetTop;

    // Gestion du défilement pour fixer la barre de navigation
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > stickyOffset) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.width = '100%';
            header.style.zIndex = '1000';
            header.style.backgroundColor = '#000000'; // Garder la même couleur que votre barre de navigation
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)'; // Ombre pour démarquer la barre de navigation
        } else {
            header.style.position = 'static';
            header.style.boxShadow = 'none';
        }
    });
});