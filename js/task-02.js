const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ul = document.getElementById("ingredients");
const liList = [];
for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.innerText = ingredient;
  liList.push(li.outerHTML);
}
ul.insertAdjacentHTML('beforeend', liList.join('\n'));
console.log(ul)