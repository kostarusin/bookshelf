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

    bodyScrollLock();

    const closeModal = () => {
      console.log('closeModal');
      modalBackdropEl.classList.add('is-hidden');
      bodyScrollUnlock();
      removeEventListener('click', event1);
      removeEventListener('click', event2);
      removeEventListener('keydown', event3);
    };

    const event1 = closeButton.addEventListener('click', () => {
      console.log('Event Close Button Clicked');
      closeModal();
    });

    const event2 = document.addEventListener('click', e => {
      console.log('Click on modal');
      if (!modal.contains(e.target)) {
        console.log('Close modal');
        closeModal();
      }
    });

    const event3 = document.addEventListener('keydown', e => {
      console.log('keydown', e.key);
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  });
}

// Body scroll lock function
function bodyScrollLock() {
  console.log('bodyScrollLock');

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
  console.log('bodyScrollUnlock');

  const body = document.querySelector('body');

  setTimeout(() => {
    body.style.overflow = 'auto';
    body.style.paddingRight = '';
  }, 250);
}
