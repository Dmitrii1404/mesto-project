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
    profileTitle
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