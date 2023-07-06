const bookCounterEl = document.querySelector('.header-book-count');

updateBookCounter();

export function updateBookCounter() {
  const bookCount = JSON.parse(localStorage.getItem('shopping-list')).length;

  if (bookCount > 0) {
    bookCounterEl.textContent = bookCount;
    bookCounterEl.style.display = 'flex';
  } else {
    bookCounterEl.style.display = 'none';
    bookCounterEl.textContent = '';
  }
}
