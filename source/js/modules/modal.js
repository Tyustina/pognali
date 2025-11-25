const profileBlock = document.querySelector('.profile')
const profileModal = document.querySelector('.modal')
const openModalButton = document.querySelector('.profile__button')
const closeModalButton = document.querySelector('.modal__content button')
const body = document.body;
const overlay = document.querySelector('.overlay');
export function openCloseModal() {
    if (profileBlock) {
        openModalButton.addEventListener('click', openModal)
        closeModalButton.addEventListener('click', closeModal)

        document.addEventListener('keydown', (e) => {
            if (profileModal) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            }

        })

        body.addEventListener('click', (e) => {
            if (profileModal) {
                if (e.target === overlay) {
                    closeModal();
                }
            }
        })
    }
}

function openModal() {
    if (profileModal) {
        profileModal.classList.add('is-open');
    }
    body.classList.add('scroll-lock');
    overlay.classList.add('is-active')
}

function closeModal() {
    if (profileModal) {
        profileModal.classList.remove('is-open')
    }
    body.classList.remove('scroll-lock');
    overlay.classList.remove('is-active')
}


