let quoteText = document.querySelector('.quote-text');
let quoteAuthor = document.querySelector('.quote-author');

import axios from "axios";

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

async function fetchQuotes() {
  return await axios
    .get("quote")
    .then(({ data }) => data)
    .then(res => {
      const time = {};
      time.data = new Date
      //localStorage.setItem("time", JSON.stringify(time.getDay()));
      localStorage.setItem("data", JSON.stringify( res + time.data));
      quoteText.textContent = res.quote;
      quoteAuthor.textContent = res.author;
    })
}
const getSecond = localStorage.getItem("data")
const getsParse = JSON.parse(getSecond);
console.log(getsParse);

  const getTime = localStorage.getItem("data");
  const nowTime = new Date;
 
  if (getTime !== nowTime) {
    localStorage.removeItem("data")
    fetchQuotes()
  } else {

  }

fetchQuotes().then();