import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

// const refs = {
//   form: document.querySelector('.footer-form'),
//   input: document.querySelector('.footer-form-input'),
// };

// refs.form.addEventListener('submit', onSend);

// async function onSend(event) {
//   event.preventDefault();
//   const email = refs.form.email.value.trim();
//   try {
//     if (!email) {
//       showMessage('Oooops! You forgot to enter the email! 🫣');
//       return;
//     }

//     if (!isValidEmail(email)) {
//       return;
//     }

//     const data = await sendEmail(email);
//     showMessage(
//       "Thank you for subscribing! We're excited to have you on board! 🎉"
//     );
//   } catch (error) {
//     if (error.response.status === 409) {
//       showMessage('Sorry! This email has been already declarated!');
//     }
//   } finally {
//     refs.form.reset();
//   }
// }

// ----------------------------------------------------
// async function sendEmail(email) {
//   const data = await axios.post('subscription', {
//     email: email,
//   });
//   return data.data;
// }

// function isValidEmail(email) {
//   let reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

//   if (!email.match(reg)) {
//     showMessage('Please, enter the valid email!');
//     return false;
//   }

//   return true;
// }

// function showMessage(message) {
//   iziToast.show({
//     message: message,
//     backgroundColor: 'rgba(246, 246, 246, 0.8)',
//     messageColor: 'black',
//     maxWidth: 300,
//     position: 'bottomRight',
//     timeout: 4000,
//     progressBar: false,
//     transitionIn: 'bounceInBottom',
//     transitionOut: 'fadeOutRight',
//     messageSize: 14,
//   });
// }

// ----------------------

// <footer class="footer-section">
//     <div class="footer-container">
//         <div class="footer-content-wrap">
//             <div class="footer-socials-wrap">
//                 <a class="footer-logo" href="./index.html">energy.flow</a>

//                 <ul class="footer-socials-list">
//                     <li class="footer-socials-item">
//                         <a class="footer-socials-linc" href="https://www.facebook.com/goITclub" target="_blank">
//                             <svg class="footer-socials-svg" width="20" height="20">
//                                 <use href="./img/sprite.svg#icon-facebook"></use>
//                             </svg>
//                         </a>
//                     </li>
//                     <li class="footer-socials-item">
//                         <a class="footer-socials-linc" href="https://www.instagram.com/goitclub" target="_blank">
//                             <svg class="footer-socials-svg" width="20" height="20">
//                                 <use href="./img/sprite.svg#icon-instagram"></use>
//                             </svg>
//                         </a>
//                     </li>
//                     <li class="footer-socials-item">
//                         <a class="footer-socials-linc" href="https://www.youtube.com/c/GoIT" target="_blank">
//                             <svg class="footer-socials-svg" width="20" height="20">
//                                 <use href="./img/sprite.svg#icon-youtube"></use>
//                             </svg>
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             <h2 class="footer-title">Transforming your <span class="title-accent">body</span> shape with us</h2>

//             <div class="footer-form-wrap">
//                 <p class="footer-form-text">Subscribe and learn about new exercises!</p>
//                 <form class="footer-form">
//                     <label class="footer-form-label" for="user-email"></label>
//                     <input class="footer-form-input" type="email" name="email" id="user-email" placeholder="Email">
//                     <button class="footer-form-btn" type="submit">Send</button>
//                 </form>
//             </div>
//         </div>
//         <div class="footer-security-wrap">
//             <p class="footer-security-text">Energy Flow. All rights reserved.
//             </p>
//             <p class="footer-security-text">Privacy Policy
//                 /
//                 Terms of Service</p>
//         </div>

//     </div>
// </footer>
