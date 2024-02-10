import axios from 'axios';
import { formDisplayNone } from './exercises-equipment';

const activeCategoryId = localStorage.getItem('active-category');
const activeButton = document.getElementById(activeCategoryId);
const buttons = document.querySelectorAll('.choose-category-button');

const placeholder = document.querySelector('.placeholder-container');

const BASE_URL = 'https://energyflow.b.goit.study/api/filters';
let currentPage = 1;
let data = null;
/*
/
request
/
*/
function itemsList(filter, page) {
  return axios
    .get(`${BASE_URL}?filter=${filter}&page=${page}&limit=12`)
    .then(response => {
      if (!response.data.results.length) {
        console.error('No results found for this filter.');
        return null;
      }
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
}
/*
/
markup
/
*/
function createMarkup({ imgUrl, name, filter }) {
  return `<li class="list-item"><img class="list-image" src="${imgUrl}" data-source="${imgUrl}" loading="lazy" alt="${name}"><div class='list-history'>${name}<span>${filter}</span></div></li>`;
}
/*
/
getItems
/
*/

function getItems(data) {
  if (data) {
    let markup = '';
    data.results.forEach(element => {
      markup += createMarkup(element);
    });
    let ul = document.createElement('ul');
    ul.classList.add('search-list');
    ul.innerHTML = markup;
    placeholder.innerHTML = '';
    placeholder.appendChild(ul);
  } else {
    placeholder.innerHTML =
      '<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>';
  }
}

/*
/
/
*/

buttons.forEach(button => {
  button.addEventListener('click', async () => {
    formDisplayNone();
    buttons.forEach(button => {
      button.classList.remove('active-category');
    });
    button.classList.add('active-category');
    localStorage.setItem('active-category', button.id);

    const filter = button.innerText;
    itemsList(filter, currentPage).then(data => {
      getItems(data);
    });
  });
});

if (activeButton) {
  activeButton.classList.add('active-category');
  itemsList(activeButton.innerHTML, currentPage).then(data => {
    getItems(data);
  });
} else {
  let activeCat = document.getElementById('muscles');
  activeCat.classList.add('active-category');
  itemsList('Muscles', currentPage).then(data => {
    getItems(data);
  });
}

/*
/
/
*/

// const data = await musclesList('Muscles', currentPage);
// console.dir(data);
