import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
const STORAGE_MSG = 'feedback-msg';
const STORAGE_EMAIL = 'feedback-email';

const ref = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};
const emailInputEL = document.querySelector('input[type="email"]');
const textareaMessageEL = document.querySelector('textarea[name="message"]');
const formData = {};
ref.form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  // localStorage.setItem(
  //   STORAGE_KEY,
  //   JSON.stringify({
  //     ...formData,
  //     email: emailInputEL.value,
  //     message: textareaMessageEL.value,
  //   })
  // );
});

// console.log(ref.form);
// console.log(ref.textarea);
// console.log(ref.email);

ref.form.addEventListener('submit', onFormSubmit);
ref.textarea.addEventListener('input', throttle(onTextareaInput, 500));
ref.input.addEventListener('input', throttle(onEmailInput, 500));

feedbackMessage();
writtenEmail();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_EMAIL);
  localStorage.removeItem(STORAGE_MSG);
}

function onEmailInput(event) {
  const emailName = event.target.value;
  console.log(emailName);

  localStorage.setItem(STORAGE_EMAIL, emailName);
}

function writtenEmail() {
  const savedEmail = localStorage.getItem(STORAGE_EMAIL);
  if (savedEmail) {
    console.log(savedEmail);
    ref.input.value = savedEmail;
  }
}

function onTextareaInput(event) {
  const message = event.target.value;
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
