'use strict';
import throttle from 'lodash.throttle';

const formEmail = document.querySelector('[name=email]');
const formMessage = document.querySelector('[name=message]');
const button = document.querySelector('[type=submit]');

let formData = {
  email: '',
  message: '',
};

const handleEmail = () => {
  formData['email'] = formEmail.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const handleMessage = () => {
  formData['message'] = formMessage.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

window.addEventListener('load', () => {
  if (localStorage.getItem('feedback-form-state')) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    formEmail.value = formData['email'];
    formMessage.value = formData['message'];
    console.log(formData);
  }
});

formEmail.addEventListener('input', throttle(handleEmail, 500));
formMessage.addEventListener('input', throttle(handleMessage, 500));

button.addEventListener('click', () => {
  formData = {
    email: '',
    message: '',
  };
  localStorage.removeItem('feedback-form-state');
});
