const changeColorBtn = document.querySelector('button.change-color');
changeColorBtn.addEventListener('click', handleChangeColorBtn);

function handleChangeColorBtn() {
  const body = document.querySelector('body');
  const spanColorText = document.querySelector('span.color');

  body.style.backgroundColor = getRandomHexColor();
  spanColorText.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
