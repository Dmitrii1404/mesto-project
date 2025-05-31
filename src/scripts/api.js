import { TOKEN, ID } from "./token";

const config = {
    baseUrl: `https://nomoreparties.co/v1/${ID}`,
    headers: {
        authorization: TOKEN,
        'Content-Type': 'application/json'
    }
};

function responseCheck (response) {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
}

export function getProfile () {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            authorization: config.headers.authorization,
        },
    })
        .then(responseCheck);
}

export function getCards () {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: {
            authorization: config.headers.authorization,
        }
    })
        .then(responseCheck);
}