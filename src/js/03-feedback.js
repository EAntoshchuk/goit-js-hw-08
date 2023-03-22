import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
// const STORAGE_EMAIL = 'feedback-email';
let formData = {};
const ref = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  email: document.querySelector('input'),
};

// console.log(ref.form);
// console.log(ref.textarea);
// console.log(ref.email);

ref.form.addEventListener('submit', onFormSubmit);
ref.textarea.addEventListener('input', throttle(feedbackMessage, 500));
ref.email.addEventListener('input', throttle(onEmailInput, 500));
ref.form.addEventListener('input', event => {
  // console.log(event.target.name);
  // console.log(event.target.value);
  event.target.name = inputName;
  event.target.value = inputMeassage;
});

// feedbackMessage();
// writtenEmail();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  // localStorage.removeItem(STORAGE_EMAIL);
}

function onEmailInput(event) {
  const emailName = event.target.value;
  console.log(emailName);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(emailName));
}

// function writtenEmail() {
//   const savedEmail = localStorage.getItem(STORAGE_EMAIL);
//   if (savedEmail) {
//     console.log(savedEmail);
//     ref.email.value = savedEmail;
//   }
// }
// function onTextareaInput(event) {
//   const message = event.target.value;
//   console.log(message);
//   localStorage.setItem(STORAGE_MSG, message);
// }

function feedbackMessage() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    formData = JSON.parse(savedMessage);
    // console.log(savedMessage);
    ref.inputName = formData.email;
    ref.inputMeassage = formData.message;
  }
}
