import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

const refs = {
  form: document.querySelector('.footer-form'),
  input: document.querySelector('.footer-form-input'),
};

refs.form.addEventListener('submit', onSend);

async function onSend(event) {
  event.preventDefault();
  const email = refs.form.email.value.trim();
  try {
    if (!email) {
      showMessage('Oooops! You forgot to enter the email! 🫣');
      return;
    }

    if (!isValidEmail(email)) {
      return;
    }

    const data = await sendEmail(email);
    showMessage(
      "Thank you for subscribing! We're excited to have you on board! 🎉"
    );
  } catch (error) {
    if (error.response.status === 409) {
      showMessage('Sorry! This email has been already declarated!');
    }
  } finally {
    refs.form.reset();
  }
}

// ----------------------------------------------------
async function sendEmail(email) {
  const data = await axios.post('subscription', {
    email: email,
  });
  return data.data;
}

function isValidEmail(email) {
  let reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!email.match(reg)) {
    showMessage('Please, enter the valid email!');
    return false;
  }
  return true;
}

function showMessage(message) {
  iziToast.show({
    message: message,
    backgroundColor: 'rgba(246, 246, 246, 0.8)',
    messageColor: 'black',
    maxWidth: 300,
    position: 'bottomRight',
    timeout: 4000,
    progressBar: false,
    transitionIn: 'bounceInBottom',
    transitionOut: 'fadeOutRight',
    messageSize: 14,
  });
}
