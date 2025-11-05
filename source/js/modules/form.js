const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const input = document.querySelector('.interested__input-wrapper input');
const button = document.querySelector('.interested__input-wrapper button');
const error = document.querySelector('.interested__input-error');


function validateEmail() {
    const email = input.value.trim();
    input.classList.remove('invalid');
    error?.classList.remove('show');

    if (!email) {
        showError('Введите email');
        return false;
    }

    if (!emailRegex.test(email)) {
        showError('Неправильный формат email');
        return false;
    }

    return true;
}

function showError(message) {
    input.classList.add('invalid');
    if (error) {
        error.textContent = message;
        error.classList.add('show');
    }
}

function clearError() {
    input.classList.remove('invalid');
    if (error) error.classList.remove('show');
}

export function initEmailValidation() {
    if (!input || !button) return;
    input.addEventListener('input', validateEmail);
    input.addEventListener('focus', clearError);


    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (validateEmail()) {
            alert('Регистрация: ' + input.value);
        }
    });
}