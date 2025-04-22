const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");

const profileOpenEditButton = document.querySelector(".profile__edit-button");
const profileCloseEditButton = profilePopup.querySelector(".popup__close");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileFormElement = profilePopup.querySelector(".popup__form");
const editTitle = profilePopup.querySelector(".popup__input_type_name");
const editDescription = profilePopup.querySelector(".popup__input_type_description");

const cardOpenAddButton = document.querySelector(".profile__add-button");
const cardCloseAddButton = cardPopup.querySelector(".popup__close");

const cardFormElement = cardPopup.querySelector(".popup__form");
const addCardName = cardPopup.querySelector(".popup__input_type_card-name");
const addCardUrl = cardPopup.querySelector(".popup__input_type_url");

const imagePopup = document.querySelector(".popup_type_image");
const imagePopupUrl = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");
const imageCloseCard = imagePopup.querySelector(".popup__close");

const cardTemplate = document.querySelector("#card-template").content;
const card = document.querySelector(".places__list");


export {
    profilePopup,
    cardPopup,
    profileOpenEditButton,
    profileCloseEditButton,
    profileTitle,
    profileDescription,
    profileFormElement,
    editTitle,
    editDescription,
    cardOpenAddButton,
    cardCloseAddButton,
    cardFormElement,
    addCardName,
    addCardUrl,
    imagePopup,
    imagePopupUrl,
    imagePopupCaption,
    imageCloseCard,
    cardTemplate,
    card,
};
