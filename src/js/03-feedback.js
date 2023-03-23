import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
// const STORAGE_MSG = 'feedback-msg';
// const STORAGE_EMAIL = 'feedback-email';

const ref = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};

const formData = {};

ref.form.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

// console.log(ref.form);
// console.log(ref.textarea);
// console.log(ref.email);

ref.form.addEventListener('submit', onFormSubmit);
// ref.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// ref.input.addEventListener('input', throttle(onEmailInput, 500));

// feedbackMessage();
// writtenEmail();
fillform();

function onFormSubmit(event) {
  event.preventDefault();
  if (ref.input.value !== '' && ref.textarea.value !== '') {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
  }

  // localStorage.removeItem(STORAGE_EMAIL);
  // localStorage.removeItem(STORAGE_MSG);
}

function populateTextarea() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    ref.input.value = formData.email || '';
    ref.textarea.value = formData.message || '';
  }
}

// function onEmailInput(event) {
//   const emailName = event.target.value;
//   console.log(emailName);

//   localStorage.setItem(STORAGE_EMAIL, emailName);
// }

// function writtenEmail() {
//   const savedEmail = localStorage.getItem(STORAGE_EMAIL);
//   if (savedEmail) {
//     console.log(savedEmail);
//     ref.input.value = savedEmail;
//   }
// }

// function onTextareaInput(event) {
//   const message = event.target.value;
//   console.log(message);
//   localStorage.setItem(STORAGE_MSG, message);
// }

// function feedbackMessage() {
//   const savedMessage = localStorage.getItem(STORAGE_MSG);
//   if (savedMessage) {
//     console.log(savedMessage);
//     ref.textarea.value = savedMessage;
//   }
// }
