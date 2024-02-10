/*
import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const openModalBtn = document.querySelector('[data-exercise-modal-open]');
const closeModalBtn = document.querySelector('[data-exercise-modal-close]');
const backdrop = document.querySelector('[data-exercise-modal]');
const modal = document.querySelector('.exercises-modal');
const modalExerciseContent = document.querySelector('.exercises-modal-content');

const key = "exerciseItems";

const idExercisesModal = "64f389465ae26083f39b17a2";      // !!!взяти id з об'єкту відповіді запиту відповідної вправи в секції

openModalBtn.addEventListener('click', () => {
  modalExerciseContent.innerHTML = '';
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
      const objDataOfExercise = response.data;
      drawExercisesModal(objDataOfExercise);
      addAndRemoveFavorites(objDataOfExercise);
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
        <button class="exercises-modal-button-favorites " type="button">
          Add to favorites
          <svg class="exercises-modal-button-icon">
            <use href="./img/sprite.svg#icon-heart"></use>
          </svg>
      </button>
      <button class="exercises-modal-button-remove hidden-button" type="button">
        Remove from
        <svg class="exercises-modal-button-icon">
          <use href="./img/sprite.svg#icon-heart"></use>
        </svg>
      </button>
          <button class="exercises-modal-button-rating hidden-button" type="button">Give a rating</button>
      </div>
  </div>
  `
  modalExerciseContent.insertAdjacentHTML('beforeend', modalContentHtml);
  drawStars(ratingOfExercise);
}

function drawStars(number) {
  const star = modal.querySelectorAll('.exercises-modal-star-icon');
  const arrOfStars = [...star];
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

// ---------------   functions of adding exercise to favorites   ---------------


function addAndRemoveFavorites(obj) {
  clickByAddFavourites(obj);
  clickByRemoveFavourites();

  // const btnsOfExerciseModal = document.querySelector('.exercises-modal-buttons');
  // btnsOfExerciseModal.addEventListener('click', (event) => {
  //   console.dir(event.target);
  //   if (event.target.nodeName === "BUTTON" && event.target.classList.contains("exercises-modal-button-favorites")) {
  //     clickByAddFavourites(obj);
  //     changeBtnsAddRemove();
  //   }
  //   if (event.target.nodeName === "BUTTON" && event.target.classList.contains("exercises-modal-button-favorites")) {
  //     clickByRemoveFavourites();
  //     changeBtnsAddRemove();
  //   }

  // })
}

function clickByAddFavourites(obj) {
  const addToFavoritesBtn = document.querySelector(".exercises-modal-button-favorites");
  addToFavoritesBtn.addEventListener("click", () => {
    if (localStorage.getItem(key)) {
      const arrFavouritesToLS = JSON.parse(localStorage.getItem(key)).push(obj);
      console.log(arrFavouritesToLS)
      saveToStorage(arrFavouritesToLS);
    }
    if (!localStorage.getItem(key)){
      const newArrToLS = [obj];
      saveToStorage(newArrToLS);
    }
    changeBtnsAddRemove();
  });
}

function clickByRemoveFavourites() {
  const removeFromFavoritesBtn = document.querySelector(".exercises-modal-button-remove");
  removeFromFavoritesBtn.addEventListener("click", () => {
    if (localStorage.getItem(key) && JSON.parse(localStorage.getItem(key)).length !== 0) {
      loadFromStorage();
    }
    changeBtnsAddRemove();
    return
  });
}

function saveToStorage(arr) {
  console.log(arr)
  try {
    localStorage.setItem(key, JSON.stringify(arr));
  } catch (error) {
    console.log(error);
    catchError(error);
  }
}

function loadFromStorage() {
  try {
    let dataFromLS = localStorage.getItem(key);
    const arrFromLS = JSON.parse(dataFromLS);
    if(arrFromLS.length !== 0) {
      const itemExerciceById = arrFromLS.find((item) =>{
        return item._id === idExercisesModal;
      })
      arrFromLS.splice(arrFromLS.indexOf(itemExerciceById), 1);
      saveToStorage(arrFromLS);
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    catchError(error);
  }
}

function changeBtnsAddRemove() {
  const addToFavoritesBtn = modal.querySelector('.exercises-modal-button-favorites');
  const removeFromFavoritesBtn = modal.querySelector('.exercises-modal-button-remove');
  addToFavoritesBtn.classList.toggle("hidden-button");
  removeFromFavoritesBtn.classList.toggle("hidden-button");
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

*/