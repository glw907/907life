const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input, textarea");
const submitButton = form.querySelector("button[type='submit']");

// Function to check if all fields are filled and enable the submit button
function checkFormCompletion() {
  const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
  submitButton.disabled = !allFilled;
  console.log("Form status:", allFilled ? "Complete" : "Incomplete");
}

inputs.forEach(input => {
  input.addEventListener("input", checkFormCompletion);
});

checkFormCompletion();