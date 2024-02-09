import axios from 'axios';

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
async function itemsList(filter, page) {
  try {
    const requestUrl = `${BASE_URL}?filter=${filter}&page=${page}&limit=12`;
    const response = await axios.get(requestUrl);
    if (!response.data.results.length) {
      console.error('No results found for this filter.');
      return null;
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
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
    buttons.forEach(button => {
      button.classList.remove('active-category');
    });
    button.classList.add('active-category');
    localStorage.setItem('active-category', button.id);

    const filter = button.innerText;
    data = await itemsList(filter, currentPage);
    getItems(data);
  });
});

if (activeButton) {
  activeButton.classList.add('active-category');
} else {
  let activeCat = document.getElementById('muscles');
  activeCat.classList.add('active-category');
}

// data = await itemsList(activeButton.innerText, currentPage);
// getItems(data);
/*
/
/
*/

// const data = await musclesList('Muscles', currentPage);
// console.dir(data);
