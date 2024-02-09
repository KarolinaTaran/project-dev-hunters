import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const openModalBtn = document.querySelector('[data-exercise-modal-open]');
const closeModalBtn = document.querySelector('[data-exercise-modal-close]');
const backdrop = document.querySelector('[data-exercise-modal]');
const modal = document.querySelector('.exercises-modal');
const modalContent = document.querySelector('.exercises-modal-content');


let idExercisesModal = "64f389465ae26083f39b17a2";      // !!!взяти id з об'єкту відповіді запиту відповідної вправи в секції

openModalBtn.addEventListener('click', () => {
  modalContent.innerHTML = '';
  backdrop.classList.add('is-open');
  createExersiceCard();
  modalClose();
});

// ---------------   functions of geting datas from server   ---------------

async function getData() {
  axios.defaults.baseURL = "https://energyflow.b.goit.study";
  return await axios.get(`/api/exercises/${idExercisesModal}`);
}

async function createExersiceCard() {
  try {
      const response = await getData();
      console.log(response.data);
      const objDataOfExercise = response.data;
      drawExercisesModal(objDataOfExercise);
  } catch(error) {
      catchError(error);
  // } finally {
  //     loader.classList.remove("loader");
  }
};

// ---------------   functions for drawing modal content   ---------------

function drawExercisesModal(obj) {
  const {
    bodyPart,
    burnedCalories,
    description,
    equipmen,
    gifUrl,
    name,
    popularity,
    rating,
    target,
    time
  } = obj;

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
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
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
              <p class="exercises-modal-block-paragraf">${equipmen}</p>
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
      <div class="exercises-modal-container-text">
      <p class="exercises-modal-text">${description}</p>
      </div>
      <div class="exercises-modal-buttons">
          <button class="exercises-modal-button-favorites" type="button">
              Add to favorites
              <svg class="exercises-modal-button-icon">
                  <use href="./img/sprite.svg#icon-heart"></use>
              </svg>
          </button>
          <button class="exercises-modal-button-rating" type="button">Give a rating</button>
      </div>
  </div>
  `
  modalContent.insertAdjacentHTML('beforeend', modalContentHtml);
  drawStars(ratingOfExercise);
}

function drawStars(number) {
  const star = modal.querySelectorAll('.exercises-modal-star-icon');
  const arrOfStars = [...star];
  console.log(arrOfStars);
  for (let i = 0; i <= number; i += 1) {
    arrOfStars[i].classList.add("selected-stars"); 
  }
}

function catchError(error) {
  console.log(error);
  const errName = error.name;
  const errText = error.message;
  iziToast.error({
    position: 'topRight',
    message: `${errName}: ${errText}.`
  });
}

// ---------------   functions of opening and closing of modal   ---------------

function modalClose() {
  document.addEventListener('keydown', closeByEsc);
  closeModalBtn.addEventListener('click', closeByBtn);
  backdrop.addEventListener('click', closeByBackdrop);

  function closeByBtn() {
    backdrop.classList.remove('is-open');
  }

  function closeByBackdrop(event) {
    if (!event.target.hasAttribute('data-exercise-modal')) {
      return;
    }
    closeByBtn();
  }
  
  function closeByEsc(event) {
    if (event.code === "Escape") {
      backdrop.classList.remove('is-open');
      document.removeEventListener('keydown', closeByEsc);
    }
  }
}