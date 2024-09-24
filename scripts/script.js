let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Atualiza o índice do slide
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move o carrossel
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
}
