document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formMessage").textContent = "Thank you for your message! We'll get back to you soon.";
    this.reset();
  } else {
    document.getElementById("formMessage").textContent = "Please fill in all fields.";
  }
});
