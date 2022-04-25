const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const createListElements = elements => {
  return elements.map(element => {
    const item = document.createElement('li');
    item.textContent = element;

    return item;
  });
};

const components = createListElements(ingredients);
list.append(...components);

// ======== option 1 ========

// const items = ingredients.map(ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;

//   return item;
// });

// list.append(...items);

// ======== option 2 ========

// ingredients.forEach(ingredient => {
//   let item = document.createElement('li');
//   item.textContent = ingredient;

//   list.appendChild(item);
// });
