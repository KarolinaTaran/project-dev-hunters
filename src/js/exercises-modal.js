import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { chooseModalCloseButton } from './modal-rating';

let openModalBtn;
const closeModalBtn = document.querySelector('[data-exercise-modal-close]');
const backdrop = document.querySelector('[data-exercise-modal]');
const modal = document.querySelector('.exercises-modal');
const modalExerciseContent = document.querySelector('.exercises-modal-content');
const loader = document.querySelector('.span-exercises-modal-loader');
const body = document.querySelector('body');

const key = 'exerciseItems';

export let idExercisesModal;

export function chooseButtonForModal() {
  openModalBtn = document.querySelectorAll('[data-exercise-modal-open]');
  openModalBtn.forEach(e => {
    e.addEventListener('click', event => {
      scrollController.disabledScroll();
      loader.classList.add('exercises-modal-loader');
      idExercisesModal = event.currentTarget.dataset.id;
      modalExerciseContent.innerHTML = '';

      backdrop.classList.add('is-open');
      createExersiceCard();
      modalClose();
    });
  });
}

// ---------------   functions of geting datas from server   ---------------

async function getData() {
  axios.defaults.baseURL = 'https://energyflow.b.goit.study';
  return await axios.get(`/api/exercises/${idExercisesModal}`);
}

async function createExersiceCard() {
  try {
    const response = await getData();
    const objDataOfExercise = response.data;
    drawExercisesModal(objDataOfExercise);
    addAndRemoveFavorites(objDataOfExercise);
  } catch (error) {
    catchError(error);
  } finally {
    loader.classList.remove('exercises-modal-loader');
  }
}

// ---------------   functions for drawing modal content   ---------------

function drawExercisesModal({
  bodyPart,
  burnedCalories,
  description,
  equipment,
  gifUrl,
  name,
  popularity,
  rating,
  target,
  time,
}) {
  let ratingOfExercise = rating.toFixed(1);

  const modalContentHtml = `
  <div class="exercises-modal-gif-container">
    <img src="${gifUrl}" alt="${name}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${name}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${ratingOfExercise}</p>
          <ul class="exercises-modal-stars-list">
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
          </ul>
      </div>
      <ul class="exercises-modal-block-list">
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Target</h5>
              <p class="exercises-modal-block-paragraf">${target}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${bodyPart}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${equipment}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${popularity}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${burnedCalories}/${time} min</p>
          </li>
      </ul>
      <div class="exercises-modal-container-text" id="scrollTry">
      <p class="exercises-modal-text">${description}</p>
      </div>
      <div class="exercises-modal-buttons">
        <button class="exercises-modal-button-favorites" type="button">
          Add to favorites
          <svg class="exercises-modal-button-icon">
            <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-heart"></use>
          </svg>
      </button>
      <button class="exercises-modal-button-remove hidden-button" type="button">
        Remove from
        <svg class="exercises-modal-button-icon">
          <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-heart"></use>
        </svg>
      </button>
          <button class="exercises-modal-button-rating" type="button">Give a rating</button>
      </div>
  </div>
  `;
  modalExerciseContent.insertAdjacentHTML('beforeend', modalContentHtml);
  drawStars(Math.round(rating));

  const text = document.querySelector('.exercises-modal-text');
  const textContainer = document.querySelector(
    '.exercises-modal-container-text'
  );

  if (text.clientHeight > textContainer.clientHeight) {
    textContainer.classList.add('scroll-on');
  }

  chooseModalCloseButton();
}

function drawStars(number) {
  const star = modal.querySelectorAll('.exercises-modal-star-icon');
  const arrOfStars = [...star];
  for (let i = 0; i < number; i += 1) {
    arrOfStars[i].classList.add('selected-stars');
  }
}

// ---------------   functions of errors   ---------------

function catchError(error) {
  console.log(error);
  const errName = error.name;
  const errText = error.message;
  iziToast.error({
    position: 'topRight',
    message: `${errName}: ${errText}.`,
  });
}

// ---------------   functions of adding exercise to favorites   ---------------

function addAndRemoveFavorites(obj) {
  const addToFavoritesBtn = document.querySelector(
    '.exercises-modal-button-favorites'
  );
  const removeFromFavoritesBtn = document.querySelector(
    '.exercises-modal-button-remove'
  );

  if (localStorage.getItem(key) !== null) {
    const itemExerciceById = JSON.parse(localStorage.getItem(key)).find(
      item => {
        return item._id === obj._id;
      }
    );
    if (itemExerciceById) {
      changeBtnsAddRemove();
      removeFromFavoritesBtn.addEventListener(
        'click',
        removeExerciseFromFavoLS
      );
    } else {
      addToFavoritesBtn.addEventListener('click', addExerciseToFavoLS);
    }
  } else {
    addToFavoritesBtn.addEventListener('click', addExerciseToFavoLS);
  }

  addToFavoritesBtn.addEventListener('click', addExerciseToFavoLS);
  removeFromFavoritesBtn.addEventListener('click', removeExerciseFromFavoLS);

  function addExerciseToFavoLS() {
    const arrFavouritesLS = JSON.parse(localStorage.getItem(key)) || [];
    arrFavouritesLS.push(obj);
    localStorage.setItem(key, JSON.stringify(arrFavouritesLS));
    changeBtnsAddRemove();
  }

  function removeExerciseFromFavoLS() {
    const arrFavouritesLS = JSON.parse(localStorage.getItem(key));
    const itemExerciceById = arrFavouritesLS.find(item => {
      return item._id === obj._id;
    });
    arrFavouritesLS.splice(arrFavouritesLS.indexOf(itemExerciceById), 1);
    localStorage.setItem(key, JSON.stringify(arrFavouritesLS));
    changeBtnsAddRemove();
  }
}

function changeBtnsAddRemove() {
  const addToFavoritesBtn = modal.querySelector(
    '.exercises-modal-button-favorites'
  );
  const removeFromFavoritesBtn = modal.querySelector(
    '.exercises-modal-button-remove'
  );
  addToFavoritesBtn.classList.toggle('hidden-button');
  removeFromFavoritesBtn.classList.toggle('hidden-button');
}

// ---------------   functions of opening and closing of modal   ---------------

function modalClose() {
  document.addEventListener('keydown', closeByEsc);
  closeModalBtn.addEventListener('click', closeByBtn);
  backdrop.addEventListener('click', closeByBackdrop);

  function closeByBtn() {
    backdrop.classList.remove('is-open');
    scrollController.enabledScroll();
  }

  function closeByBackdrop(event) {
    if (!event.target.hasAttribute('data-exercise-modal')) {
      return;
    }
    closeByBtn();
  }

  function closeByEsc(event) {
    if (event.code === 'Escape') {
      backdrop.classList.remove('is-open');
      document.removeEventListener('keydown', closeByEsc);
      scrollController.enabledScroll();
    }
  }
}

// ---------------   functions of fixing body   ---------------

const scrollController = {
  scrollPosition: 0,

  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      owerflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      width: 100%;
      height: 100%;
  
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },

  enabledScroll() {
    document.body.style.cssText = ``;
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  },
};
