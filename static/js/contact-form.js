document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  if (form) {
    const inputs = form.querySelectorAll("input, textarea");
    const submitButton = form.querySelector("button[type='submit']");

    if (inputs.length > 0) {
      function checkFormCompletion() {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
        submitButton.disabled = !allFilled;
        console.log("Form status:", allFilled ? "Complete" : "Incomplete");
      }

      inputs.forEach(input => {
        input.addEventListener("input", checkFormCompletion);
      });

      checkFormCompletion();
    } else {
      console.error("No input fields found in the form.");
    }
  } else {
    console.error("Form element with ID 'contact-form' not found.");
  }
});