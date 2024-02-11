let quoteText = document.querySelector('.quote-text');
let quoteAuthor = document.querySelector('.quote-author');

import axios from "axios";

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';



const timeNow = new Date;
if (localStorage.key !== 'info') {
  fetchQuotes('quote');
} else if (TimeInStorage !== timeNow) {
  localStorage.removeItem('info');
  fetchQuotes('quote');
} else if (TimeInStorage === timeNow) {
  const getInfoLL = JSON.parse(localStorage.getItem('info'));
  //const TimeInStorage = getInfoLL.date;
  const quoteInStorage = getInfoLL.quote;
  const authorInStorage = getInfoLL.author;
  quoteText.textContent = quoteInStorage;
  quoteAuthor.textContent = authorInStorage;
 } else {};

async function fetchQuotes(endPoint) {
  const obj = {};
  obj.date = new Date();
  const resp = await axios.get(`${endPoint}`);
  const { data: { quote, author }, } = resp;
  obj.author = author
  obj.quote = quote
  localStorage.setItem('info', JSON.stringify(obj));
  const getInfo = JSON.parse(localStorage.getItem('info'));
  quoteText.textContent = getInfo.quote;
  quoteAuthor.textContent = getInfo.author;
}


