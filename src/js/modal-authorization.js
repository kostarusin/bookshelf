
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-desk]"),
    closeModalBtn: document.querySelector("[data-modal-close-desk]"),
    modal: document.querySelector("[data-modal-new]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hiddens");
  }
})();



(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-mobile]"),
    closeModalBtn: document.querySelector("[data-modal-close-mobile]"),
    modal: document.querySelector("[data-modal-new]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hiddens");
  }
})();