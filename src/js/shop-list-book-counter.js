const bookCounterEl = document.querySelector('.header-book-count');

updateBookCounter();

export function updateBookCounter() {
  const books = JSON.parse(localStorage.getItem('shopping-list'));
  bookCounterEl.textContent = books.length;
}
