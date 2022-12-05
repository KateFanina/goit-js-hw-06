const CLICK = 'click';
const boxes = document.getElementById('boxes');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const count = document.querySelector('input[type="number"]');
let size = 20;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
create.addEventListener(CLICK, () => {
  const divList = [];
  console.log(Number(count.value));
  for (let i = 0; i < Number(count.value); i++) {
    const div = document.createElement('div');
    div.style.width = `${size += 10}px`
    div.style.height = `${size}px`
    div.style.backgroundColor = getRandomHexColor();
    divList.push(div.outerHTML);
  }
    boxes.insertAdjacentHTML('beforeend', divList.join('\n'));
});

destroy.addEventListener(CLICK, () => {
  boxes.innerHTML = '';
  size = 20;
  count.value = '';
});
