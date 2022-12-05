const categoryCount = document.querySelectorAll('.item').length;
console.log('Number of categories:', categoryCount);

const categories = document.getElementsByClassName('item');
for (const category of categories) {
      console.log('Category: ', category.querySelector('h2').innerHTML);
  console.log(`Elements: ${category.querySelectorAll('li').length}\n\n`);
}


