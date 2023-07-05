export default class ShoppingList {
  #KEY = 'shopping-list';

  constructor() {
    this.#init();
  }

  #init() {
    const shoppingList = JSON.parse(localStorage.getItem(this.#KEY));

    if (!shoppingList) {
      localStorage.setItem(this.#KEY, '[]');
    }
  }

  setBook(book) {
    console.log('setBook', book._id);

    const shoppingList = JSON.parse(localStorage.getItem(this.#KEY));
    shoppingList.push(book);

    localStorage.setItem(this.#KEY, JSON.stringify(shoppingList));
  }

  removeBook(bookId) {
    console.log('removeBook');

    const shoppingList = JSON.parse(localStorage.getItem(this.#KEY));
    shoppingList.splice(
      shoppingList.findIndex(book => book.id === bookId),
      1
    );

    localStorage.setItem(this.#KEY, JSON.stringify(shoppingList));
  }

  findBook(bookId) {
    const shoppingList = JSON.parse(localStorage.getItem(this.#KEY));

    const isBookAdded = shoppingList.find(book => {
      return book._id === bookId;
    });

    return isBookAdded ? true : false;
  }
}
