// DeadSeriousNutrition.com — temporary site scripts

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Newsletter / notify-me forms: intercept submit, show a thank-you message.
  document.querySelectorAll("form[data-notify-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-note");
      var button = form.querySelector("button");
      if (button) {
        button.textContent = "Thanks — you're on the list!";
        button.disabled = true;
      }
      if (note) {
        note.textContent = "We'll email you the moment DeadSeriousNutrition.com goes live.";
      }
      form.reset();
    });
  });

  // Contact form placeholder (no backend yet on this temporary site).
  var contactForm = document.querySelector("form[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = contactForm.querySelector(".form-status");
      if (status) {
        status.textContent = "Thanks for reaching out! Our full site (with live contact handling) is launching soon — in the meantime, email us directly at hello@deadseriousnutrition.com.";
      }
      contactForm.reset();
    });
  }
});
