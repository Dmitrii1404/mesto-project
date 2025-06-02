// Функция-слушатель для закрытия popup на кретик (вынесено в отдельную функцию для возможности снятия слушателя)
function handlerClosePopup (evt) {
    closeModal(evt.target.closest('.popup'));
}

// Закрытие popup нажатием мышки вне поля popup
function closeByOverlay (evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
        closeModal(evt.target.closest('.popup_is-opened'))
    }
}

// Закрытие popup нажатием "esc"
function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    }
}

// Открытие popup и добавление слушателей
function openModal(popup) {
    document.addEventListener('click', closeByOverlay);
    document.addEventListener('keyup', closeByEsc);
    popup.querySelector(".popup__close").addEventListener('click', handlerClosePopup);
    popup.classList.add('popup_is-opened');
}

// Закрытие popup и удаление слушателей
function closeModal(popup) {
    if (popup.classList.contains('popup_is-opened')) {
        document.removeEventListener('click', closeByOverlay);
        document.removeEventListener('keyup', closeByEsc);
        popup.querySelector(".popup__close").removeEventListener('click', handlerClosePopup);
        popup.classList.remove('popup_is-opened');
    }
}

export {
    openModal,
    closeModal,
}