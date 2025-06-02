import { TOKEN, ID } from "./token";

// Конфиг для API запросов
const config = {
    baseUrl: `https://nomoreparties.co/v1/${ID}`,
    headers: {
        authorization: TOKEN,
        'Content-Type': 'application/json'
    }
};

// Проверка ответа от сервера
function responseCheck (response) {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
}

// API получение информации о пользователе
export function getProfile () {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            authorization: config.headers.authorization,
        },
    })
        .then(responseCheck);
}

// API получение массива информации о карточках
export function getCards () {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: {
            authorization: config.headers.authorization,
        }
    })
        .then(responseCheck);
}

// API обновление информации в профиле
export function changeProfile (title, about) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: title,
            about: about,
        })
    })
        .then(responseCheck);
}

// API добавление карточки
export function addCard (name, link) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link,
        })
    })
        .then(responseCheck);
}

// API удаление карточки
export function deleteCard (cardID) {
    return fetch(`${config.baseUrl}/cards/${cardID}`, {
        method: 'DELETE',
        headers: {
            authorization: config.headers.authorization,
        }
    })
        .then(responseCheck);
}

// API добавление/удаление лайка
export function changeLike (cardID, liked) {
    if (liked) {
        return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
            method: 'DELETE',
            headers: {
                authorization: config.headers.authorization,
            }
        })
            .then(responseCheck);
    }

    return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
        method: 'PUT',
        headers: {
            authorization: config.headers.authorization,
        }
    })
        .then(responseCheck);
}

// API изменение аватара
export function editAvatar (link) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: link,
        })
    })
        .then(responseCheck);
}