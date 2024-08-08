document.addEventListener('DOMContentLoaded', function() {

    const postReviewBtn = document.getElementById('postReviewBtn');

    const commentInput = document.getElementById('comment');
 
    postReviewBtn.addEventListener('click', function(event) {

        event.preventDefault(); // Prevent the default form submission behavior
 
        const comment = commentInput.value.trim();
 
        if (comment) {

            alert('Thank you for your review!');

            commentInput.value = ''; // Clear the input field

        } else {

            alert('Please enter a review before posting.');

        }

    });

});