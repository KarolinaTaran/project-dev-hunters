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
