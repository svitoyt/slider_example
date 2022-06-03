const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'), //слайдер2
    slidesField = document.querySelector('.offer__slider-inner'), //слайдер2
    width = window.getComputedStyle(slidesWrapper).width; //слайдер2, ширина окна слайдера на сайте
let slideIndex = 1;
let offset = 0; //отступ

if (slides.length < 10) { 
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
} else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
}

slidesField.style.width = 100 * slides.length + '%'; //сформировали общее поле для всех слайдов
slidesField.style.display = 'flex'; // все слайды выстроены в одну линию
slidesField.style.transition = '0.5s all'; // их скорость смены

slidesWrapper.style.overflow = 'hidden'; //спрятали слайды, выходящие за рамки общего блока

slides.forEach(slide => {
    slide.style.width = width;
}); //выровняли все слайды по одному размеру

next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length-2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length-2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length-2) * (slides.length - 1); //смещение в конец
    } else {
        offset -= +width.slice(0, width.length-2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
});