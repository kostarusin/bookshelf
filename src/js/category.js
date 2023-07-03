// функція яка буде рендерити картку для пошуку за категоріями
import Notiflix from 'notiflix';
import BookApi from './services.js';
const bookApi = new BookApi();


const categoryBookList = document.querySelector('.category-books-list');
const categoryTitle = document.querySelector('.category-books-title');
const buttonSeeMore = document.querySelector('.see-more__button');

function createBookCard(books) {
    console.log(books);
  const booksCard = books
      .map(({ author, title, book_image, description }) => {
      return `
        <div class="book-card">
            <a href="#" class="book-link">
            <img class="book-image-category" src="${book_image}" alt="${title}" loading="lazy"/>
            <h2 class="book-title">${title}</h2>
            <p class="author">${author}</p>
            <div class="book-overlay">${description}</div>
            </a>
        </div>
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

buttonSeeMore.addEventListener('click', showCategory);

function showCategory(e) {
    e.preventDefault();
}