import axios from 'axios';
import {
  RESULTS_OF_SEARCH,
  formDisplayNone,
  removeHeightForSearch,
  returnSearcState,
  sessionResultOfSearchClear,
} from './exercises-equipment';

const activeCategoryId = localStorage.getItem('active-category');
const activeButton = document.getElementById(activeCategoryId);
const buttons = document.querySelectorAll('.choose-category-button');
const placeholder = document.querySelector('.placeholder-container');
const BASE_URL = 'https://energyflow.b.goit.study/api/filters';
let currentPage = 1;
// let data = null;
let exNumber = null;

/*
request
*/
async function itemsList(filter, page) {
  function checkScreenSize() {
    const screenWidth = window.innerWidth;
    return screenWidth < 768 ? 8 : 12;
  }

  try {
    const exNumber = checkScreenSize();
    const response = await axios.get(
      `${BASE_URL}?filter=${filter}&page=${page}&limit=${exNumber}`
    );

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
markup
*/
function createMarkup({ imgUrl, name, filter }) {
  return `<li class="list-item"><img class="list-image" src="${imgUrl}" data-source="${imgUrl}" loading="lazy" alt="${name}"><div class='list-history'>${name}<span>${filter}</span></div></li>`;
}
/*
getItems
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
    placeholder.innerHTML = ``;
    placeholder.appendChild(ul);
    placeholder.insertAdjacentHTML(
      'beforeend',
      "<div id='pagination' class='tui-pagination'></div>"
    );
  } else {
    placeholder.innerHTML =
      '<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>';
  }
}
/*
category buttons
*/
buttons.forEach(button => {
  button.addEventListener('click', async () => {
    formDisplayNone();
    removeHeightForSearch();
    sessionResultOfSearchClear();
    buttons.forEach(button => {
      button.classList.remove('active-category');
    });
    button.classList.add('active-category');
    localStorage.setItem('active-category', button.id);
    const filter = button.innerText;
    placeholder.innerHTML =
      '<p class="loader"><span class="exercises-modal-loader"></span></p>';
    (async () => {
      const data = await itemsList(filter, currentPage);
      if (data) {
        getItems(data);
        paginationBlock(data);
      }
    })();
  });
});
if (activeButton && sessionStorage.getItem(RESULTS_OF_SEARCH) === null) {
  activeButton.classList.add('active-category');
  placeholder.innerHTML = '<p><span class="exercises-modal-loader"></span></p>';
  (async () => {
    const data = await itemsList(activeButton.innerText, currentPage);
    if (data) {
      getItems(data);
      paginationBlock(data);
    }
  })();
} else if (sessionStorage.getItem(RESULTS_OF_SEARCH) !== null) {
  activeButton.classList.add('active-category');
  returnSearcState();
} else {
  let activeCat = document.getElementById('muscles');
  activeCat.classList.add('active-category');
  placeholder.innerHTML = '<p><span class="exercises-modal-loader"></span></p>';
  (async () => {
    const data = await itemsList('Muscles', currentPage);
    if (data) {
      getItems(data);
      paginationBlock(data);
    }
  })();
}
/*
pagination
*/
function paginationBlock({ page, results, totalPages }) {
  if (totalPages !== 1) {
    const container = document.querySelector('#pagination');
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement('a');
      pageLink.href = '#';
      i == page
        ? pageLink.classList.add('tui-page-btn', 'tui-is-selected')
        : pageLink.classList.add('tui-page-btn');
      pageLink.textContent = i;

      pageLink.addEventListener('click', event => {
        const pageNumber = event.target.textContent;
        placeholder.innerHTML =
          '<p><span class="exercises-modal-loader"></span></p>';
        (async () => {
          const data = await itemsList(results[0].filter, pageNumber);
          if (data) {
            getItems(data);
            paginationBlock(data);
          }
        })();
      });
      container.appendChild(pageLink);
    }

    const categoryButtons = document.querySelectorAll('.tui-page-btn');
    categoryButtons.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();

        categoryButtons.forEach(button => {
          button.classList.remove('tui-is-selected');
        });
        button.classList.add('tui-is-selected');
      });
    });
  }
}
