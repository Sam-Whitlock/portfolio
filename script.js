// Initialize sliders for all sections
function initSliders() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
        let slideIndex = 0;
        const images = slider.querySelectorAll('.work-image, .personal-image');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const hasMultiple = images.length > 1;

        // Hide buttons if only one image
        if (!hasMultiple) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
        }

        function showSlides() {
            images.forEach((img, index) => {
                img.classList.remove('active');
                img.style.display = index === slideIndex ? 'block' : 'none';
            });
            images[slideIndex].classList.add('active');
        }

        function changeSlide(n) {
            slideIndex = (slideIndex + n + images.length) % images.length;
            showSlides();
        }


        slider.querySelector('.prev').onclick = () => changeSlide(-1);
        slider.querySelector('.next').onclick = () => changeSlide(1);

        showSlides();
    });
}

// Lightbox functionality for enlarging images on click
document.addEventListener("DOMContentLoaded", () => {
    initSliders();

    // Create lightbox elements
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.classList.add('lightbox-overlay');

    const lightboxImage = document.createElement('img');
    lightboxImage.classList.add('lightbox-image');
    lightboxOverlay.appendChild(lightboxImage);

    const closeButton = document.createElement('button');
    closeButton.classList.add('lightbox-close');
    closeButton.innerHTML = '&times;';
    lightboxOverlay.appendChild(closeButton);

    document.body.appendChild(lightboxOverlay);

    // Open lightbox on image click
    document.querySelectorAll('.work-image, .personal-image').forEach(img => {
        img.onclick = () => {
            lightboxImage.src = img.src;
            lightboxOverlay.style.display = 'flex';
        };
    });

    // Close lightbox on overlay or button click
    lightboxOverlay.onclick = () => (lightboxOverlay.style.display = 'none');
    closeButton.onclick = () => (lightboxOverlay.style.display = 'none');
});
