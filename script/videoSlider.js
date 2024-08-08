// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    
    // Sélectionner tous les éléments avec la classe 'video-item' et les assigner à la variable 'videoItems'
    const videoItems = document.querySelectorAll('.video-item');
    
    // Sélectionner le bouton 'Previous' (Précédent) et l'assigner à la variable 'prevButton'
    const prevButton = document.querySelector('.prev-video-button');
    
    // Sélectionner le bouton 'Next' (Suivant) et l'assigner à la variable 'nextButton'
    const nextButton = document.querySelector('.next-video-button');
    
    // Initialiser l'index du vidéo courant à 0 (le premier vidéo)
    let currentIndex = 0;

    // Fonction pour afficher le vidéo correspondant à l'index donné
    function showVideo(index) {
        // Parcourir tous les éléments vidéo
        videoItems.forEach((item, i) => {
            // Si l'index de l'élément correspond à l'index donné
            if (i === index) {
                item.style.display = 'block'; // Afficher ce vidéo
            } else {
                item.style.display = 'none'; // Cacher les autres vidéos
            }
        });
    }

    // Ajouter un gestionnaire d'événement pour le bouton 'Previous'
    prevButton.addEventListener('click', function() {
        // Décrémenter l'index du vidéo courant, ou revenir au dernier vidéo si on est au premier
        currentIndex = (currentIndex === 0) ? videoItems.length - 1 : currentIndex - 1;
        // Afficher le vidéo correspondant au nouvel index
        showVideo(currentIndex);
    });

    // Ajouter un gestionnaire d'événement pour le bouton 'Next'
    nextButton.addEventListener('click', function() {
        // Incrémenter l'index du vidéo courant, ou revenir au premier vidéo si on est au dernier
        currentIndex = (currentIndex === videoItems.length - 1) ? 0 : currentIndex + 1;
        // Afficher le vidéo correspondant au nouvel index
        showVideo(currentIndex);
    });

    // Initialiser en affichant le premier vidéo
    showVideo(currentIndex);
});
