import { renderModal } from './modal-book-selection';
import BookApi from './services.js';

const scrollButton = document.getElementById('scroll-top');

const bookApi = new BookApi();

export function openModal(bookId) {
  bookApi.getBookDetail(bookId).then(bookDetails => {
    renderModal(bookDetails);

    const modalBackdropEl = document.querySelector('.backdrop');
    modalBackdropEl.classList.remove('is-hidden');

    const closeButton = modalBackdropEl.querySelector('.close');
    const modal = modalBackdropEl.querySelector('#modal');

    bodyScrollLock();

    const closeModal = () => {
      modalBackdropEl.classList.add('is-hidden');

      closeButton.removeEventListener('click', event1);
      modalBackdropEl.removeEventListener('click', event2);
      window.removeEventListener('keydown', event3);

      bodyScrollUnlock();
    };

    const event1 = closeButton.addEventListener('click', () => {
      closeModal();
    });

    const event2 = modalBackdropEl.addEventListener('click', e => {
      if (!modal.contains(e.target)) {
        closeModal();
      }
    });

    const event3 = window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    });
  });
}

// Body scroll lock function
function bodyScrollLock() {
  scrollButton.classList.remove('show');

  const body = document.querySelector('body');
  const bodyStyle = window.getComputedStyle(body);
  const bodyWidth =
    body.offsetWidth +
    parseInt(bodyStyle.marginLeft) +
    parseInt(bodyStyle.marginRight);
  const verticalScrollBar = window.innerWidth - bodyWidth;

  body.style.overflow = 'hidden';
  body.style.paddingRight = verticalScrollBar + 'px';
}

// Body scroll unlock function
function bodyScrollUnlock() {
  const body = document.querySelector('body');

  setTimeout(() => {
    body.style.overflow = 'auto';
    body.style.paddingRight = '';
    scrollButton.classList.add('show');
  }, 250);
}
