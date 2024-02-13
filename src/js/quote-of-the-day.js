let quoteText = document.querySelector('.quote-text');
let quoteAuthor = document.querySelector('.quote-author');

import axios from "axios";

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

const QUOTE_LS_KEY = 'info';
const qoteLS = JSON.parse(localStorage.getItem(QUOTE_LS_KEY));
const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

if (qoteLS === null) {
  fetchQuotes('quote');
} else if (currentDate !== qoteLS.date) {
  fetchQuotes('quote');
} else if (currentMonth !== qoteLS.month) {
  fetchQuotes('quote');
} else {
  quoteText.textContent = qoteLS.quote;
  quoteAuthor.textContent = qoteLS.author;
}

async function fetchQuotes(endPoint) {
  try {
    const response = await axios.get(`${endPoint}`);
    const {
      data: { author, quote },
    } = response;
      const objQote = {
      author: author,
      quote: quote,
      date: currentDate,
      month: currentMonth,
    };
    localStorage.setItem(QUOTE_LS_KEY, JSON.stringify(objQote));
    quoteText.textContent = objQote.quote;
    quoteAuthor.textContent = objQote.author;
  } catch (error) {
    console.log(error.message);
  }
}



