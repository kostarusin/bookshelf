import { renderModal } from './modal-book-selection';
import BookApi from './services.js';

const bookApi = new BookApi();

export function openModal(bookId) {
  bookApi.getBookDetail(bookId).then(bookDetails => {
    renderModal(bookDetails);

    const modalBackdropEl = document.querySelector('.backdrop');
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
