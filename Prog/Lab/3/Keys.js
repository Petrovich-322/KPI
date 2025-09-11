'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const length = 8;

const generateKey = (length, characters) => {
    const size = characters.length;
    const max = size - length;
    const point = Math.floor(Math.random() * (max + 1));
    return characters.substr(point, length);
}

console.log(generateKey(length, characters));
