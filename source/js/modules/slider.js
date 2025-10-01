import Swiper from 'swiper';
const slider = document.querySelector('.direction__slide-wrapper');
const sliderList = document.querySelector('.direction__slide-list');
const slides = document.querySelectorAll('.direction__item');
const isMobile = window.innerWidth < 768;

export function checkWidth() {
    if (isMobile) {
        clearSwiperClass();
    } else {
        insertSwiperClass();
        initSwiper();
    }
}
function insertSwiperClass() {
    slider.classList.add('swiper');
    sliderList.classList.add('swiper-wrapper');
    slides.forEach((slide) => {
        slide.classList.add('swiper-slide');
    });
}

function clearSwiperClass() {
    slider.classList.remove('swiper');
    sliderList.classList.remove('swiper-wrapper');
    slides.forEach((slide) => {
        slide.classList.remove('swiper-slide');
    });
}

function initSwiper() {
    const swiper = new Swiper(slider, {
            direction: 'vertical', // Вертикальный слайдер
            loop: true, // Зацикливание слайдов
            slidesPerView: 3,
            spaceBetween: 10, // Отступ между слайдами
        });
}