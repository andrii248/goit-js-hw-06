const inputRange = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');
spanText.style.fontSize = inputRange.value + 'px';
inputRange.addEventListener('input', event => {
  spanText.style.fontSize = inputRange.value + 'px';
});
