const INPUT = 'input';

const range = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

range.addEventListener(INPUT, (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
