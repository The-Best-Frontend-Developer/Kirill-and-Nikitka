const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderBlocks = document.querySelectorAll('.slider-block');
const sliderBlock1 = document.querySelector(".slider-block1");

let currentPosition = 0;
let visibleSlides = 3;

prevBtn.addEventListener('click', () => {
    currentPosition -= visibleSlides;
    if (currentPosition < 0) {
        currentPosition = sliderBlocks.length - visibleSlides;
    }
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentPosition += visibleSlides;
    if (currentPosition >= sliderBlocks.length) {
        currentPosition = 0;
    }
    updateSlider();
});

function updateSlider() {
    sliderBlocks.forEach((slide, index) => {
        if (index >= currentPosition && index < currentPosition + visibleSlides) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

updateSlider(); 