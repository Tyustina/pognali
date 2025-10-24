const filterButton = document.querySelector('.countries-filter__button');
const countriesFilter = document.querySelector('.countries-filter__list');

export function openCloseCatalogFilter() {
    console.log('функция подключилась');
    if (filterButton) {
        console.log('условие наличия кнопки выполнено');
        filterButton.addEventListener('click', clear)
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

