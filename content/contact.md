---
title: "Contact"
description: "Contact me."
---

If you can fill out the form below if you’d like to contact me via email, and you can also find me on Bluesky at [@glw907.bsky.social](https://bsky.app/profile/glw907.bsky.social).

{{< rawhtml >}}
<form action="https://formspree.io/f/your-form-id" method="POST" id="contact-form">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="_replyto" required />

  <label for="subject">Subject:</label>
  <input type="text" id="subject" name="subject" required />

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit" disabled>Send Message</button>
</form>
<p>All fields are required.</p>
{{< /rawhtml >}}