import './js/modal-menu';

import axios from 'axios';

// Elements ojects
const elements = {
  quoteСont: document.querySelector('.js-info-quote'),
  quoteAuthor: document.querySelector('.js-quote-author'),
};
const { quoteСont, quoteAuthor } = elements;

const objQote = {};
const savedQoteDate = {};
objQote.date = new Date();

// axios.defaults.baseURL;
axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';

// request function
async function requestQuote(endPoint) {
  // request
  const response = await axios.get(`${endPoint}`);
  console.log(response);
  const {
    data: { author, quote },
  } = response;

  // Write the response to the object
  objQote.author = author;
  objQote.quote = quote;
  console.log(objQote);

  // Record in LS
  localStorage.setItem('qouteData1', JSON.stringify(objQote));
  // Reading from LS
  const savedQoteDate = JSON.parse(localStorage.getItem('qouteData1'));
  console.log(savedQoteDate);

  // Record in the markup
  quoteСont.textContent = savedQoteDate.quote;
  quoteAuthor.textContent = savedQoteDate.author;
}

requestQuote('quote');

// Record with LS in markup
try {
  quoteСont.textContent = savedQoteDate.quote;
  quoteAuthor.textContent = savedQoteDate.author;
} catch (err) {
  console.log(err);
} finally {
  quoteСont.textContent =
    'Strength does not come from winning. Your struggles develop your strengths.';
  quoteAuthor.textContent = 'Arnold Schwarzenegger';
}
