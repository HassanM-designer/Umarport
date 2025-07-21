// Simple form alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent! Umar will get back to you.");
      form.reset();
    });
  }
});