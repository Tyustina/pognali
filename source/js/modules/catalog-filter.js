const filterButton = document.querySelector('.companions-filter__button');
const countriesFilter = document.querySelector('.companions-filter__list');
const form = document.querySelector('.form__wrapper');
const isDesktop = window.innerWidth > 1023;
const isMobile = window.innerWidth < 768;
export function openCloseCatalogFilter() {
    if (filterButton) {
        filterButton.addEventListener('click', clear)
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
        console.log('Меню закрыли');
        countriesFilter.classList.remove('is-open');
    } else {
        console.log('Меню открыли');
        countriesFilter.classList.add('is-open');
    }
}

