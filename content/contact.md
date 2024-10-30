---
title: "Contact"
description: "Contact me."
---

If you would like to get in touch, please fill out the form below or reach me by email at [your-email@example.com](mailto:your-email@example.com).

{{< rawhtml >}}
<style>
/* Inline test styling for form */
form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
form input[type="text"],
form input[type="email"],
form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}
form button[type="submit"] {
  padding: 0.75rem 1.5rem;
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<form action="https://formspree.io/f/your-form-id" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="_replyto" required>

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Send Message</button>
</form>
{{< /rawhtml >}}