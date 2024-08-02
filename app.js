var search = document.getElementById("input-search");
var close = document.getElementById("close");
var searchBox = document.getElementById("search-box");
var searchIcon = document.getElementById("search");


searchIcon.addEventListener("click", function(){
    searchBox.style.display = "flex";

});


close.addEventListener("click", function(){
    searchBox.style.display = "none";
})

// MAIN


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.silde');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function setCurrentSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    prevButton.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    nextButton.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            setCurrentSlide(index);
            startSlideShow();
        });
    });

    // Initialize the slider
    showSlide(currentSlide);
    startSlideShow();
});

