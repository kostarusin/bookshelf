import { renderTopBooks } from './render-top-books.js';

// import topBooks from './static-json-temporary/top_books.json';
// renderTopBooks(topBooks);

import BookApi from './services.js';

const bookApi = new BookApi();

bookApi
  .getTopBook()
  .then(topBooks => {
    console.log(topBooks);
    renderTopBooks(topBooks);
  })
  .catch(error => {
    console.log(error);
  });
