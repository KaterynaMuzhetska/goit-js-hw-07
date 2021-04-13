const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', changeSpanFontSize);

function changeSpanFontSize(event) {
  const inputValue = event.currentTarget.value;

  spanEl.setAttribute('style', `font-size:${inputValue}px`);
};

