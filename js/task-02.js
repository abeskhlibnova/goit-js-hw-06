const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsToLi = document.querySelector("#ingredients");

const elem = ingredients.map((ingredient) => {
  const createLi = document.createElement("li");
  createLi.textContent = ingredient;
  createLi.classList.add("item");

  return createLi;
});
console.log(elem);
ingredientsToLi.append(...elem);
