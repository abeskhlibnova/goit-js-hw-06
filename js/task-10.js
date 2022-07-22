const number = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxesArea = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = number.value;
  const sizeBox = 30;
  for (let i = 0; i < amount; i += 1) {
    const nextBoxSize = sizeBox + i * 10;
    const box = document.createElement("div");
    box.style.height = nextBoxSize + "px";
    box.style.width = nextBoxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";
    boxesArea.append(box);
  }
}

function destroyBoxes() {
  number.value = "";
  boxesArea.innerHTML = "";
}

create.addEventListener("click", createBoxes);

destroy.addEventListener("click", destroyBoxes);
