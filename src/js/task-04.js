const CLICK = 'click';
let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.getElementById('value');

decrementBtn.addEventListener(CLICK,() => {
  counterValue--;
  counter.innerHTML = counterValue;
});

incrementBtn.addEventListener( CLICK,() => {
  counterValue++;
  counter.innerHTML = counterValue;
});
