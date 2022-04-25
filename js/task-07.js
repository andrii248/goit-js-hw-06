const inputRange = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

inputRange.addEventListener('input', event => {
  spanText.style.fontSize = inputRange.value + 'px';
});
