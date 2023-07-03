import { receiveBookByCategory } from './category.js';
import { renderTopBooks } from './render-top-books.js';

// import topBooks from './static-json-temporary/top_books.json';
// renderTopBooks(topBooks);

import BookApi from './services.js';



const bookApi = new BookApi();

bookApi
  .getTopBook()
  .then(topBooks => {
    renderTopBooks(topBooks);
  })
  .catch(error => {
    console.log(error);
  });


// bookApi
//   .getBooksByCategory('Audio Fiction')
//   .then(category => {
//     console.log(category);
//     receiveBookByCategory(category);
//   })
//   .catch(err => {
//     console.log(err);
//   });