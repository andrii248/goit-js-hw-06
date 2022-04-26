const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;

btnDown.addEventListener('click', () => {
  counterValue -= 1;
  updateCounter();
});

btnUp.addEventListener('click', () => {
  counterValue += 1;
  updateCounter();
});

function updateCounter() {
  counter.textContent = counterValue;
}
