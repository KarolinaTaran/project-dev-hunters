<<<<<<< Updated upstream
const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

function modalOpenClose() {
  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  modal.addEventListener('click', event => {
    if (!event.target.classList.contains('backdrop-exercises-modal')) {
      return;
    }
    toggleModal();
  });

  document.addEventListener('keydown', closeByEsc);

=======
import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
let idExercisesModal = "64f389465ae26083f39b17a2";      // !!!взяти id з об'єкту відповіді запиту відповідної вправи в секції
openModalBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
  drawExercisesModal();
  modalClose();
});
// ---------------   functions of geting datas from server   ---------------
async function getData() {
  axios.defaults.baseURL = "https://energyflow.b.goit.study";
  return await axios.get(`/api/exercises/${idExercisesModal}`);
}
async function drawExercisesModal() {
  try {
      const response = await getData();
      console.log(response.data);
      const objDataOfExercise = response.data;
      createExersiceCard(objDataOfExercise);
  } catch(error) {
      catchError(error);
  // } finally {
  //     loader.classList.remove("loader");
  }
};
function catchError(error) {
  console.log(error);
  const errName = error.name;
  const errText = error.message;
  iziToast.error({
    position: 'topRight',
    message: `${errName}: ${errText}.`
  });
}
// ---------------   functions of opening and closing of modal   ---------------
function modalClose() {
  document.addEventListener('keydown', closeByEsc);
  closeModalBtn.addEventListener('click', closeByBtn);
  modal.addEventListener('click', closeByBackdrop);
  function closeByBtn() {
    modal.classList.remove('is-open');
  }
  function closeByBackdrop(event) {
    if (!event.target.hasAttribute('data-modal')) {
      return;
    }
    closeByBtn();
  }
>>>>>>> Stashed changes
  function closeByEsc(event) {
    if (event.key === 'Escape') {
      modal.classList.remove('is-open');
    }
  }
<<<<<<< Updated upstream

  function toggleModal() {
    modal.classList.toggle('is-open');
  }
}

modalOpenClose();
=======
}
>>>>>>> Stashed changes
