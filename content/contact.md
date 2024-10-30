---
title: "Contact"
description: "Contact me."
---

If you would like to get in touch, please fill out the form below or reach me by email at [your-email@example.com](mailto:your-email@example.com).

{{< rawhtml >}}
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