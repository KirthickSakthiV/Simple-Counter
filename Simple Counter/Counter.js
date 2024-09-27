
let count=0;
const countDisplay = document.getElementById('count');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

increaseButton.addEventListener('click', () => {count++; updateDisplay();});

decreaseButton.addEventListener('click', () => {count--; updateDisplay();});

resetButton.addEventListener('click', () => {count = 0; updateDisplay();});

function updateDisplay() {
    countDisplay.textContent = count;
}
