import throttle from 'lodash.throttle';

const STORAGE_MSG = 'feedback-msg';
const STORAGE_EMAIL = 'feedback-email';

const ref = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  email: document.querySelector('input'),
};

// console.log(ref.form);
// console.log(ref.textarea);
console.log(ref.email);

ref.form.addEventListener('submit', onFormSubmit);
ref.textarea.addEventListener('input', throttle(onTextareaInput, 500));
ref.email.addEventListener('input', throttle(onEmailInput, 500));

feedbackMessage();
writtenEmail();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_MSG);
  localStorage.removeItem(STORAGE_EMAIL);
}

function onEmailInput(event) {
  const emailName = event.currentTarget.value;
  console.log(emailName);

  localStorage.setItem(STORAGE_EMAIL, emailName);
}

function writtenEmail() {
  const savedEmail = localStorage.getItem(STORAGE_EMAIL);
  if (savedEmail) {
    console.log(savedEmail);
    ref.email.value = savedEmail;
  }
}

function onTextareaInput(event) {
  const message = event.currentTarget.value;
  console.log(message);
  localStorage.setItem(STORAGE_MSG, message);
}

function feedbackMessage() {
  const savedMessage = localStorage.getItem(STORAGE_MSG);
  if (savedMessage) {
    console.log(savedMessage);
    ref.textarea.value = savedMessage;
  }
}
