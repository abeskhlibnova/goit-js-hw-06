const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

function offChechInputLength(event) {
  if (input.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", offChechInputLength);
