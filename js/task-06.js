const inputText = document.querySelector('#validation-input');
const minLength = inputText.dataset.length;

inputText.addEventListener('blur', handleInputValue);

function handleInputValue(event) {
  if (event.target.value.length < minLength && event.target.value.length > 0) {
    inputText.classList.add('invalid');
  } else if (event.target.value.length >= 6) {
    inputText.classList.replace('invalid', 'valid');
  } else {
    inputText.classList.remove('invalid');
    inputText.classList.remove('valid');
  }
}
