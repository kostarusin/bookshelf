// import { renderTopBooks } from './render-top-books.js';
// import { openModal } from './remote-modal';
// import { receiveBookByCategory } from './category.js';


import BookApi from './services.js';
import { receiveBookByCategory } from './category.js';

// import { toggleLoader } from './loader';



// import BookApi from './services.js';

// const bookApi = new BookApi();

// const allBooksListEl = document.querySelector('.all-book-list');
// const allBooksWrapperEl = document.querySelector('.all-books-wrapper');


  if (e.target.tagName === 'BUTTON') {
    const category = e.target.closest('.all-books-category-item').dataset
      .category;
    console.info(
      `button See More clicked... Go to function view books by category (${category})`
    );
  }

  const bookItem = e.target.closest('.category-book-item');
  console.log(bookItem);
  if (bookItem) {
    openModal(bookItem.dataset.bookId);
  }


// const bookApi = new BookApi();
// toggleLoader();
// bookApi
//   .getTopBook()
//   .then(topBooks => {
//     renderTopBooks(topBooks);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => toggleLoader('add'));


// allBooksListEl.addEventListener('click', e => {
//   e.preventDefault();

//   if (e.target.tagName === 'BUTTON') {
//     const category = e.target.closest('.all-books-category-item').dataset
//       .category;

//     openCategoryBooksBlock(category);
//   }

//   const bookItem = e.target.closest('.category-book-item');

//   if (bookItem) {
//     openModal(bookItem.dataset.bookId);
//   }
// });

// function openCategoryBooksBlock(category) {
//   bookApi.getBooksByCategory(category).then(data => {
//     allBooksWrapperEl.style.display = 'none';

//     receiveBookByCategory(data);
//   });
// }

