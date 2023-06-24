const btn = document.querySelector('.button__popup');
const popup = document.querySelector('.popup__list');
const li = document.querySelector('.expenses__header--month__title');

btn.addEventListener('click', () => {
    popup.classList.toggle('popup__list');
});