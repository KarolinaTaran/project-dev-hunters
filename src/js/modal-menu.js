
document.addEventListener('DOMContentLoaded', function() {
  const headerMenuToggle = document.querySelector('.button-header');
  const menuModal = document.querySelector('.backdrop-menu-modal');
  const menuModalCloseButton = document.querySelector('.menu-modal-close-button');
  const homeButton = document.querySelector('.modal-menu-button-home');
  const favoritesButton = document.querySelector('.modal-menu-button-favorites');
  const headerLogo = document.querySelector('.header-logo');

  // Визначення поточної сторінки
  const currentPage = window.location.pathname;

  // Відкриття модального вікна
  headerMenuToggle.addEventListener('click', function() {
    menuModal.classList.remove('is-hidden');

    document.body.style.position = "fixed";
    headerLogo.style.display = 'none';

    // Зміна стилів кнопок на рожевий background в залежності від сторінки
    if (currentPage === '/project-dev-hunters/index.html') {
      homeButton.style.backgroundColor = 'var(--primary-white-color)';
      homeButton.style.color = 'var( --main-black-color)';

      favoritesButton.style.backgroundColor = '';
      favoritesButton.style.color = '';
    } else if (currentPage === '/project-dev-hunters/favorites.html') {
      favoritesButton.style.backgroundColor = 'var(--primary-white-color)';
      favoritesButton.style.color = ' var( --main-black-color)';

      homeButton.style.backgroundColor = '';
      homeButton.style.color = '';
    }
  });

  // Закриття модального вікна
  menuModalCloseButton.addEventListener('click', function() {
    menuModal.classList.add('is-hidden');
    headerLogo.style.display = '';
  });
});