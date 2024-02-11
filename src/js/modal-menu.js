// (() => {
//     const refs = {
//       openModalMenuButton: document.querySelectorAll('.button-header'),
//       closeModalMenuButton: document.querySelector('.menu-modal-close-button'),
//       modalMenu: document.querySelector('.backdrop-menu-modal'),
//     };
  
//     refs.openModalMenuButton.forEach(element => {
//       element.addEventListener('click', toggleModal);
//     });
//     refs.closeModalMenuButton.addEventListener('click', toggleModalMenu);
  
//     //* Закривання по кліку на бекдроп
  
//   refs.modalMenu.addEventListener('click', removeModalMenu);
  
//     function removeModalMenu(event) {
//       if (event.target === event.currentTarget) {
//         refs.modalMenu.classList.add('is-hidden');
//       }
//     }
  
//     function toggleModalMenu() {
//       refs.modal.classList.toggle('is-hidden');
//       document.body.classList.toggle('no-scroll');
//     }
//   })();

// ------------Variant 2---------------

// document.addEventListener('DOMContentLoaded', function() {
//   const headerMenuToggle = document.querySelector('.button-header');
//   const menuModal = document.querySelector('.backdrop-menu-modal');
//   const menuModalCloseButton = document.querySelector('.menu-modal-close-button');

//   // Відкриття модального вікна
//   headerMenuToggle.addEventListener('click', function() {
//     menuModal.classList.remove('is-hidden');
//   });

//   // Закриття модального вікна
//   menuModalCloseButton.addEventListener('click', function() {
//     menuModal.classList.add('is-hidden');
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const headerMenuToggle = document.querySelector('.button-header');
  const menuModal = document.querySelector('.backdrop-menu-modal');
  const menuModalCloseButton = document.querySelector('.menu-modal-close-button');
  const homeButton = document.querySelector('.modal-menu-button-home');
  const favoritesButton = document.querySelector('.modal-menu-button-favorites');

  // Визначення поточної сторінки
  const currentPage = window.location.pathname;

  // Відкриття модального вікна
  headerMenuToggle.addEventListener('click', function() {
    menuModal.classList.remove('is-hidden');

    // document.body.classList.toggle('no-scroll');
    // document.body.classList.add('position: fixed');
    document.body.style.position = "fixed";

    // Зміна стилів кнопок на рожевий background в залежності від сторінки
    if (currentPage === '/index.html') {
      homeButton.style.backgroundColor = 'pink';
      favoritesButton.style.backgroundColor = '';
    } else if (currentPage === '/favorites.html') {
      favoritesButton.style.backgroundColor = 'pink';
      homeButton.style.backgroundColor = '';
    }
  });

  // Закриття модального вікна
  menuModalCloseButton.addEventListener('click', function() {
    menuModal.classList.add('is-hidden');
  });
});