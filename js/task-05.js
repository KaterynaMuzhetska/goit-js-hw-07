const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', onInputChange);

function onInputChange(event) {
  let inputText = event.currentTarget.value;

  if (inputText == '') {
    outputValue.textContent = 'незнакомец';
  } else {
    outputValue.textContent = inputText;
  }
}