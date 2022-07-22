const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const clickChangeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = `${getRandomHexColor()}`;
};

button.addEventListener("click", clickChangeColor);
