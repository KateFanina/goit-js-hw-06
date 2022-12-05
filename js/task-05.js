const KEY_DOWN = 'keydown';

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
const initValue = output.innerText;

input.addEventListener(KEY_DOWN, (event) => {
  if(event.currentTarget.value.length) {
    output.innerText = event.currentTarget.value;
  } else {
    output.innerText = initValue;
  }
});