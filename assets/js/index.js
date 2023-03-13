const slides = document.querySelectorAll('.slider'),
      btnLeft = document.querySelector('#left'),
      btnRight = document.querySelector('#right');

let activeSlide = 0;

function switchSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });
    slides[activeSlide].classList.add('active')
}

btnLeft.addEventListener('click', (event) => {
    activeSlide--
    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    
    
    switchSlide();
})

btnRight.addEventListener('click', (event) => {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    switchSlide();
})