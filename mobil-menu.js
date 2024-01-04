(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobil-menu-open]'),
    closeModalBtn: document.querySelector('[data-mobil-menu-close]'),
    modal: document.querySelector('[data-mobil-menu]'),
    menuLinks: document.querySelectorAll('.window-menu-link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleModal();
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
