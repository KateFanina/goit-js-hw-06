const CHANGE = 'change';

const range = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

range.addEventListener(CHANGE, (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
