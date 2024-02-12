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
      showErrorMessage('Oooops! You forgot to enter the email!');
      return;
    }
    isValidEmail(email);
    const data = await sendEmail(email);
    showMessage(
      "Thank you for subscribing! We're excited to have you on board! 🎉"
    );
    refs.form.reset();
  } catch (error) {
    if (error.response.status === 409) {
      showErrorMessage('Sorry! This email has already been declarated!');
    }
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
  let userEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (email.match(userEmail) === null) {
    return showErrorMessage(`Please, enter the correct email!`);
  }
}

function showMessage(message) {
  iziToast.show({
    message: message,
    backgroundColor: 'rgba(246, 246, 246, 0.9)',
    messageColor: 'rgba(0, 0, 0, 0.7)',
    maxWidth: 300,
    position: 'bottomRight',
    timeout: 4000,
    progressBar: false,
    transitionIn: 'bounceInBottom',
    transitionOut: 'fadeOutRight',
    messageSize: 14,
  });
}

function showErrorMessage(message) {
  iziToast.show({
    message: message,
    backgroundColor: 'rgba(205, 92, 92, 0.5)',
    // messageColor: '#f6f6f6',
    messageColor: 'rgba(0, 0, 0, 0.8)',
    maxWidth: 300,
    position: 'bottomRight',
    timeout: 4000,
    progressBar: false,
    transitionIn: 'bounceInBottom',
    transitionOut: 'fadeOutRight',
    messageSize: 14,
  });
}
