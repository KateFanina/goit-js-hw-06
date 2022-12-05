const ON_INPUT = 'input';

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
const initValue = output.innerText;

input.addEventListener(ON_INPUT, (event) => {
  if(event.currentTarget.value.length) {
    output.innerText = event.currentTarget.value;
  } else {
    output.innerText = initValue;
  }
});