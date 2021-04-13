const counterDiv = document.querySelector('#counter');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const scoreboard = document.querySelector('#value');

let counterValue = parseInt(scoreboard.textContent);

incrementBtn.addEventListener('click', handleIncrementButton);

function handleIncrementButton( ) {
    counterValue += 1;
    scoreboard.textContent = counterValue;
}

decrementBtn.addEventListener('click', handleDecrementButton);

function handleDecrementButton( ) {
    counterValue -= 1;
    scoreboard.textContent = counterValue;
}

