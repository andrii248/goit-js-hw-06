const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', handleInputValue);

function handleInputValue(event) {
  const valueLength = event.currentTarget.value.length;
  const requiredLength = Number(event.currentTarget.dataset.length);

  event.currentTarget.classList.add('invalid');
  event.currentTarget.classList.remove('valid');

  if (valueLength === requiredLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  }
}

// function handleInputValue(event) {
//   if (event.target.value.length < dataLength && event.target.value.length > 0) {
//     inputText.classList.add('invalid');
//   } else if (event.target.value.length == dataLength) {
//     inputText.classList.add('valid');
//     inputText.classList.replace('invalid', 'valid');
//   } else {
//     inputText.classList.remove('invalid');
//     inputText.classList.remove('valid');
//   }
// }
