const inputText = document.querySelector('#validation-input');
const dataLength = inputText.dataset.length;

inputText.addEventListener('blur', handleInputValue);

function handleInputValue(event) {
  if (event.target.value.length < dataLength && event.target.value.length > 0) {
    inputText.classList.add('invalid');
  } else if (event.target.value.length == dataLength) {
    inputText.classList.add('valid');
    inputText.classList.replace('invalid', 'valid');
  } else {
    inputText.classList.remove('invalid');
    inputText.classList.remove('valid');
  }
}
