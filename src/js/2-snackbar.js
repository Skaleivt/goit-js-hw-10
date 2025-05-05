

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const btn = document.querySelector('#form-btn');

const delayInput = document.querySelector('input[name="delay"]');


function getRandom(radioBtn, delays) {
  const message = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioBtn === "fulfilled") {
        resolve(`Fulfilled promise in ${delays}ms`);
      } else {
        reject(`Rejected promise in ${delays}ms`);
      }
    }, delays);
  });
  return message;
}


btn.addEventListener('click', (event) => {
   event.preventDefault();

  const selectedRadio = document.querySelector('input[name="state"]:checked');
  const delay = Number(delayInput.value);

  if (!selectedRadio || isNaN(delay)) {
    iziToast.error({
      message: 'Please select a state and enter a valid delay.',
      position: 'topRight'
      
    });
    return;
  }
  
  const state = selectedRadio.value;
  getRandom(state, delay)
  .then(message => {
    iziToast.success({
      message: message,
      messageColor: '#fff',
    messageSize: '16px',
      backgroundColor: ' #59a10d',
      iconUrl: './img/webp/bi_check2-circle.svg',
      iconColor: '#fff',
      position: 'topRight'
      });
      
  }).catch(message => {
    iziToast.error({
      message: message,
      messageColor: '#fff',
    messageSize: '16px',
      backgroundColor: '#ef4040',
      iconUrl: './img/webp/bi_x-octagon.svg',
      iconColor: '#fff',
      position: 'topRight'
      });
  });
})