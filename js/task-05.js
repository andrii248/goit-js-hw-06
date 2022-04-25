const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', updateValue);

function updateValue(event) {
  if (event.target.value == '') {
    textOutput.textContent = 'Anonymous';
  } else {
    textOutput.textContent = event.target.value;
  }
}
