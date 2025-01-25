document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const successPage = document.getElementById("successPage");

  // Simple validation: Replace these with your credentials
  const validUsername = "admin";
  const validPassword = "password123";

  if (username === validUsername && password === validPassword) {
    document.querySelector(".login-container").classList.add("hidden");
    successPage.classList.remove("hidden");
  } else {
    error.textContent = "Invalid username or password. Please try again.";
  }
});
