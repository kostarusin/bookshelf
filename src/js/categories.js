import categories from '../../categories_list.json';
console.log(categories[0]);
console.dir(categories);

const listCategoriesEl = document.querySelector('.list-categories');

//console.log(typeof []);
for (const category of categories) {
  let item = document.createElement('li');
  item.textContent = category.list_name;
  listCategoriesEl.append(item);
  // <a class="menu-link" href="./index.html">
  //   Studio
  // </a>;
}
