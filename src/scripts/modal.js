const closeByOverlay  = (evt) => {
    if (evt.target.closest('.popup__content') === null) {
        closeModal(evt.target.closest('.popup'));
    }
}

function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    }
}

function openModal(popup) {
    document.addEventListener('click', closeByOverlay);
    document.addEventListener('keyup', closeByEsc);
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {
    if (popup.classList.contains('popup_is-opened')) {
        document.removeEventListener('click', closeByOverlay);
        document.removeEventListener('keyup', closeByEsc);
        popup.classList.remove('popup_is-opened');
    }
}

export {
    openModal,
    closeModal,
}