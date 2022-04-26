const listOfCategories = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach(element => {
  const categoryHeader = element.querySelector('h2');
  console.log(`Category: ${categoryHeader.textContent}`);

  const categoryItems = categoryHeader.nextElementSibling;
  const numberOfCategoryItems = categoryItems.children;
  console.log(`Elements: ${numberOfCategoryItems.length}`);
});

// =============== with counter ==================
// for (let i = 0; i < listOfCategories.length; i += 1) {
//   const categoryHeader = listOfCategories[i].querySelector('h2');
//   //   another option for categoryHeader receiving
//   //   const categoryHeader = listOfCategories[i].firstElementChild;

//   console.log(`Category: ${categoryHeader.textContent}`);

//   const categoryItems = categoryHeader.nextElementSibling;
//   const numberOfCategoryItems = categoryItems.children;
//   console.log(`Elements: ${numberOfCategoryItems.length}`);
// }
