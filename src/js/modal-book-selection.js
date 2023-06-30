const modalContainerEl = document.querySelector('.modal-book-container');


export function renderModalBook(infoModalBook) {
  const modalHtml = generateModalHtml(infoModalBook);
  modalContainerEl.innerHTML = modalHtml;

   // Get all the book card elements
  const bookCards = document.querySelectorAll('.book-card');

  // Add click event listener to each book card
  bookCards.forEach((bookCard) => {
    const bookId = bookCard.dataset.bookId;
    bookCard.addEventListener('click', () => openModal(bookId));
  });

  // Получаем ссылку на модальное окно и его содержимое
  const modal = document.getElementById("modal");
  const closeBtn = modal.querySelector(".close");

  // ... (продолжение кода)

  // Функция закрытия модального окна
  function closeModal() {
    modal.style.display = "none";
  }

  // Добавляем обработчики событий
  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function generateModalHtml(book) {
  const { book_image, title, author, description, buy_links } = book;

  return `
    <div class="backdrop is-hidden" data-modal>
      <div id="modal" class="modal-book-selection">
        <div class="modal-book-content">
          <span class="close" data-modal-close>&times;</span>
          <div class="modal-book-content-wrap">
            <img class="modal-book-book-cover" src="${book_image}" alt="${title}" width="335" height="762" loading="lazy"/>
            <div class="modal-book-content-text-wrap">
              <div class="modal-book-text-wrap">
                <div class="modal-book-title-wrap">
                  <h3 class="modal-book-title">${title}</h3>
                  <p class="modal-book-author">${author}</p>
                </div>
                <p class="modal-book-description">${description}</p>
              </div>
              <ul class="modal-book-marketplaces">
                ${generateMarketplaceLinks(buy_links)}
              </ul>
            </div>
          </div>
          <button class="modal-book-shopping-list-btn">Add to shopping list</button>
          <p class='modal-book-shopping-list-btn-shopping-list-message'>Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>
        </div>
      </div>
    </div>
  `;
}


function generateMarketplaceLinks(buyLinks) {
  return buyLinks
    .map((link, index) => `<li><a href="${link}" class="modal-book-trading-platform">Marketplace ${index + 1}</a></li>`)
    .join('');
}

function openModal(bookId) {
  // Get the book object based on the bookId (assuming you have an array of books)
  const book = books.find((book) => book._id === bookId);

  // Render the modal with the book data
  const modalHtml = generateModalHtml(book);
  modalContainerEl.innerHTML = modalHtml;

  // Show the modal
  const modal = document.getElementById('modal');
  modal.style.display = 'block';

  
}

const book = {
  "_id": "642fd89ac8cf5ee957f12361",
  "list_name": "Middle Grade Paperback Monthly",
  "date": "2023-04-07T08:46:57.000Z",
  "age_group": "",
  "amazon_product_url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",
  "article_chapter_link": "",
  "author": "Barbara O'Connor",
  "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
  "book_image_width": 330,
  "book_image_height": 485,
  "book_review_link": "",
  "book_uri": "nyt://book/46604242-8624-57d1-bdd4-424c21cde273",
  "contributor": "by Barbara O'Connor",
  "contributor_note": "",
  "created_date": "2023-04-05 23:10:17",
  "description": "",
  "first_chapter_link": "",
  "price": "0.00",
  "primary_isbn10": "1250144051",
  "primary_isbn13": "9781250144058",
  "publisher": "Square Fish",
  "rank": 1,
  "rank_last_week": 0,
  "sunday_review_link": "",
  "title": "WISH",
  "updated_date": "2023-04-05 23:10:17",
  "weeks_on_list": 0,
  "buy_links": [
    {
      "name": "Amazon",
      "url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
    },
    {
      "name": "Apple Books",
      "url": "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
    },
    {
      "name": "Barnes and Noble",
      "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
    },
    {
      "name": "Books-A-Million",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"
    },
    {
      "name": "Bookshop",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
    },
    {
      "name": "IndieBound",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"
    }
  ],
  "__v": 0
};

renderModalBook(book);
