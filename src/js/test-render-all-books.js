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


function openModal(bookId) {
  bookApi.getBookDetail(bookId).then(bookDetails => {
    renderModal(bookDetails);

    modalBackdropEl.classList.remove('is-hidden');

    const closeButton = modalBackdropEl.querySelector('.close');
    const modal = modalBackdropEl.querySelector('#modal');

    const closeModal = () => {
      modalBackdropEl.classList.add('is-hidden');
      removeEventListener('click', event1);
      removeEventListener('click', event2);
      removeEventListener('keydown', event3);
    };

    const event1 = closeButton.addEventListener('click', () => {
      closeModal();
    });

    const event2 = document.addEventListener('click', e => {
      if (!modal.contains(e.target)) {
        closeModal();
      }
    });

    const event3 = document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  });
}

// bookApi
//   .getBooksByCategory('Audio Fiction')
//   .then(category => {
//     console.log(category);
//     receiveBookByCategory(category);
//   })
//   .catch(err => {
//     console.log(err);
//   });

