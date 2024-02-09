import axios from 'axios';
const BASE_URL = 'https://energyflow.b.goit.study/api/exercises';

const searchCategoryMZ = document.querySelector('.placeholder-container');
const placeholder = document.querySelector('.placeholder-container');
searchCategoryMZ.addEventListener('click', showTrainingsMZ);
let pageMZ = 1;

async function showTrainingsMZ(event) {
  if (event.target.nodeName === 'UL') return;
  let query;
  if (event.target.nodeName === 'DIV') query = event.target;
  if (event.target.nodeName === 'SPAN') query = event.target.parentNode;
  if (!query.classList.value === 'list-history') return;

  const { data: resultExercises } = await getExercisesMZ(query);
  if (!resultExercises.results) {
    placeholder.innerHTML =
      '<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>';
    return;
  }
  const resList = document.createElement('ul');
  resList.classList.add('search-result-list');
  resList.innerHTML = resultSearchMakrUp(resultExercises);
  placeholder.innerHTML = '';
  placeholder.appendChild(resList);
}

async function getExercisesMZ({
  firstChild: { textContent: searchItemName },
  lastElementChild: { textContent: searchGroupName },
}) {
  searchGroupName = searchGroupName.toLowerCase();
  if (searchGroupName === 'body parts') {
    searchGroupName = searchGroupName
      .slice(0, searchGroupName.length - 1)
      .replace(/\s/g, '');
  }

  try {
    const exerciseSearchResult = await axios.get(
      `${BASE_URL}?${searchGroupName.toLowerCase()}=${searchItemName.toLowerCase()}&page=${pageMZ}&limit=12`
    );
    return exerciseSearchResult;
  } catch (error) {
    window.alert('something goes wrong');
    console.log(error);
  }
}

function resultSearchMakrUp({ results }) {
  return results
    .map(({ bodyPart, rating, name, target, burnedCalories, time, _id }) => {
      return `<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
                <p class="rating-num">${rating.toFixed(1)}</p>
                <svg class="rating-star-svg" width="16" height="16">
                    <use href="./img/sprite.svg#rating-star"></use>
                </svg>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${_id} data-modal-open>Start
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
            <p class=>Burned calories: <span class="info-from-back">${burnedCalories}/${time} min</span></p>
            <p class=>Body part: <span class="info-from-back">${bodyPart}</span></p>
            <p class=>Target: <span class="info-from-back">${target}</span></p>
        </div>
     
          </li>`;
    })
    .join('');
}
