
const modalContainerEl = document.querySelector('.modal-book-container');

export function renderModalBook(infoModalBook) {
  
  
}
 

  

function modalHtml (books) {
  return books
    .map(
      ({ book_image, title, author, contributor, buy_links }) => `
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
                <p class="modal-book-description">${contributor}</p>
              </div>
              <ul class="modal-book-marketplaces">
              ${buy_links}
                // <li>
                //   <a href="#" class="modal-book-trading-platform">Marketplace 1</a>
                // </li>
                // <li>
                //   <a href="#" class="modal-book-trading-platform">Marketplace 2</a>
                // </li>
                // <li>
                //   <a href="#" class="modal-book-trading-platform">Marketplace 3</a>
                // </li>
              </ul>
            </div>
          </div>
          <button class="modal-book-shopping-list-btn">Add to shopping list</button>
          <p class='modal-book-shopping-list-btn-shopping-list-message'>Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}


console.log(modalHtml)
