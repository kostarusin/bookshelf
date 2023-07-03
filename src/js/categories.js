//import categories from '../../categories_list.json';
//import top_books from '../../top_books.json';
import BookApi from './services.js';
const bookApi = new BookApi();

const listCategoriesEl = document.querySelector('.list-categories');

//console.log(typeof []);
bookApi
  .getCategories()
  .then(categories => {
    console.log(categories);
    for (const category of categories) {
      let item = document.createElement('li');
      item.classList.add('item-categories');
      let link = document.createElement('a');
      link.textContent = category.list_name;
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

const toUpperCase = function (textCategory) {
  const normalizedToUpperCase = textCategory.toUpperCase();
  console.log(normalizedToUpperCase);
};
