import './pages/index.css';
import {
    addCardName,
    addCardUrl,
    card,
    cardFormElement,
    cardOpenAddButton,
    cardPopup,
    editDescription,
    editTitle,
    profileDescription,
    profileFormElement,
    profileOpenEditButton,
    profilePopup,
    profileTitle,
    profileImage,
    avatarPopup,
    avatarOpenEditButton,
    avatarFormElement,
    addAvatarUrl,
} from "./scripts/variables.js";
import {openModal, closeModal} from "./scripts/modal.js";
import {enableValidation} from "./scripts/validate";
import { createCard } from "./scripts/cards.js";
import { getProfile, getCards, changeProfile, addCard, editAvatar } from "./scripts/api";

// Функции для изменения кнопки формы при отправке запроса
function startSaving(evt) {
    evt.target.querySelector(".popup__button").textContent = "Сохранение...";
}

function endSavin(evt){
    evt.target.querySelector(".popup__button").textContent = "Сохранить";
}

// Функции для отправки форм
function editFormProfile(popup) {
    editTitle.setAttribute("value", profileTitle.textContent);
    editDescription.setAttribute("value", profileDescription.textContent);

    openModal(popup);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const title = editTitle.value;
    const description = editDescription.value;

    startSaving(evt);

    if (title !== profileTitle || description !== profileDescription) {
        changeProfile(title, description)
            .then(response => {
                profileTitle.textContent = response.name;
                profileDescription.textContent = response.about;
                closeModal(profilePopup);
            })
            .catch(err => console.log(err))
            .finally(() => endSavin(evt));
    }
}

function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    const url = addAvatarUrl.value;

    startSaving(evt);

    editAvatar(url)
        .then(response => {
            profileImage.src = response.avatar;
            profileImage.alt = `Avatar: ${response.name}`;
            closeModal(avatarPopup);
        })
        .catch(err => console.log(err))
        .finally(() => endSavin(evt));
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const name = addCardName.value;
    const url = addCardUrl.value;

    startSaving(evt);

    addCard(name, url)
        .then(response => {
            card.prepend(createCard(response.name, response.link, response.likes, response._id));
            closeModal(cardPopup);
        })
        .catch(err => console.log(err))
        .finally(() => endSavin(evt));
}

// Получение информации о пользователе и инициализация изначальных карточек с сервера
Promise.all([getProfile(), getCards()])
    .then(response => {
        const userID = response[0]._id;
        profileTitle.textContent = response[0].name;
        profileDescription.textContent = response[0].about;
        profileImage.src = response[0].avatar;
        profileImage.alt = `Avatar: ${response[0].name}`;

        response[1].forEach(item => {
            card.append(createCard(item.name, item.link, item.likes, item._id, item.owner._id, userID));
        })
    })
    .catch(err => console.log(err));

// Добавление слушателей
profileOpenEditButton.addEventListener('click', () => editFormProfile(profilePopup));
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

cardOpenAddButton.addEventListener('click', () => openModal(cardPopup));
cardFormElement.addEventListener('submit', handleCardFormSubmit);

avatarOpenEditButton.addEventListener('click', () => openModal(avatarPopup));
avatarFormElement.addEventListener("submit", handleAvatarFormSubmit);


// Настройки валидации форм
const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_error_active',
    errorClass: 'popup__input-error'
}

enableValidation(validationSettings);

