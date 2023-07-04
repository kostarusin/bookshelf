import { renderTopBooks } from './render-top-books.js';
import { openModal } from './remote-modal';

import BookApi from './services.js';

const bookApi = new BookApi();

bookApi
  .getTopBook()
  .then(topBooks => {
    renderTopBooks(topBooks);
  })
  .catch(error => {
    console.log(error);
  });

const allBooksListEl = document.querySelector('.all-book-list');

allBooksListEl.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.tagName === 'BUTTON') {
    const category = e.target.closest('.category-item').dataset.category;
    console.info(
      `button See More clicked... Go to function view books by category (${category})`
    );
  }

  const bookItem = e.target.closest('.category-book-item');

  if (bookItem) {
    openModal(bookItem.dataset.bookId);
  }
});
