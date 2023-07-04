import BookApi from './services.js';
import { renderTopBooks } from './render-top-books.js';
import { receiveBookByCategory } from './category.js';
const bookApi = new BookApi();

const listCategoriesEl = document.querySelector('.list-categories');
let activeCategoryEl = document.querySelector('.active-category');
const categoryBookList = document.querySelector('.category-books-list');
const categoryTitle = document.querySelector('.category-books-title');
const allBooksTitleEl = document.querySelector('.all-books-title');
const allBooksListEl = document.querySelector('.all-book-list');
const categoryBooksWrapperEl = document.querySelector(
  '.category-books-wrapper'
);
const allBooksWrapperEl = document.querySelector('.all-books-wrapper');

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
    console.log(textCategory);
    if (activeCategoryEl === event.target) {
      return;
    }

    activeCategoryEl.classList.remove('active-category');
    event.target.classList.add('active-category');
    activeCategoryEl = event.target;

    if (event.target.textContent === 'All Categories') {
      switchBookCategory(true);

      bookApi
        .getTopBook()
        .then(topBooks => {
          renderTopBooks(topBooks);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      switchBookCategory(false);

      bookApi.getBooksByCategory(textCategory).then(categories => {
        receiveBookByCategory(categories);
      });
    }
  }
});

function switchBookCategory(isAllCategory) {
  if (isAllCategory) {
    categoryBooksWrapperEl.style.display = 'none';
    allBooksWrapperEl.style.display = 'block';
    categoryTitle.textContent = '';
    categoryBookList.innerHTML = '';
  } else {
    categoryBooksWrapperEl.style.display = 'block';
    allBooksWrapperEl.style.display = 'none';
    allBooksTitleEl.textContent = '';
    allBooksListEl.innerHTML = '';
  }
}
