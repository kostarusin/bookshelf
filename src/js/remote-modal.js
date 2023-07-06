import { renderModal } from './modal-book-selection';
import { updateBookCounter } from './shop-list-book-counter';
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

let currentBook;

addToShoppingListBtn.addEventListener('click', () => {
  remoteShoppingList(currentBook);
});

export function openModal(bookId) {
  bookApi
    .getBookDetail(bookId)
    .then(bookDetails => {
      currentBook = bookDetails;
      renderModal(bookDetails);

      const isBookAdded = shoppingList.findBook(bookDetails._id);

      if (isBookAdded) {
        addToShoppingListBtn.textContent = 'Remove from shopping list';
        addToShoppingListBtn.dataset.isAdd = 'true';
        modalMessage.classList.remove('message-hide');
      } else {
        addToShoppingListBtn.textContent = 'Add to shopping list';
        addToShoppingListBtn.dataset.isAdd = 'false';
        modalMessage.classList.add('message-hide');
      }

      modalBackdropEl.classList.remove('is-hidden');

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
    })
    .catch(error => {
      console.log(error);
    });
}

function remoteShoppingList(book) {
  if (addToShoppingListBtn.dataset.isAdd === 'true') {
    const isRemoveBook = shoppingList.removeBook(book._id);

    if (isRemoveBook) {
      addToShoppingListBtn.textContent = 'add to shopping list';
      addToShoppingListBtn.dataset.isAdd = 'false';
      modalMessage.classList.add('message-hide');
    }

    // return;
  } else {
    shoppingList.setBook(book);
    addToShoppingListBtn.textContent = 'remove from the shopping list';
    addToShoppingListBtn.dataset.isAdd = 'true';
    modalMessage.classList.remove('message-hide');
  }

  updateBookCounter();
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
