import { renderModal } from './modal-book-selection';
import BookApi from './services.js';
import ShoppingList from './storage';

const scrollButton = document.getElementById('scroll-top');

const bookApi = new BookApi();
const shoppingList = new ShoppingList();

const modalBackdropEl = document.querySelector('.backdrop');
const closeButton = modalBackdropEl.querySelector('.close');
const modal = modalBackdropEl.querySelector('#modal');

const addToShoppingListBtn = modal.querySelector(
  '.modal-book-shopping-list-btn'
);
const modalMessage = modal.querySelector(
  '.modal-book-shopping-list-btn-shopping-list-message'
);

export function openModal(bookId) {
  bookApi
    .getBookDetail(bookId)
    .then(bookDetails => {
      renderModal(bookDetails);

      modalBackdropEl.classList.remove('is-hidden');

      bodyScrollLock();

      const closeModal = () => {
        modalBackdropEl.classList.add('is-hidden');

        closeButton.removeEventListener('click', event1);
        modalBackdropEl.removeEventListener('click', event2);
        window.removeEventListener('keydown', event3);
        addToShoppingListBtn.removeEventListener('click', event4);

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

      const event4 = addToShoppingListBtn.addEventListener('click', () => {
        console.log('Book Details', bookDetails._id);
        remoteShoppingList(bookDetails);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

function remoteShoppingList(bookDetails) {
  if (addToShoppingListBtn.textContent === 'Added to shopping list') {
    console.log('Added to shopping list', bookDetails._id);
    return;
  }

  shoppingList.setBook(bookDetails);
  addToShoppingListBtn.textContent = 'Added to shopping list';
  modalMessage.classList.remove('message-hide');
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
