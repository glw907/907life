// Select the form and its input fields
const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input, textarea");
const submitButton = form.querySelector("button[type='submit']");
const emailInput = form.querySelector("input[type='email']");

// Function to check if all fields are filled and email is valid
function checkFormCompletion() {
  // Verify each input has a value
  const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
  // Check if email format is valid
  const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value);
  // Enable or disable submit button based on completion and email validity
  submitButton.disabled = !(allFilled && emailValid);
}

// Add event listeners to each input field
inputs.forEach(input => {
  input.addEventListener("input", checkFormCompletion);
});

// Initial check in case any fields are pre-filled
checkFormCompletion();