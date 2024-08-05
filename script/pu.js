document.addEventListener("DOMContentLoaded", () => {

    // Initialiser le diaporama d'images
    const imageItems = document.querySelectorAll(".image-item");
    let currentIndex = 0;

    function showImage(index) {
        imageItems.forEach((item, i) => {
            item.style.display = (i === index) ? "block" : "none";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % imageItems.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + imageItems.length) % imageItems.length;
        showImage(currentIndex);
    }

    // Afficher la première image au chargement
    showImage(currentIndex);

    // Ajouter des contrôles pour naviguer dans les images (ajoute ces boutons dans le HTML si nécessaire)
    // const nextButton = document.querySelector(".next-button");
    // const prevButton = document.querySelector(".prev-button");

    // nextButton.addEventListener("click", nextImage);
    // prevButton.addEventListener("click", prevImage);

    // Fonction pour faire défiler automatiquement les images
    setInterval(nextImage, 5000); // Change l'image toutes les 5 secondes

});
