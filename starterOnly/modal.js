"use strict";

// *********** CONSTANTS ***********

const emailRegex = /^\S+@\S+\.\S+$/;

// DOM Elements
const modalButton       = document.querySelectorAll(".modal-button");
const formData          = document.querySelectorAll(".formData");
const radioButtonInputs = document.getElementsByName("location");

const modalBackground  = document.querySelector(".background");
const closeButton      = document.querySelector(".close");
const firstNameError   = document.getElementById("firstNameError");
const firstNameInput   = document.getElementById("first");
const lastNameError    = document.getElementById("lastNameError");
const lastNameInput    = document.getElementById("last");
const emailError       = document.getElementById("emailError");
const emailInput       = document.getElementById("email");
const birthdateInput   = document.getElementById("birthdate");
const birthdateError   = document.getElementById("birthdateError");
const quantityInput    = document.getElementById("quantity");
const quantityError    = document.getElementById("quantityError");
const radioButtonError = document.getElementById("radioButtonError");
const termsCheckbox1   = document.getElementById("checkbox1");
const termsError       = document.getElementById("termsError");


// *********** FUNCTIONS ***********

function editNav() {
  console.log("editNav");

 let nav = document.getElementById("myTopnav");

  if (nav.className === "topnav") {
    nav.className += "responsive";

  } else {
    nav.className = "topnav";
  }
}
/**
 * Launches the modal by setting the display property of modalbg to "block".
 */
function launchModal() {
  console.log("launchModal");

  modalBackground.style.display = "block";
}

/**
 * Closes the modal by setting the display property of the modal background to "none".
 */
function closeModal() {
  console.log("closeModal");

  modalBackground.style.display = "none";
}

/**
 * Checks the validity of the first name input field.
 *
 * @return {boolean} Returns false if the first name input is invalid, otherwise returns true.
 */
function checkFirstName() {
  console.log("checkFirstName");

  let firstNameValue = firstNameInput.value.trim();
  console.log("fisrtNameValue", firstNameValue);

  if (firstNameValue.length < 2 || firstNameValue === "") {
    firstNameError.textContent = "Votre prénom doit comporter au moins 2 caractères";
    firstNameError.classList.add("visible");
    firstNameInput.focus();
    return false;

  } else {
    firstNameError.textContent = "";
    firstNameError.classList.remove("visible");
    return true;
  }
}

firstNameInput.addEventListener("blur", function () {
  checkFirstName();
});

/**
 * Checks the last name input value.
 *
 * @return {boolean} Returns false if the last name value is invalid, otherwise returns true.
 */
function checkLastName() {
  console.log("checkLastName");

  let lastNameValue = lastNameInput.value.trim();
  console.log("lastNameValue", lastNameValue);

  if (lastNameValue.length < 2 || lastNameValue === "") {
    lastNameError.textContent = "Votre nom doit comporter au moins 2 caractères";
    lastNameError.classList.add("visible");
    lastNameInput.focus();
    return false;

  } else {
    lastNameError.textContent = "";
    lastNameError.classList.remove("visible");
    return true;
  }
}

lastNameInput.addEventListener("blur", function (event) {
  event.preventDefault();
  checkLastName();
});

/**
 * Validates an email input value.
 *
 * @return {boolean} Returns false if the email value is invalid, true otherwise.
 */
function checkEmail() {
  console.log("checkEmail");

  let emailValue = emailInput.value.trim();
  console.log("emailValue", emailValue);

  if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Veuillez saisir une adresse électronique valide";
    emailError.classList.add("visible");
    emailInput.focus();
    return false;
  } 
  
  else {
    emailError.textContent = "";
    emailError.classList.remove("visible");
    return true;
  }
}

emailInput.addEventListener("blur", function () {
  checkEmail();
})
/**
 * Check if the birthdate value is valid.
 *
 * @return {boolean} Returns false if the birthdate value is empty, otherwise returns true.
 */
function checkBirthdate () {
  console.log("checkBirthdate");

  let birthdateValue = birthdateInput.value.trim();
  console.log("birthdateValue", birthdateValue);

  if (birthdateValue === "") {
    birthdateError.textContent = "Veuillez saisir une date de naissance";
    birthdateError.classList.add("visible");
    birthdateInput.focus();
    return false;
  } 
  
  else {
    birthdateError.textContent = "";
    birthdateError.classList.remove("visible");
    return true;
  }
}

/**
 * Checks the quantity value entered by the user.
 *
 * @return {boolean} Returns false if the quantity value is not a number, otherwise returns true.
 */
function checkQuantity() {
  console.log("checkQuantity");

  let quantityValue = parseInt(quantityInput.value);
  console.log("quantityValue", quantityValue);

  if (isNaN(quantityValue)) {
    quantityError.textContent = "Vous devez saisir un nombre de tournoi ou mettre 0 si vous n'avez jamais participé";
    quantityError.classList.add("visible");
    quantityInput.focus();
    return false;
  } 
  
  else {
    quantityError.textContent = "";
    quantityError.classList.remove("visible");
    return true;
  }
}

/**
 * Checks if a radio button is selected.
 *
 * @return {boolean} Returns false if no radio button is selected, otherwise true.
 */
function checkRadioButton() {
  console.log("checkRadioButton");

  let radioButtonSelected = true;
  console.log("radioButtonSelected", radioButtonSelected);

  for (let i = 0; i < radioButtonInputs.length; i++) {
    if (radioButtonInputs[i].checked) {
      radioButtonSelected = true;
      break;
    }
  }

  if (!radioButtonSelected) {
    radioButtonError.textContent = "Veuillez choisir une ville";
    radioButtonError.classList.add("visible");
    radioButtonInputs[0].focus();
    return false;
  } 
  
  else {
    radioButtonError.textContent = "";
    radioButtonError.classList.remove("visible");
    return true;
  }
}
/**
 * Check if the terms checkbox is checked.
 *
 * @return {boolean} False if the terms checkbox is not checked, true otherwise.
 */
function checkTerms() {
  console.log("checkTerms");

  let termCheckbox = termsCheckbox1.checked;
  console.log("termCheckbox", termCheckbox);

  if (!termCheckbox) {
    termsError.textContent = "Veuillez accepter les conditions d'utilisation";
    termsError.classList.add("visible");
    termsCheckbox1.focus();
    return false;
  } 
  
  else {
    termsError.textContent = "";
    termsError.classList.remove("visible");
    return true;
  }
}

/**
 * Validates the form before submission.
 *
 * @param {event} event - The event triggering the form validation.
 * @return {boolean} Returns true if all form fields are valid; otherwise, false.
 */
function validateForm(event) {
  console.log("validateForm");
  event.preventDefault();

  const isFirstNameValid = checkFirstName();
  const isLastNameValid = checkLastName();
  const isEmailValid = checkEmail();
  const isBirthdateValid = checkBirthdate();
  const isQuantityValid = checkQuantity();
  const isRadioButtonValid = checkRadioButton();
  const isTermsValid = checkTerms();

  console.log("isFirstNameValid", isFirstNameValid);
  console.log("isLastNameValid", isLastNameValid);
  console.log("isEmailValid", isEmailValid);
  console.log("isBirthdateValid", isBirthdateValid);
  console.log("isQuantityValid", isQuantityValid);
  console.log("isRadioButtonValid", isRadioButtonValid);
  console.log("isTermsValid", isTermsValid);

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isQuantityValid &&
    isRadioButtonValid &&
    isTermsValid
  );
}

/**
 * Shows a thank you message to the user.
 *
 */
function showThankYouMessage() {
  console.log("showThankYouMessage");

  let thankYouMessage = document.createElement("p");
  thankYouMessage.classList.add("thank-you-message");
  thankYouMessage.textContent = "Merci pour votre réservation!";

  let formData = document.querySelector("form[name='reserve']");
  formData.parentNode.replaceChild(thankYouMessage, formData);
}

//************* MAIN *********** */

document.addEventListener("DOMContentLoaded", function () {
  modalButton.forEach((button) => button.addEventListener("click", launchModal));
  closeButton.addEventListener("click", closeModal);

  let form = document.querySelector("form[name='reserve']");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (validateForm(event)) {
      form.submit(); 

      showThankYouMessage(); 
    }
  });
});

