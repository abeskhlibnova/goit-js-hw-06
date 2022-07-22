const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const clickChangeColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = `${randomColor}`;
};

button.addEventListener("click", clickChangeColor);
