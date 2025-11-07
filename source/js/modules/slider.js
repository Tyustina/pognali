import Swiper from 'swiper';
import { Mousewheel, Autoplay } from 'swiper/modules';

const slider = document.querySelector('.direction__slider');
const sliderList = document.querySelector('.direction__slide-list');
const slides = document.querySelectorAll('.direction__item');
const isMobile = window.innerWidth < 768;
const countrySlider = null;
export function checkWidth() {
    if (slider) {
        if (isMobile) {
            clearSwiperClass();
        } else {
            insertSwiperClass();
            initSwiper();
        }
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
    if (countrySlider) {
        countrySlider.destroy(true, true);
    }
}

function initSwiper() {
    const slidesCount = slides.length;

    if (slidesCount === 3 || slidesCount < 3) {
        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            clone.classList.add('swiper-slide-duplicate');
            sliderList.appendChild(clone);
        });
    }
    const countrySlider = new Swiper(slider, {
        direction: 'vertical', 
        modules: [Mousewheel, Autoplay],
        loop: true, 
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 10, 
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
        },
        grabCursor: true, 
        mousewheel: true,
    });
}