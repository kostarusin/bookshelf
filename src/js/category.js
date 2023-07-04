// функція яка буде рендерити картку для пошуку за категоріями
import Notiflix from 'notiflix';
import BookApi from './services.js';
import { openModal } from './remote-modal';
import { renderModal } from './modal-book-selection';


const bookApi = new BookApi();


const categoryBookList = document.querySelector('.category-books-list');
const categoryTitle = document.querySelector('.category-books-title');

function createBookCard(books) {
    console.log(books);
  const booksCard = books
    .map(({ _id, author, title, book_image, description }) => {
      return `
        <li class="book-card" data-book-id="${_id}">
            <a href="#" class="book-link">
            <div class="overlay-wrapper">
            <img class="book-image-category" src="${book_image}" alt="${title}" loading="lazy"/>
            <div class="book-overlay">${description}</div>
            </div>
            <h2 class="book-title">${title}</h2>
            <p class="author">${author}</p>
            </a>
        </li>
    `;
    })
    .join('');  

    return booksCard;
}

function createCategoryTitle(list_name) {
    const words = list_name.split(' ');
    const lastWord = words.pop();
    const designedTitle = words.join(' ') + ' <span class="all-books-title-accent">' + lastWord + '</span>';
    return `<h1 class="all-books-title">${designedTitle}</h1>`;
}


export function receiveBookByCategory(selectedCategory) {
    console.log(selectedCategory);
    if (selectedCategory.length < 1) {
    Notiflix.Notify.failure('Unfortunately there are no books under seleceted category');
    }

    categoryTitle.innerHTML = createCategoryTitle(selectedCategory[0].list_name);
    categoryBookList.innerHTML = createBookCard(selectedCategory);
}

categoryBookList.addEventListener('click', e => {
    e.preventDefault();

    const targetBook = e.target.closest('.book-card');
    console.log(targetBook);
    if (targetBook) {
        openModal(targetBook.dataset.bookId) 
    }
});