function handleFormSubmit(e) {
  e.preventDefault();
  if (editButton.textContent === "Editar Perfil") {
    editButton.textContent = "Guardar Perfil";
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.textContent = "Editar Perfil";
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
}

function handleFirstNameChange() {
  firstNameText.textContent = firstNameInput.value;
  helloText.textContent =
    "Hola " + firstNameInput.value + " " + lastNameInput.value + "!";
}

function handleLastNameChange() {
  lastNameText.textContent = lastNameInput.value;
  helloText.textContent =
    "Hola " + firstNameInput.value + " " + lastNameInput.value + "!";
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

let form = document.getElementById("form");
let editButton = document.getElementById("editButton");
let firstNameInput = document.getElementById("firstNameInput");
let firstNameText = document.getElementById("firstNameText");
let lastNameInput = document.getElementById("lastNameInput");
let lastNameText = document.getElementById("lastNameText");
let helloText = document.getElementById("helloText");
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
