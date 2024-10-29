function initSliders() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
        let slideIndex = 0;
        const images = slider.querySelectorAll('.work-image');

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

        function autoSlide() {
            changeSlide(1);
            setTimeout(autoSlide, 5000); // 5 seconds between slides
        }

        slider.querySelector('.prev').onclick = () => changeSlide(-1);
        slider.querySelector('.next').onclick = () => changeSlide(1);
        
        showSlides();
        setTimeout(autoSlide, 5000);
    });
}

// Lightbox functionality
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
    document.querySelectorAll('.work-image').forEach(img => {
        img.onclick = () => {
            lightboxImage.src = img.src;
            lightboxOverlay.style.display = 'flex';
        };
    });

    // Close lightbox on overlay or button click
    lightboxOverlay.onclick = () => (lightboxOverlay.style.display = 'none');
    closeButton.onclick = () => (lightboxOverlay.style.display = 'none');
});
