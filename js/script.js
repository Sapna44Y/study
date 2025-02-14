document
  .getElementById("lead-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    let formMessage = document.getElementById("form-message");

    // Basic validation
    if (name === "" || email === "" || phone === "") {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
      formMessage.classList.remove("hidden");
      return;
    }

    // Phone number validation (only digits, 10-15 characters)
    let phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
      formMessage.textContent = "Please enter a valid phone number.";
      formMessage.style.color = "red";
      formMessage.classList.remove("hidden");
      return;
    }

    // Success message
    formMessage.textContent = "Form Submitted Successfully!";
    formMessage.style.color = "#00FF00";
    formMessage.style.fontWeight = "bold"; // Corrected property name and value
    formMessage.classList.remove("hidden");

    // Optionally reset the form
    document.getElementById("lead-form").reset();
  });

////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
