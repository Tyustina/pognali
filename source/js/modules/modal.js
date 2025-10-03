const profileBlock = document.querySelector('.profile')
const profileModal = profileBlock.querySelector(' .profile__modal')
const openModalButton = profileBlock.querySelector('.profile__button')
const closeModalButton = profileModal.querySelector('button')


openModalButton.addEventListener('click', openModal)
closeModalButton.addEventListener('click',closeModal)

function openModal() {
    profileModal.classList.add('is-open')
}

function closeModal() {
    profileModal.classList.remove('is-open')
}

