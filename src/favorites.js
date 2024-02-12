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

// Шаблон разметка для карточек с упраженениями
const markupCard =
  '<ul><li>FAVORITE EXERCISES</li><li>FAVORITE EXERCISES</li><li>FAVORITE EXERCISES</li><li>FAVORITE EXERCISES</li><li>FAVORITE EXERCISES</li> </ul>';

// Прверкa на null (если нет данных в LS с таким ключом) и на длину массива
if (favorExercLS === null) {
  createMarkupNonFavExers();
} else if ((favorExercLS.length = 0)) {
  createMarkupNonFavExers();
} else {
  createMarkupFavExers(favorExercLS);
}

// Функция для разметки из массива объектов упражнений
function createMarkupFavExers(arr) {
  favorContent.innerHTML = markupCard;
}

// Функция для разметки, если нет упраженений, выводит сообщение
function createMarkupNonFavExers() {
  favorContent.innerHTML = markupPlug;
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
