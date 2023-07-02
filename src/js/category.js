// функція яка буде рендерити картку для пошуку за категоріями

const categoryBookList = document.querySelector('.category-book-list');
const categoryTitle = document.querySelector('.category-books-title');

function createBookCard(books) {
    console.log(books);
  const booksCard = books
      .map(({ author, title, book_image, description }) => {
      return `
        <div class="book-card">
            <a href="#" class="book-link">
            <img class="book-image" src="${book_image}" alt="${title}" loading="lazy"/>
            <h2 class="book-title">${title}</h2>
            <p class="book-author">${author}</p>
            <div class="book-overlay">${description}</div>
            </a>
        </div>
    `;
    })
    .join('');

    return booksCard;
}

function createCategoryTitle(list_name) {
    return `<h1 class="all-books-title">${list_name}</h1>`;
}


export function receiveBookByCategory(selectedCategory) {
    console.log(selectedCategory);
    if (selectedCategory.length < 1) {
        alert('no products');
    }

    categoryTitle.innerHTML = createCategoryTitle(selectedCategory[0].list_name);
    categoryBookList.innerHTML = createBookCard(selectedCategory);
}
