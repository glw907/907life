document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  if (form) {
    const inputs = form.querySelectorAll("input, textarea");
    const submitButton = form.querySelector("button[type='submit']");
    const emailInput = form.querySelector("input[type='email']");

    function checkFormCompletion() {
      const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
      const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value);
      submitButton.disabled = !(allFilled && emailValid);

      if (!allFilled) {
        displayMessage("Please fill out all fields.");
      } else if (!emailValid) {
        displayMessage("Please enter a valid email address.");
      } else {
        clearMessage();
      }
    }

    function displayMessage(message) {
      let messageEl = document.getElementById("form-message");
      if (!messageEl) {
        messageEl = document.createElement("div");
        messageEl.id = "form-message";
        messageEl.style.color = "red";
        messageEl.style.marginTop = "0.5rem";
        form.appendChild(messageEl);
      }
      messageEl.textContent = message;
    }

    function clearMessage() {
      const messageEl = document.getElementById("form-message");
      if (messageEl) {
        messageEl.textContent = "";
      }
    }

    inputs.forEach(input => {
      input.addEventListener("input", checkFormCompletion);
    });

    checkFormCompletion();
  }
});