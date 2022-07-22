const itemElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElem.length}`);

itemElem.forEach((item) =>
  console.log(`Category: ${item.querySelector("h2").textContent}
Elements: ${item.querySelector("ul").children.length}`)
);
