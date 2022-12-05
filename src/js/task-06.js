const BLUR = 'blur';
const INVALID = 'invalid';
const VALID = 'valid';

const input =  document.querySelector('input');
const dataLength = input.getAttribute('data-length');

input.addEventListener(BLUR, (event) => {
  const  textLength = event.currentTarget.value.length;
  if(+dataLength !== textLength){
    if (input.classList.contains(VALID)) {
      input.classList.replace(VALID, INVALID);
    } else if (!input.classList.contains(INVALID)) {
      input.classList.add(INVALID);
    }
  } else {
    if (input.classList.contains(INVALID)) {
      input.classList.replace(INVALID, VALID);
    } else if (!input.classList.contains(VALID)) {
      input.classList.add(VALID);
    }
  }
});