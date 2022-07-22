const butMinus = document.querySelector('button[data-action="decrement"]');
const butPlus = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

const plusCountClick = () => {
  value.textContent = counterValue += 1;
  console.log(value.textContent);
};

const minusCountClick = () => {
  value.textContent = counterValue -= 1;
  console.log(value.textContent);
};

butMinus.addEventListener("click", minusCountClick);
butPlus.addEventListener("click", plusCountClick);
