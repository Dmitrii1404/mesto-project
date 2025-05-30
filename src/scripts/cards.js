import { cardTemplate, card, imagePopup, imagePopupCaption, imagePopupUrl } from "./variables.js";
import {openModal} from "./modal.js";

const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

function createCard(name, link) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardElementImage = cardElement.querySelector(".card__image");
    const cardElementTitle = cardElement.querySelector(".card__title");
    const cardLikeButton = cardElement.querySelector(".card__like-button");
    const cardDeleteButton = cardElement.querySelector(".card__delete-button");

    cardElementImage.src = link;
    cardElementImage.alt = ("Photo: " + name);
    cardElementTitle.textContent = name;

    cardLikeButton.addEventListener('click', (event) => {
        event.target.classList.toggle("card__like-button_is-active");
    })

    cardDeleteButton.addEventListener('click', (event) => {
        event.target.closest(".places__item").remove();
    })

    cardElementImage.addEventListener('click', () => {
        imagePopupUrl.src = link;
        imagePopupUrl.alt = name;
        imagePopupCaption.textContent = name;
        openModal(imagePopup);
    })

    return cardElement;
}

initialCards.forEach(item => {
    card.append(createCard(item.name, item.link));
})

export { createCard };