const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const listEl = document.querySelector(`#ingredients`);
const ingredientsEl = [];

for (const ingredient of ingredients) {
  let itemEl = document.createElement("li");
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add("item");
  ingredientsEl.push(itemEl);
}
listEl.append(...ingredientsEl);
