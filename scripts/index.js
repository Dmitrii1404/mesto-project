import { createCard } from "./cards.js";
import {
    addCardName,
    addCardUrl,
    card,
    cardCloseAddButton,
    cardFormElement,
    cardOpenAddButton,
    cardPopup,
    editDescription,
    editTitle,
    imageCloseCard,
    imagePopup,
    profileCloseEditButton,
    profileDescription,
    profileFormElement,
    profileOpenEditButton,
    profilePopup,
    profileTitle,
    form,
} from "./variables.js";
import {openModal, closeModal} from "./modal.js";

profilePopup.classList.add('popup_is-animated');
cardPopup.classList.add('popup_is-animated');
imagePopup.classList.add('popup_is-animated');

function editFormProfile(popup) {
    editTitle.setAttribute("value", profileTitle.textContent);
    editDescription.setAttribute("value", profileDescription.textContent);

    openModal(popup);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const title = editTitle.value;
    const description = editDescription.value;

    if (title !== profileTitle || description !== profileDescription) {
        profileTitle.textContent = title;
        profileDescription.textContent = description;
    }
    closeModal(profilePopup);
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const name = addCardName.value;
    const url = addCardUrl.value;

    card.prepend(createCard(name, url));
    closeModal(cardPopup);
}

profileOpenEditButton.addEventListener('click', () => editFormProfile(profilePopup));
profileCloseEditButton.addEventListener('click', () => closeModal(profilePopup));
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

cardOpenAddButton.addEventListener('click', () => openModal(cardPopup));
cardCloseAddButton.addEventListener('click', () => closeModal(cardPopup));
cardFormElement.addEventListener('submit', handleCardFormSubmit);

imageCloseCard.addEventListener('click', () => closeModal(imagePopup));




const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add('popup__input_error_active');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove('popup__input_error_active');
    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error');
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })
};

const enableValidation = (form) => {
    const formList = Array.from(form);

    formList.forEach((formElement) => {
        setEventListeners(formElement);
    })
};


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputList, buttonElement) => {
    if(hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_inactive');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('popup__button_inactive');
        buttonElement.disabled = false;
    }
}

enableValidation(form);

