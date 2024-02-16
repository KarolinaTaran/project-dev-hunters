import './js/modal-menu';
import './js/arrow-button';
import './js/exercises-modal';
import './js/modal-rating';
import axios from 'axios';
import { chooseButtonForModal } from './js/exercises-modal';
// axios.defaults.baseURL;
axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';

// ---------ELEMENTS OBJECT---------
const elements = {
  quoteText: document.querySelector('.js-quote-text'),
  quoteAuthor: document.querySelector('.js-quote-author'),
};
const { quoteText, quoteAuthor } = elements;
const resultList = document.createElement('ul');
const backdrop = document.querySelector('[data-exercise-modal]');
const retin =
  '<img src="data:image/webp;base64,UklGRn4EAABXRUJQVlA4WAoAAAAQAAAAcgAARgAAQUxQSFACAAANkGRte9o63yf7lpmZmZm7iM4YF9J9MIxuZ10E44iZmRlcW1/BlqNYTtJZRDBw20hRu0w3sMc/QAn7bNo5npJgIQHvDnV/RgXsv2n3EICEAUk9PtL9DT5cOu9LUpASBAYsvX6+CqyY/fUnIBTsNXLhlUteGEPk1ivMiwcPvlwF5r+Hk+wxUM+8EFuUsGf8tQr0TVFCY1I0lVQeIcsqlkqNatCANmg1CcQQIYafA2x2Hkilns2tloRC7OnZd1gPgoYEydcvgqz0GjVcEiQrKHnzddzaFb1kDAzMXzxPECKHbl7yFxYW1vLH+VN7fqYZbGYzWVkrBIkeQwYbQ8PIRAb9F/Zc/snTN7RVwKgB6V0bi/2n9cxQN8ZR+1ioJbAWF9p2mXTsQ+Rpf5oYAL2cxbwsdAr1M/Us+d9Spy9zrkdAzga6BKJAh95nvnsn9EPv9RsAyNkOqMROEgQJEIorwT+qftue6Fwp1jDW8XbDWib4r6QY4iZjtZokJ442LjrdItAtytY1PVEl04fnGveASi8qLvlWTY4q9reaM0klB4jZLp8s2zU7x48/HUJFYN0qqmeSGdatWfbM1BF1K7+6uzce3cPl+FET+4WILw9fuNZMnqcXzt8AWLzHztw4NES8PXYzF5lrGEB9fpNARd0HDe4d4rTv7z/4nqpBnv/1uJ10CrfpED89N7kS6vufahhEP/wyUQmSrBJ8j3qU3T6sH15kA3rKZRT75mUluDhymHGZlD8/RX64cmnuSAso/3rA7OTASnD847pIjv8V5uXVuAQAVlA4IAgCAADQEACdASpzAEcAPnU0kEeko6GhO/r5mJAOiWkAAG5Saq7viqF7SHqAjMSzZC+hecFIMH2WRqJFtlSG8E/Ki+fq2G9WN47+grfd2qCTnT9elz24pk6TO2NQ2/V0je5DWuGBQVpSmuZeJNO+1xsiGJUsKe7cYZLCFUHIsu+7zNMpQOC88H3yPzgpLHDnoTX6aAD+/kklpdfO+R5nDXf6j8NdTD31PARYVA7OPd/pmPeOCDr40hdniDp/iT/rHwRB+g52g39r7oBlRhYTWRl6rnxCh+F1/zSoO9qJLKTWxzTQa5nh1mhiDYwJbRlxmU7kPy8BT8Ame1vEpl4Gs43gcfb35eGVOE4An60nLU6e2CIAJcc9vyOdW1or/IzBtbpaGXk95FcEDJo1tuhO29ky6vcONT14a3cet3BR9ZsxKF4ekWGTXhoQAiDPiwUIauM8Uv5wBumGM4frPJZB4c3NzBR6cW04mOQoRsTQYnu7TxdCzWVfI7OnSYfxKjzz4mx2fdgBg+It++rYVLUzFrf0jVaT3Xoajt1tpWhyX/sADUosiv29i1puuA3yQ228Y/5dfie90BZfpKztcFliy3iLqpi94ndXf9OOD7cdmpUJhm/OLtESuga6v4owwTPn/mpUIS+Fdm81kzJa6tYd/x6H//i2UxM5g2LRzy9txoSLo5s9l/9nQQw4LwAA" srcset="data:image/webp;base64,UklGRn4EAABXRUJQVlA4WAoAAAAQAAAAcgAARgAAQUxQSFACAAANkGRte9o63yf7lpmZmZm7iM4YF9J9MIxuZ10E44iZmRlcW1/BlqNYTtJZRDBw20hRu0w3sMc/QAn7bNo5npJgIQHvDnV/RgXsv2n3EICEAUk9PtL9DT5cOu9LUpASBAYsvX6+CqyY/fUnIBTsNXLhlUteGEPk1ivMiwcPvlwF5r+Hk+wxUM+8EFuUsGf8tQr0TVFCY1I0lVQeIcsqlkqNatCANmg1CcQQIYafA2x2Hkilns2tloRC7OnZd1gPgoYEydcvgqz0GjVcEiQrKHnzddzaFb1kDAzMXzxPECKHbl7yFxYW1vLH+VN7fqYZbGYzWVkrBIkeQwYbQ8PIRAb9F/Zc/snTN7RVwKgB6V0bi/2n9cxQN8ZR+1ioJbAWF9p2mXTsQ+Rpf5oYAL2cxbwsdAr1M/Us+d9Spy9zrkdAzga6BKJAh95nvnsn9EPv9RsAyNkOqMROEgQJEIorwT+qftue6Fwp1jDW8XbDWib4r6QY4iZjtZokJ442LjrdItAtytY1PVEl04fnGveASi8qLvlWTY4q9reaM0klB4jZLp8s2zU7x48/HUJFYN0qqmeSGdatWfbM1BF1K7+6uzce3cPl+FET+4WILw9fuNZMnqcXzt8AWLzHztw4NES8PXYzF5lrGEB9fpNARd0HDe4d4rTv7z/4nqpBnv/1uJ10CrfpED89N7kS6vufahhEP/wyUQmSrBJ8j3qU3T6sH15kA3rKZRT75mUluDhymHGZlD8/RX64cmnuSAso/3rA7OTASnD847pIjv8V5uXVuAQAVlA4IAgCAADQEACdASpzAEcAPnU0kEeko6GhO/r5mJAOiWkAAG5Saq7viqF7SHqAjMSzZC+hecFIMH2WRqJFtlSG8E/Ki+fq2G9WN47+grfd2qCTnT9elz24pk6TO2NQ2/V0je5DWuGBQVpSmuZeJNO+1xsiGJUsKe7cYZLCFUHIsu+7zNMpQOC88H3yPzgpLHDnoTX6aAD+/kklpdfO+R5nDXf6j8NdTD31PARYVA7OPd/pmPeOCDr40hdniDp/iT/rHwRB+g52g39r7oBlRhYTWRl6rnxCh+F1/zSoO9qJLKTWxzTQa5nh1mhiDYwJbRlxmU7kPy8BT8Ame1vEpl4Gs43gcfb35eGVOE4An60nLU6e2CIAJcc9vyOdW1or/IzBtbpaGXk95FcEDJo1tuhO29ky6vcONT14a3cet3BR9ZsxKF4ekWGTXhoQAiDPiwUIauM8Uv5wBumGM4frPJZB4c3NzBR6cW04mOQoRsTQYnu7TxdCzWVfI7OnSYfxKjzz4mx2fdgBg+It++rYVLUzFrf0jVaT3Xoajt1tpWhyX/sADUosiv29i1puuA3yQ228Y/5dfie90BZfpKztcFliy3iLqpi94ndXf9OOD7cdmpUJhm/OLtESuga6v4owwTPn/mpUIS+Fdm81kzJa6tYd/x6H//i2UxM5g2LRzy9txoSLo5s9l/9nQQw4LwAA 1x, data:image/webp;base64,UklGRtAIAABXRUJQVlA4WAoAAAAQAAAA5QAAjQAAQUxQSHIEAAABGTJpG9jOzL/mSYjof5CEgGe0tYEOtn+GbOn3qx5d27Z9b3bv2ohs8yLa0N6NbrQb2oy8ETNb0bWtcdf/ec70oLamqnrO4omYAAeSJEVRt0dADO5cjOj6AgQzDjTP5RYaRQHQBAgNRB9BNHQQAIr2q099pQ7cYcY651tM0QCIgBQC6iMoDR0AtEN+966/FIFFDnWm+002QAYkKdqNI61shxc8p8oVUM5tbjFFgSL6AADtxgHUlez0uM8cZxHzrbdMBpmotdidbvInV5Azz53mKTBRSyyz3gO+ZjFy66yQBUYsmGyt17iCAdaZzGgHylphnc0EWON4Q4Ah81YqcAUFK+WBIYcYz2qpUUyhDBFxBcoQ5h7I6G6rwRkRgm6m+BsUcwYC3PYA+eQQhAYoboMcOkH6owili4Q/EpjcHqm4sysUxKkkhOPDgnAPEX4VEenv9klhWHMJn665BPSrUwh/DhMiDG9iFEhLzBpksBwCICKFlIZcg4oSUTKmi/hzQRCZ7kx1WkzTRINao9VQAUBMNlwWAEDGRMssMcUgCigUiSiRjEhEUSihhaIoE0TAm4ycZjNN02JCA01oWixWF9NiCS3us94FpsoAGGGDa0wQCcDCURlnGeiQd3nEszYYAeAy6w1i5ER/DCN7mlHGZOtdBuBSeVZ3l2DVOXmXAphEgeBRmQSggAB8eLLsnAJ/VjZhPTRChO8BWoguMDplkhwvKH4E+TPZCQIpAv0LIuBJkd7y/V4gGwqkYBL1kCIUyhs19RqrEeFHELl9k6dQX4q69dqK45I5Y0xAba5HbdXoyOfUTg5IaV5WUSvFiai1HeMMRC4jY45nlDQ50PBnyGyKUXO/UXjypslwGcowawRyzUXwf9sUQewJ5NMMhfLw38s1l0djQ+AwtZIfnUSCbNpPnWshqA0GWGwwxWXscZctOo24FYcCtQS102+qt82Q5XQKlhU5ksonKWS7R/ixeopU/JRADhmYltIghAcK5Rc4/1g/CynuCCr9sB/gUBquzQS9pIjoKYtR2jwTWc5Wn64s/6lmlS8HWu/ZQwvfu0NtH4CvnDBMxIcrS2ETsaIfAbzoc2cZovPEIPJoQ4jOI1H0na0ADtrkUmcZJ2kAJc2gFuZMNFGONw9Vu+3WQj2R/AGR1GKfb5ySAVC3xztGGKRNnKjFuOvcYSjzeeqNQ9l7XtMiBqJNRAYbiRJKHAadc5cafzZqdvlBNxc1n1xLOGS1tw0UPr2Q6Kke391OUCJ3YLXt1UmWAruFSAdnckmEnC425I+dRCAbveUXHamo4b81l3tm+zyINTHj/KzSXJkHWpXxVIhpNrHLMaao+FEROMKiH51mIEMcc5JN/OkLNyogo8Ad9brjXMFxr3vaOBGjHCv72jg2sdNLnjTXIBEhOiujRDWHfOlDp7iCUz7wsdOMkiVEZzWIKFa03Z9ybKLqO7e7xhqDVGmixe1MS8zOBrIG2eNT7ztOuILYUfe61PkmOKWmxT/SSotaSJRV9rvvmO4AVlA4IDgEAADwJwCdASrmAI4APoU+lkeqpqIhMjlbUVAQiWluDfjrYOnFis8L/UD/hnSWNpK/U8Kz54u/9TbcMeEPUsgFNMi2j670X2LrmK9HhYZjlEaer6XDAqwoYOvwa1Lutk7U++WmJ5aVwQYjzjZLsB+gi7y6wCm5fttghUzJ/xZ6LS5K6TrWbfkGyuPMRc7o7BVFOmFmrrs8M6HwZEcbehOiOwdFaTxCxKk6w5/lQn3DS/elf5UcSAJkrGck6xbkM1mj4NRi1jOlTVU0oBOqNzXzV8002K5w7np9fzUSzV+Luusq5jvEEnnTd6bsssrjDC/ec+uXkvUyL1Di0V4l1ZqsjfBHkS0ZLpk9G7nYsCJPhqJcyY0LhARWZc6kmXs7ynKWmv/aiOqcYO3B7SJPhqIhgueMWSuDcf1oj3j9lIun+q4/gy8RTHVGgfYAAP76eDVyHgw+Ft41Dzq3rnv64XA7U4ebjWb9Mj3aaj6Cpncqdg/px1yOBJt418wt+ZRaoB+OXitzU3QuzN9qeP7D9za1ONoGxU9KIs11CxWZ8/rBCka8zXmNER6ecq5ne56qTL8DauEMSu6bqXheWm+ezr1oWMn9yxWPQi3eBNNIUlchpkPLf8ONaMXL+tcdM0I0U58nrwUSKj0V2oa6ohKcLi3IfQrMsRi/W7n3pq22jCmWtc/BYXHYGPInN5vHxJFjlu+kXuDBmlrmw14FE/sfsN+z/JcpYBcsaehxtOhtOoB/BHWf6k/LnTL2EKzVq9VqFi6itkzi4sP5QRMd5d7SIwab8HrQ76w5x+1rwo7YggvALzf095pqOa6Zx7MgkVxGbk66HBZsZeyd++jYjz+CYEfMJjjF4wYqJ3w8T9CuqxOniGNqM0ZxWtv9iOh75GnHyo+kAspSsbwKER0aLMWDFdSgTVdRrZiBA4yS4/kxJvQXbY9HY6okLgQm/1Bv3sGhxy4rYffKdL+vAfkFxSbriotASsXvvLZAwhd7HXVxzBMEmMZgVvufQ338tkhPQ8x1udmzkNPrLjCytsBYr12RRfeeMEouAwBxU8vVybbcFmyFBkGOK4JMm3+DqPVWYHm1dIw3Vz6/sUbW4eitJDjFqfUVLyui21mV/iQ9c3qL1q9OZU03K+JjwReX4CgeRI6i44ENo/ASySd3ywJ0/OoA3ptLK/OBBrZk4zb1eH+2F+b1ED1vpqNHAdBlub/0rP/ecQ/Xgh/hec1AA1v1Wu4hMlNWx14aZf1SADRIw8e/bbZuuu5bOSLg8u++jfOBZBzxxKf+C0//64rsvUHaxjtzqdM3JRB6N+kkNUwyfmGCoHeJQ/0dnXmqmxjUYiZb4lb7/7g+///ZwkHcydCMd08YSGAPhXmyh8PYBu2007JyW1Pl//ur8MxktgAOi+O0Rim5N0m5BXz3xoPEPWu6RxN2p7kVIoNUkO17swAAAAA= 2x" alt="Dumpbell">';

resultList.classList.add('search-result-list');
resultList.id = 'scrollTry';
// ---------SECTION QUOTE---------

// Get date from LS
const QUOTE_LS_KEY = 'info';
const qoteLS = JSON.parse(localStorage.getItem(QUOTE_LS_KEY));

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

// Checking the data in LS for null, comparing Dates
if (qoteLS === null) {
  requestQuote('quote');
} else if (currentDate !== qoteLS.date) {
  requestQuote('quote');
} else if (currentMonth !== qoteLS.month) {
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
      month: currentMonth,
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
const markupPlug = `<div class="favor-plug-wrap"><div class="favor-icon-wrap">${retin}</div><div class="favor-text">It appears that you haven&#8216t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future</div></div>`;

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
  chooseButtonForModal();
  addRemoveScroll();
}

// custom way "/project-dev-hunters/assets/sprite-f8222074.svg#rating-star"
// Функция для разметки из массива объектов упражнений
export function createMakrUpForFavorite(arr) {
  resultList.innerHTML = arr
    .map(({ bodyPart, name, target, burnedCalories, time, _id }) => {
      return `<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
              <button type="button" data-id=${_id} data-delete-from-favorites>
                <svg class="icon-trash-svg" width="16" height="16">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-trash"></use>
                </svg>
              </button>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${_id} data-exercise-modal-open>Start
                <svg class="start-svg" width="18" height="18">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-arrow-right"></use>
                </svg>
            </button>
        </div>
      </div>
      <div class="info-about-exercise">
        <div class="exercise-name">
            <svg class="runnig-svg" width="24" height="24">
                <use href="/project-dev-hunters/assets/sprite-f8222074.svg#running-man"></use>
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

export function addListenersForButtons() {
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
  chooseButtonForModal();
  addRemoveScroll();
}
//
//SCROLL FUNCTION
//
export function addRemoveScroll() {
  if (window.innerWidth < 1440 && resultList.children.length > 8) {
    classAddScroll();
  } else if (window.innerWidth >= 1440 && resultList.children.length > 9) {
    classAddScroll();
  } else {
    classRemoveScroll();
  }
}

function classAddScroll() {
  resultList.classList.add('scroll-on');
  resultList.classList.add('padding-for-scroll-list');
  document
    .querySelector('.favor-wrapper')
    .classList.add('padding-for-scroll-container');
}

function classRemoveScroll() {
  resultList.classList.remove('scroll-on');
  resultList.classList.remove('padding-for-scroll-list');
  document
    .querySelector('.favor-wrapper')
    .classList.remove('padding-for-scroll-container');
}

// COSTYL v3
backdrop.addEventListener('mouseout', () => {
  createMakrUpForFavorite(JSON.parse(localStorage.getItem(FAVORITES_LS_KEY)));
  addListenersForButtons();
  chooseButtonForModal();
  addRemoveScroll();
  if (JSON.parse(localStorage.getItem(FAVORITES_LS_KEY)) === null) {
    createMarkupNonFavExers();
  } else if (
    JSON.parse(localStorage.getItem(FAVORITES_LS_KEY)) !== null &&
    JSON.parse(localStorage.getItem(FAVORITES_LS_KEY)).length === 0
  ) {
    createMarkupNonFavExers();
  }
});
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
