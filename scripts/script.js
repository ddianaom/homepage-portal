let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
}
