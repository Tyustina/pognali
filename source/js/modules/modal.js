const profileBlock = document.querySelector('.profile')
const profileModal = document.querySelector('.profile__modal')
const openModalButton = document.querySelector('.profile__button')
const closeModalButton = document.querySelector('button')

export function openCloseModal() {
    if (profileBlock) {
        openModalButton.addEventListener('click', openModal)
        closeModalButton.addEventListener('click', closeModal)
    }
}


function openModal() {
    if (profileModal) {
        profileModal.classList.add('is-open')
    }
}

function closeModal() {
    if (profileModal) {
        profileModal.classList.remove('is-open')
    }
}

