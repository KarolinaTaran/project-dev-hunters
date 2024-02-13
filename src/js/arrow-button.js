const upBtn = document.querySelector('.up-btn');
upBtn.addEventListener('click', onScroll);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 200) {
    showUpBtn();
  } else {
    hideUpBtn();
  }
}

function onScroll() {
  document.documentElement.scrollTop = 0;
}
function showUpBtn() {
  upBtn.classList.remove('is-hidden');
}

function hideUpBtn() {
  upBtn.classList.add('is-hidden');
}
