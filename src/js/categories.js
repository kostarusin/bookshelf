import categories from '../../categories_list.json';
import top_books from '../../top_books.json';
// console.log(categories[0]);
// console.dir(categories);
console.dir(top_books[0]);

const listCategoriesEl = document.querySelector('.list-categories');

//console.log(typeof []);
for (const category of categories) {
  let item = document.createElement('li');
  item.classList.add('item-categories');
  //const itemCategoriesEl = document.querySelector('.item-categories');
  let link = document.createElement('a');
  link.textContent = category.list_name;
  link.setAttribute('href', '#');
  item.append(link);
  listCategoriesEl.append(item);
}

listCategoriesEl.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName === 'A') {
    const textCategory = event.target.textContent;
    //console.log(textCategory);
    //console.log(event.target);
    toUpperCase(textCategory);
  }
});

const toUpperCase = function (textCategory) {
  const normalizedToUpperCase = textCategory.toUpperCase();
  console.log(normalizedToUpperCase);
};
