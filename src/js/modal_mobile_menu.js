const menuBtnEl = document.querySelector('.header-burger');
const menuBoxEl = document.querySelector('.js-box-menu');
const bodyEl = document.body;

menuBtnEl.addEventListener('click', onClickMenuBtn);

function onClickMenuBtn() {
  menuBoxEl.classList.toggle('show');
  bodyEl.classList.toggle('no-scroll');
}
