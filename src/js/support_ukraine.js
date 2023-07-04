import array from './static-json-temporary/support_ukraine.json';

const divEl = document.querySelector('.slider_line');
const olEl = document.querySelector('.ol_support');

function markUpSupportUkraine() {
  let list = array.map(item => {
    let listItem = document.createElement('li');
    listItem.className = 'list';
    listItem.innerHTML = `
      <a class="support_link" href="${item.url}">
        <img class="image" src="${item.img}" alt="${item.title}" height="32" />
      </a>
    `;
    return listItem;
  });

  list.forEach(item => {
    olEl.appendChild(item);
  });
}
markUpSupportUkraine();
let offset = 0;
let down = document
  .querySelector('.down-scroll')
  .addEventListener('click', function () {
    offset += 200;
    if (offset > 352) {
      offset = 0;
    }
    divEl.style.top = -offset + 'px';
  });
