const filterButton = document.querySelector('.companions-filter__button');
const countriesFilter = document.querySelector('.companions-filter__list');
const form = document.querySelector('.form__wrapper');
const isDesktop = window.innerWidth > 1023;
const isMobile = window.innerWidth < 768;
const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
export function openCloseCatalogFilter() {
    if (filterButton) {
        filterButton.addEventListener('click', clear)
    }
}


function countriesSorter() {
    if (isTablet) {
        const accordionList = document.querySelector('.companions-filter__alphabet-list');
        const filterLetters = accordionList.querySelectorAll('.companions-filter__item h3');

        if (accordionList && accordionList.firstElementChild) {
            const firstItem = accordionList.firstElementChild;
            firstItem.classList.add('is-open');
        }
        console.log(filterLetters);

        filterLetters.forEach(letter => {
            letter.addEventListener('click', () => {
                const currentItem = letter.parentElement;

                if (!currentItem.classList.contains('is-open')) {
                    const openItem = accordionList.querySelector('.companions-filter__item.is-open');
                    openItem.classList.remove('is-open');
                    currentItem.classList.add('is-open');
                }
            });
        })

    }
}

export function openCloseFilterGroup() {
    if (form) {
        if (isDesktop || isMobile) {
            const formGroup = form.querySelectorAll('fieldset');
            formGroup.forEach((group) => {
                const title = group.querySelector('legend');
                const list = group.querySelector('.form__accordeon-content')
                title.addEventListener('click', () => {
                    if (list.classList.contains('is-open')) {
                        list.classList.remove('is-open')
                    } else {
                        list.classList.add('is-open')
                    }

                })
            })
        }
    }
}

function clear() {
    if (countriesFilter.classList.contains('is-open')) {
        countriesFilter.classList.remove('is-open');
        filterButton.classList.remove('is-open');
        if(isMobile) {
            const filterButtonsList = document.querySelector('.companions-filter__buttons-list');
            filterButtonsList.classList.remove('is-open')
        }
    } else {
        countriesFilter.classList.add('is-open');
        filterButton.classList.add('is-open');
        if(isMobile) {
            const filterButtonsList = document.querySelector('.companions-filter__buttons-list');
            filterButtonsList.classList.add('is-open');
        }
        countriesSorter();
    }
}

