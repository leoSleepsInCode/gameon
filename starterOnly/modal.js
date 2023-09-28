function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("form[name='reserve']");
  form.addEventListener("submit", validateForm);
});

function validateForm(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  // Récupération des valeurs des champs
  let firstNameInput = document.getElementById("first");
  let lastNameInput = document.getElementById("last");
  let emailInput = document.getElementById("email");
  let quantityInput = document.getElementById("quantity");
  let radioButtonInputs = document.getElementsByName("location");
  let termsCheckbox = document.getElementById("terms");

  // Validation du champ Prénom
  firstNameInput.addEventListener("change", function() {
  let firstNameValue = firstNameInput.value.trim();
  let firstNameError = document.getElementById("firstNameError");

  if (firstNameValue.length < 2 || firstNameValue === "") {
    firstNameError.textContent = "Le champ Prénom doit comporter au moins 2 caractères";
    firstNameError.classList.add("visible");
    firstNameInput.focus();
    return false;
  } else {
    firstNameError.textContent = "";
    firstNameError.classList.remove("visible");
  }
  });

  // Validation du champ du nom de famille
  let lastNameValue = lastNameInput.value.trim();
  let lastNameError = document.getElementById("lastNameError");

  if (lastNameValue.length < 2 || lastNameValue === "") {
    lastNameError.textContent = "Le champ Nom doit comporter au moins 2 caractères";
    lastNameError.classList.add("visible");
    lastNameInput.focus();
    return false;
  } else {
    lastNameError.textContent = "";
    lastNameError.classList.remove("visible");
  }

  // Validation de l'adresse électronique
  let emailValue = emailInput.value.trim();
  let emailError = document.getElementById("emailError");
  let emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Veuillez saisir une adresse électronique valide";
    emailError.classList.add("visible");
    emailInput.focus();
    return false;
  } else {
    emailError.textContent = "";
    emailError.classList.remove("visible");

  }

  // Validation du nombre de concours
  let quantityValue = parseInt(quantityInput.value);

  if (isNaN(quantityValue)) {
    quantityInput.focus();
    return false;
  }

  // Validation du bouton radio
  let radioButtonSelected = false;

  for (var i = 0; i < radioButtonInputs.length; i++) {
    if (radioButtonInputs[i].checked) {
      radioButtonSelected = true;
      break;
    }
  }

  if (!radioButtonSelected) {
    return false;
  }

  // Validation de la case des conditions générales
  if (!termsCheckbox.checked) {
    termsCheckbox.focus();
    return false;
  }

  // Si toutes les validations sont réussies, vous pouvez soumettre le formulaire
  return true;
}