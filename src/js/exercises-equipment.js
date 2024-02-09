import axios from 'axios';
const BASE_URL = 'https://energyflow.b.goit.study/api/exercises';

const searchCategoryMZ = document.querySelector('.placeholder-container');
searchCategoryMZ.addEventListener('click', showTrainingsMZ);
let pageMZ = 1;

async function showTrainingsMZ(event) {
  if (event.target.nodeName === 'UL') return;
  let query;
  if (event.target.nodeName === 'DIV') query = event.target;
  if (event.target.nodeName === 'SPAN') query = event.target.parentNode;

  const resultExercises = getExercisesMZ(query);
  console.log(resultExercises);
}

async function getExercisesMZ({
  firstChild: { textContent: searchItemName },
  lastElementChild: { textContent: searchGroupName },
}) {
  searchGroupName = searchGroupName
    .toLowerCase()
    .slice(0, searchGroupName.length - 1)
    .replace(/\s/g, '');

  const exerciseSearchResult = await axios.get(
    `${BASE_URL}?${searchGroupName.toLowerCase()}=${searchItemName.toLowerCase()}&page=${pageMZ}&limit=12`
  );
  return exerciseSearchResult;
}
