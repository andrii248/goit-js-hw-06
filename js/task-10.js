const input = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const array = [];

  for (let i = 1; i <= Number(input.value); i += 1) {
    array.push(
      `<div style="background-color: ${getRandomHexColor()}; width:${20 + i * 10}px; height:${
        20 + i * 10
      }px"></div>`
    );
  }
  boxes.insertAdjacentHTML('afterbegin', array.join(''));
}
console.log(createBoxes());
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
