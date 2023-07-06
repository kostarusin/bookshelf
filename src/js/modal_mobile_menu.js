const menuBtnEl = document.querySelector('.header-burger');
const menuBoxEl = document.querySelector('.js-box-menu');
const bodyEl = document.body;
const iconBurgerMenuEl = menuBtnEl.querySelector('.icon-burger-menu');
const iconCloseEl = menuBtnEl.querySelector('.head-icon-close');

menuBtnEl.addEventListener('click', onClickMenuBtn);

function onClickMenuBtn() {
  iconCloseEl.classList.toggle('is-hidden');
  iconBurgerMenuEl.classList.toggle('is-hidden');
  menuBoxEl.classList.toggle('show');
  bodyEl.classList.toggle('no-scroll');
}
