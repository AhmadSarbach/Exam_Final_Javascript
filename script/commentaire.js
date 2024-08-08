document.addEventListener('DOMContentLoaded', function() {
    const postReviewBtn = document.getElementById('postReviewBtn');
    const commentInput = document.getElementById('comment');
    const thankYouMessage = document.getElementById('thankYouMessage');

    postReviewBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire

        const comment = commentInput.value.trim();

        if (comment) {
            thankYouMessage.style.display = 'block'; // Affiche le message de remerciement
            commentInput.value = ''; // Réinitialise le champ de commentaire
        } else {
            alert('Please enter a review before posting.');
        }
    });
});
