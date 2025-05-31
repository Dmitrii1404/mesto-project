import './pages/index.css';
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
    profileImage,
} from "./scripts/variables.js";
import {openModal, closeModal} from "./scripts/modal.js";
import {enableValidation} from "./scripts/validate";
import { createCard } from "./scripts/cards.js";
import { getProfile, getCards } from "./scripts/api";

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

Promise.all([getProfile(), getCards()])
    .then(response => {
        profileTitle.textContent = response[0].name;
        profileDescription.textContent = response[0].about;
        profileImage.src = response[0].avatar;
        profileImage.alt = `User's avatar: ${response[0].name}`
    })

profileOpenEditButton.addEventListener('click', () => editFormProfile(profilePopup));
profileCloseEditButton.addEventListener('click', () => closeModal(profilePopup));
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

cardOpenAddButton.addEventListener('click', () => openModal(cardPopup));
cardCloseAddButton.addEventListener('click', () => closeModal(cardPopup));
cardFormElement.addEventListener('submit', handleCardFormSubmit);

imageCloseCard.addEventListener('click', () => closeModal(imagePopup));

const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_error_active',
    errorClass: 'popup__input-error'
}

enableValidation(validationSettings);

