import amazonImg from '../images/marketplaces/amazon.png';
import appleBooksImg from '../images/marketplaces/apple-books.png';
import bookshopImg from '../images/marketplaces/bookspop.png';

const modalContainer = document.querySelector('.modal-book-content-wrap');

export function renderModal(bookDetails) {
  const { book_image, title, author, description, buy_links } = bookDetails;

  const markup = `
    <img
      class="modal-book-book-cover"
      src="${book_image}" 
      alt="${title}"
      width="335" 
      height="762" 
      loading="lazy"/>
    <div class="modal-book-content-text-wrap">
      <div class="modal-book-text-wrap">
        <div class="modal-book-title-wrap">
          <h3 class="modal-book-title">${title}</h3>
          <p class="modal-book-author">${author}</p>
        </div>
        ${
          description
            ? `<p class="modal-book-description">${description}</p>`
            : `<p class="modal-book-description not-description">No description</p>`
        }
      </div>
      <ul class="modal-book-marketplaces">
        ${generateMarketplaceLinks(buy_links)}
      </ul>
    </div>
  `;

  modalContainer.innerHTML = markup;

const closeModal = () => {
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('#modal');

  backdrop.classList.add('is-hidden');
  modal.classList.remove('is-visible');
};

const handleClickOutside = (event) => {
  const modal = document.querySelector('#modal');

  if (!modal.contains(event.target)) {
    closeModal();
  }
};

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeModal);

document.addEventListener('click', handleClickOutside);
document.addEventListener('keydown', handleEscapeKey);


function generateMarketplaceLinks(buy_links) {
  return buy_links
    .map(({ name, url }) => {
      const iconId = name.toLowerCase().replace(' ', '-');

      const markup = img => {
        return `
          <li class="trading-platform-color">
            <a
              href="${url}" class="modal-book-trading-platform"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img height="36" width="36" src="${img}" alt="${name}" loading="lazy"/>
            </a>
          </li>
        `;
      };

      switch (iconId) {
        case 'amazon': {
          return markup(amazonImg);
        }
        case 'apple-books': {
          return markup(appleBooksImg);
        }
        case 'bookshop': {
          return markup(bookshopImg);
        }
      }
    })
    .join('');
}
