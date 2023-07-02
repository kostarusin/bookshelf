//import categories from '../../categories_list.json';
//import top_books from '../../top_books.json';
import BookApi from './services.js';
import { renderTopBooks } from './render-top-books.js';
const bookApi = new BookApi();
const categories = bookApi.getCategories();

const listCategoriesEl = document.querySelector('.list-categories');
let activeCategoryEl = document.querySelector('.active-category');

bookApi
  .getCategories()
  .then(categories => {
    for (const category of categories) {
      let item = document.createElement('li');
      let link = document.createElement('a');
      link.classList.add('link-categories');
      link.textContent = category.list_name;
      if (category.list_name.length > 28) {
        link.classList.add('reduce-font-size');
      }
      link.setAttribute('href', '#');
      item.append(link);
      listCategoriesEl.append(item);
    }
  })
  .catch(error => {
    console.log(error);
  });

listCategoriesEl.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName === 'A') {
    const textCategory = event.target.textContent;
    //console.log(textCategory);
    //console.log(event.target);
    //toUpperCase(textCategory);
    getBooksByCategory().then(category => {
      console.log(category);
    });
  }
});
