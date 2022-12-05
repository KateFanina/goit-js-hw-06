const CLICK = 'click';
const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

button.addEventListener(CLICK, () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.innerText = color;
})
