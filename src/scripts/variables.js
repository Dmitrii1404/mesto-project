const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const avatarPopup = document.querySelector(".popup_type_edit_avatar");

const profileOpenEditButton = document.querySelector(".profile__edit-button");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");

const profileFormElement = profilePopup.querySelector(".popup__form");
const editTitle = profilePopup.querySelector(".popup__input_type_name");
const editDescription = profilePopup.querySelector(".popup__input_type_description");

const cardOpenAddButton = document.querySelector(".profile__add-button");

const cardFormElement = cardPopup.querySelector(".popup__form");
const addCardName = cardPopup.querySelector(".popup__input_type_card-name");
const addCardUrl = cardPopup.querySelector(".popup__input_type_url");

const imagePopup = document.querySelector(".popup_type_image");
const imagePopupUrl = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

const avatarOpenEditButton = document.querySelector(".profile__image-container");
const avatarFormElement = avatarPopup.querySelector(".popup__form");
const addAvatarUrl = avatarPopup.querySelector(".popup__input_type_url");

const cardTemplate = document.querySelector("#card-template").content;
const card = document.querySelector(".places__list");

export {
    profilePopup,
    cardPopup,
    avatarPopup,
    profileOpenEditButton,
    profileTitle,
    profileDescription,
    profileImage,
    profileFormElement,
    editTitle,
    editDescription,
    cardOpenAddButton,
    cardFormElement,
    addCardName,
    addCardUrl,
    imagePopup,
    imagePopupUrl,
    imagePopupCaption,
    avatarOpenEditButton,
    avatarFormElement,
    addAvatarUrl,
    cardTemplate,
    card,
};
