const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

function modalOpenClose() {
  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  modal.addEventListener('click', event => {
    if (!event.target.classList.contains('backdrop-exercises-modal')) {
      return;
    }
    toggleModal();
  });

  document.addEventListener('keydown', closeByEsc);

  function closeByEsc(event) {
    if (event.key === 'Escape') {
      modal.classList.remove('is-open');
    }
  }

  function toggleModal() {
    modal.classList.toggle('is-open');
  }
}

modalOpenClose();
