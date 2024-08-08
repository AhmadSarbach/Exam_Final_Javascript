document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const slider = document.querySelector('.image-slider');
    const images = document.querySelectorAll('.image-item');

    let currentIndex = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', function () {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to first image
        }
        updateSliderPosition();
    });

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop back to last image
        }
        updateSliderPosition();
    });
});
