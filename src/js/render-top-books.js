const allBooksTitleEl = document.querySelector('.all-books-title');
const allBooksListEl = document.querySelector('.all-book-list');

// ============================================================================
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
    console.dir(
      `bookItem clicked... open modal with book details ${bookItem.dataset.bookId}`
    );
  }
});
// ============================================================================

export function renderTopBooks(topBookList) {
  allBooksTitleEl.innerHTML =
    'Best Sellers&nbsp;<span class="all-books-title-accent">Books<span>';

  allBooksListEl.innerHTML = topBookList
    .map(category => createBookCategoryMarkup(category))
    .join('');
}

// Function Create Category Book List ================
function createBookCategoryMarkup({ list_name, books }) {
  return `
    <li class="category-item" data-category="${list_name}">
      <h2 class="category-title">${list_name}</h2>
      <ul class="category-book-list">
        ${createBookCardMarkup(books)}
      </ul>
      <button class="see-more__button" type="button">See more</button>
    </li>
  `;
}

// Function Create Book Card Markup ==================
function createBookCardMarkup(books) {
  return books
    .map(
      ({ _id, title, author, book_image }) => `
  <li class="category-book-item" data-book-id="${_id}">
    <a href="#" class="book-link">
      <div class="book-image-wrapper">
        <img class="book-image" src="${book_image}" alt="${title}" loading="lazy"/>
        <div class="book-overlay">quick view</div>
      </div>
      <h3 class="book-title">${title}</h3>
      <p class="book-author">${author}</p>
    </a>
  </li>
  `
    )
    .join('');
}
