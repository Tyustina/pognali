import Swiper from 'swiper';
const slider = document.querySelector('.direction__slider');
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
    const slidesCount = slides.length;

    if (slidesCount === 3 || slidesCount < 3) {
        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            clone.classList.add('swiper-slide-duplicate');
            sliderList.appendChild(clone);
        });
    }
        const swiper = new Swiper(slider, {
            direction: 'vertical', // Вертикальный слайдер
            loop: true, // Зацикливание слайдов
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10, // Отступ между слайдами
            autoplay: {
                delay: 3000, // Автоматическое пролистывание каждые 3 секунды
                disableOnInteraction: false, // Продолжать автопрокрутку после ручного перелистывания
            },
            grabCursor: true, // Курсор в виде "руки" для захвата
            mousewheel: true, // Поддержка перелистывания колесом мыши
        });
    }