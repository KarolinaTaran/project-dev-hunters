import axios from 'axios';
import { idExercisesModal } from './exercises-modal';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://energyflow.b.goit.study/api/exercises';
const modalRatingMenu = document.querySelector('.rating-form-container');
const closeButtonRating = modalRatingMenu.firstElementChild;
const modal = document.querySelector('.exercises-modal');
const ratingForm = document.querySelector('.rating-form');
const radioButtonsContainer = document.querySelector('.radios');
const starsContainer = document.querySelector('.stars-form-container');
let openModalButton;

radioButtonsContainer.addEventListener('click', fillStars);
closeButtonRating.addEventListener('click', closeRatingOpenModal);
ratingForm.addEventListener('submit', ratingFormProcessing);

export function chooseModalCloseButton() {
  openModalButton = document.querySelector('.exercises-modal-button-rating');
  openModalButton.addEventListener('click', closeModalOpenRating);
}

function closeRatingOpenModal() {
  modal.classList.remove('display-none-style');
  modalRatingMenu.classList.add('display-none-style');
}

function closeModalOpenRating() {
  modal.classList.add('display-none-style');
  modalRatingMenu.classList.remove('display-none-style');
}
//
//
function fillStars(event) {
  if (event.target.nodeName !== 'INPUT') return;

  const tempArrayOfStars = [...starsContainer.children];
  tempArrayOfStars.forEach(e => {
    e.classList.remove('fill-gold');
  });

  const count = Number(event.target.dataset.rate);
  for (let i = 0; i < count; i++) {
    tempArrayOfStars[i].classList.add('fill-gold');
  }
  radioButtonsContainer.previousElementSibling.textContent = count + '.0';
}
//
//
function formReset() {
  const tempArrayOfRating = [...ratingForm.elements.rating];
  tempArrayOfRating.forEach(e => {
    e.checked = false;
  });
  const tempArrayOfStars = [...starsContainer.children];
  tempArrayOfStars.forEach(e => {
    e.classList.remove('fill-gold');
  });
  ratingForm.elements.email.value = '';
  ratingForm.elements.comment.value = '';
  radioButtonsContainer.previousElementSibling.textContent = '0.0';
}
//

async function ratingFormProcessing(event) {
  event.preventDefault();
  const arrayOfFlags = [...ratingForm.elements.rating];
  const [objOfFlag] = arrayOfFlags.filter(flag => {
    if (flag.checked === true) return true;
  });

  const {
    dataset: { rate: rateByUser },
  } = objOfFlag;
  const userEmail = ratingForm.elements.email.value;
  const userComment = ratingForm.elements.comment.value;
  try {
    if (!isValidEmail(userEmail)) {
      throw new Error(`Please, enter the correct email!`);
    }

    const respOnRate = await axios.patch(
      `${BASE_URL}/${idExercisesModal}/rating`,
      {
        rate: Number(rateByUser),
        email: userEmail,
        review: userComment,
      }
    );
    iziToast.success({
      position: 'topRight',
      message:
        'Thank you for your rating. Your opinion is very important to us.',
    });
    closeRatingOpenModal();
    formReset();
  } catch (error) {
    console.dir(error);
    if (error.message === 'Please, enter the correct email!') {
      iziToast.error({
        position: 'topRight',
        message: `${error}`,
      });
      return;
    }
    if (error.response.status === 409) {
      iziToast.info({
        position: 'topRight',
        message: `Thank you, but your feedback has already been considered.`,
      });
      formReset();
      return;
    }

    iziToast.error({
      position: 'topRight',
      message: `${error.name}: ${error.message}.`,
    });
    return;
  }
}

function isValidEmail(email) {
  let userEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (email.match(userEmail) === null) {
    return false;
  }
  return true;
}
