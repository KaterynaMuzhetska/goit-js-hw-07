const input = document.querySelector('#validation-input');

const num = +input.dataset.length;

input.addEventListener('blur', onCheckValue);
input.addEventListener('focus', onFocus);

function onFocus() {
  input.classList.remove('valid', 'invalid');
}

function onCheckValue() {
  if (input.value.length !== num) {
    input.classList.add('invalid');
  } else {
    input.classList.add('valid');
  }
}