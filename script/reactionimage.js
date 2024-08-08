document.addEventListener('DOMContentLoaded', function() {
    const aboutImage = document.getElementById('aboutImage');

    // Gestion de l'image au survol
    aboutImage.addEventListener('mouseover', function() {
        aboutImage.src = '../Exam_Final_Javascript/images/ma.jpg'; // Remplacez par le chemin de l'image du drapeau marocain
    });

    aboutImage.addEventListener('mouseout', function() {
        aboutImage.src = '../Exam_Final_Javascript/images/aboutus.webp'; // Retour à l'image originale
    });
});
