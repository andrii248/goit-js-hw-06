const changeColorBtn = document.querySelector('button.change-color');
changeColorBtn.addEventListener('click', handleChangeColorBtn);

const body = document.querySelector('body');
const spanColorText = document.querySelector('span.color');

function handleChangeColorBtn() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColorText.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
