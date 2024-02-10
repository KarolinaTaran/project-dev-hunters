(() => {
    const refs = {
      openModalMenuButton: document.querySelectorAll('.button-header'),
      closeModalMenuButton: document.querySelector('.menu-modal-close-button'),
      modalMenu: document.querySelector('.backdrop-menu-modal'),
    };
  
    refs.openModalMenuButton.forEach(element => {
      element.addEventListener('click', toggleModal);
    });
    refs.closeModalMenuButton.addEventListener('click', toggleModalMenu);
  
    //* Закривання по кліку на бекдроп
  
  refs.modalMenu.addEventListener('click', removeModalMenu);
  
    function removeModalMenu(event) {
      if (event.target === event.currentTarget) {
        refs.modalMenu.classList.add('is-hidden');
      }
    }
  
    function toggleModalMenu() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  })();