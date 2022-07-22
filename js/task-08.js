const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    return alert(
      "Усі поля є обов'язковими для заповнення! Будь ласка, заповніть усі поля!"
    );
  }
  console.log(data);
  event.currentTarget.reset();
}
