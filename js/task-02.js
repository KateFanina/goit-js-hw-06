const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ul = document.getElementById("ingredients");
for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.innerText = ingredient;
  ul.appendChild(li);
}
console.log(ul)