const loaderEl = document.querySelector('.js-loader');

export function toggleLoader(method = 'remove') {
  loaderEl.classList[method]('is-hidden');
}