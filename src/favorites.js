import './js/modal-menu';
import './js/arrow-button';

import axios from 'axios';
// axios.defaults.baseURL;
axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';

// ---------ELEMENTS OBJECT---------
const elements = {
  quoteText: document.querySelector('.js-quote-text'),
  quoteAuthor: document.querySelector('.js-quote-author'),
};
const { quoteText, quoteAuthor } = elements;
const resultList = document.createElement('ul');
resultList.classList.add('search-result-list');
// ---------SECTION QUOTE---------

// Get date from LS
const QUOTE_LS_KEY = 'info';
const qoteLS = JSON.parse(localStorage.getItem(QUOTE_LS_KEY));

const currentDate = new Date().getDate();

// Checking the data in LS for null, comparing Dates
if (qoteLS === null) {
  requestQuote('quote');
} else if (currentDate !== qoteLS.date) {
  requestQuote('quote');
} else {
  quoteText.textContent = qoteLS.quote;
  quoteAuthor.textContent = qoteLS.author;
}

// Request function for Qote
async function requestQuote(endPoint) {
  try {
    // request
    const response = await axios.get(`${endPoint}`);
    const {
      data: { author, quote },
    } = response;

    //   Write the response to the object
    const objQote = {
      author: author,
      quote: quote,
      date: currentDate,
    };

    // Record in LS from API
    localStorage.setItem(QUOTE_LS_KEY, JSON.stringify(objQote));

    // Record in the markup
    quoteText.textContent = objQote.quote;
    quoteAuthor.textContent = objQote.author;
  } catch (error) {
    console.log(error.message);
  }
}

// -----------SECTION FAVORITES------------

const favorContent = document.querySelector('.js-favor-content');

// Получение данных из LS
const FAVORITES_LS_KEY = 'exerciseItems';
const favorExercLS = JSON.parse(localStorage.getItem(FAVORITES_LS_KEY));

// Разметка для заглушки
const markupPlug =
  '<div class="favor-plug-wrap"><div class="favor-icon-wrap"><img class="favor-icon-item" src="./img/dumbbell/dumbbell-desktop.png" alt=""></div><div class="favor-text">It appears that you haven&#8216t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future</div></div>';

function createMarkupNonFavExers() {
  favorContent.innerHTML = markupPlug;
}
// Шаблон разметка для карточек с упраженениями
// Прверкa на null (если нет данных в LS с таким ключом) и на длину массива
if (favorExercLS === null) {
  createMarkupNonFavExers();
} else if (favorExercLS !== null && favorExercLS.length === 0) {
  createMarkupNonFavExers();
} else if (favorExercLS.length > 0) {
  createMakrUpForFavorite(favorExercLS);
  addListenersForButtons();
}

// custom way "/project-dev-hunters/assets/sprite-f8222074.svg#rating-star"
// Функция для разметки из массива объектов упражнений
function createMakrUpForFavorite(arr) {
  resultList.innerHTML = arr
    .map(({ bodyPart, name, target, burnedCalories, time, _id }) => {
      return `<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
              <button type="button" data-id=${_id} data-delete-from-favorites>
                <svg class="icon-trash-svg" width="16" height="16">
                    <use href="./img/sprite.svg#icon-trash"></use>
                </svg>
              </button>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${_id} data-exercise-modal-open>Start
                <svg class="start-svg" width="18" height="18">
                    <use href="./img/sprite.svg#icon-arrow-right"></use>
                </svg>
            </button>
        </div>
      </div>
      <div class="info-about-exercise">
        <div class="exercise-name">
            <svg class="runnig-svg" width="24" height="24">
                <use href="./img/sprite.svg#running-man"></use>
            </svg>
            <h2>${name[0].toUpperCase() + name.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${burnedCalories} / ${time} min</span></p>
            <p class=>Body part: <span class="info-from-back">${
              bodyPart[0].toUpperCase() + bodyPart.slice(1)
            }</span></p>
            <p class=>Target: <span class="info-from-back">${
              target[0].toUpperCase() + target.slice(1)
            }</span></p>
        </div>
     
          </li>`;
    })
    .join('');
  favorContent.innerHTML = '';
  favorContent.prepend(resultList);
}

//LISTENERS FOR BUTTONS

function addListenersForButtons() {
  const deleteButtons = document.querySelectorAll(
    '[data-delete-from-favorites]'
  );
  deleteButtons.forEach(button => {
    button.addEventListener('click', removeItemForFavorites);
  });
}
// Функция для разметки, если нет упраженений, выводит сообщение
// remove item from favorites

function removeItemForFavorites(event) {
  const tagretId = event.currentTarget.dataset.id;
  const currentFavor = JSON.parse(
    localStorage.getItem(FAVORITES_LS_KEY)
  ).filter(({ _id: id }) => {
    if (id !== tagretId) return true;
  });
  localStorage.setItem(FAVORITES_LS_KEY, JSON.stringify(currentFavor));
  if (currentFavor.length === 0) {
    createMarkupNonFavExers();
    return;
  }
  createMakrUpForFavorite(currentFavor);
  addListenersForButtons();
}

// Объект с информацией по упражнению
// {
//   "_id": "64f389465ae26083f39b17a2",
//   "bodyPart": "waist",
//   "equipment": "body weight",
//   "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0001.gif",
//   "name": "3/4 sit-up",
//   "target": "abs",
//   "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//   "rating": 3.49,
//   "burnedCalories": 220,
//   "time": 3,
//   "popularity": 9953
// }
