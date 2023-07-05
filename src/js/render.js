import './test-modal-book';
// import './test-render-all-books';

import { renderTopBooks } from './render-top-books.js';
import { openModal } from './remote-modal';
import { receiveBookByCategory } from './category.js';
import { toggleLoader } from './loading';

import BookApi from './services.js';

const bookApi = new BookApi();

const allBooksWrapperEl = document.querySelector('.all-books-wrapper');
const allBooksListEl = document.querySelector('.all-book-list');
const allBooksTitleEl = document.querySelector('.all-books-title');
const categoryBooksWrapperEl = document.querySelector(
  '.category-books-wrapper'
);

toggleLoader();

bookApi
  .getTopBook()
  .then(topBooks => {
    renderTopBooks(topBooks);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => toggleLoader('add'));

allBooksListEl.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.tagName === 'BUTTON') {
    const category = e.target.closest('.all-books-category-item').dataset
      .category;

    openCategoryBooksBlock(category);
  }

  const bookItem = e.target.closest('.category-book-item');

  if (bookItem) {
    openModal(bookItem.dataset.bookId);
  }
});

function openCategoryBooksBlock(category) {
  toggleLoader();
  bookApi
    .getBooksByCategory(category)
    .then(data => {
      categoryBooksWrapperEl.style.display = 'block';
      allBooksWrapperEl.style.display = 'none';
      allBooksTitleEl.textContent = '';
      allBooksListEl.innerHTML = '';

      setActiveCategory(category);
      receiveBookByCategory(data);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => toggleLoader('add'));
}

function setActiveCategory(category) {
  const categoryList = document.querySelector('.list-categories').children;

  categoryList[0].firstElementChild.classList.remove('active-category');

  const arr = Array.from(categoryList);

  arr.find((el, ind) => {
    if (el.firstElementChild.textContent === category) {
      categoryList[ind].firstElementChild.classList.add('active-category');
    }
  });
}
