import { cardTemplate, imagePopup, imagePopupCaption, imagePopupUrl } from "./variables.js";
import {openModal} from "./modal.js";
import {deleteCard, changeLike} from "./api";

// Поставить лайк
function likeCard(event, cardID, cardLikeCount) {
    changeLike(cardID, event.target.classList.contains("card__like-button_is-active"))
        .then(response => {
            cardLikeCount.textContent = response.likes.length;
            event.target.classList.toggle("card__like-button_is-active");
        })
        .catch(err => console.log(err));
}

// Удалить карточку
function handlerDeleteCard(event, cardID) {
    deleteCard(cardID)
        .then(event.target.closest(".places__item").remove())
        .catch(err => console.log(err));
}

// Создание карточек
function createCard(name, link, likes, cardID, ownerID, userID) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardElementImage = cardElement.querySelector(".card__image");
    const cardElementTitle = cardElement.querySelector(".card__title");
    const cardLikeButton = cardElement.querySelector(".card__like-button");
    const cardLikeCount = cardElement.querySelector(".card__like-count");
    const cardDeleteButton = cardElement.querySelector(".card__delete-button");

    cardElementImage.src = link;
    cardElementImage.alt = ("Photo: " + name);
    cardElementTitle.textContent = name;
    cardLikeCount.textContent = likes.length;

    // Если переданы аргументы ownerID && userID в функцию
    if (ownerID && userID) {
        // Проверка, ставил ли текущий пользователь ранее лайк на данную карточку
        likes.some(like => {
            if (userID === like._id) {
                cardLikeButton.classList.toggle("card__like-button_is-active")
            }
        });

        // Проверка является ли пользователь создателем карточки (для возможности удалить ее)
        if (ownerID === userID) {
            cardDeleteButton.addEventListener('click', event => {
                handlerDeleteCard(event, cardID)
            });
        } else {
            cardDeleteButton.remove();
        }
    } else {
        cardDeleteButton.addEventListener('click', event => {
            handlerDeleteCard(event, cardID)
        });
    }

    cardLikeButton.addEventListener('click', event => {
        likeCard(event, cardID, cardLikeCount);
    });

    // Слушатель для открытия popup карточки
    cardElementImage.addEventListener('click', () => {
        imagePopupUrl.src = link;
        imagePopupUrl.alt = name;
        imagePopupCaption.textContent = name;
        openModal(imagePopup);
    })

    return cardElement;
}

export { createCard };