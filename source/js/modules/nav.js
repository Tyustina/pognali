const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navToggle = nav.querySelector('.nav__button');

export function switchingNav() {
    if (navToggle) {
        navToggle.addEventListener('click', openCloseNav)
    }
}

function openCloseNav() {
    if (nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        header.classList.remove('is-open-nav');

    } else {
        nav.classList.add('is-open');
        header.classList.add('is-open-nav');
        
    }
}

window.addEventListener('resize', switchingNav)
