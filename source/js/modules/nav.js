const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navToggle = nav.querySelector('.nav__button');
const body = document.body;
const overlay = document.querySelector('.overlay');

export function switchingNav() {
    if (navToggle) {
        navToggle.addEventListener('click', openCloseNav)
    }
}

function openCloseNav() {
    if (nav.classList.contains('is-open')) {
        closeNav();

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeNav();
            }
        })

        body.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeNav();
            }
        })
    } else {
        openNav();
    }
}


function closeNav() {
    nav.classList.remove('is-open');
    header.classList.remove('is-open-nav');
    body.classList.remove('scroll-lock');
    overlay.classList.remove('is-active');
}

function openNav() {
    nav.classList.add('is-open');
    header.classList.add('is-open-nav');
    body.classList.add('scroll-lock');
    overlay.classList.add('is-active')
}
window.addEventListener('resize', switchingNav)
