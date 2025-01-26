document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const successPage = document.getElementById("successPage");
  const loginBox = document.querySelector(".login-box");

  // Dummy credentials
  const validUsername = "vaultkeeper";
  const validPassword = "open123";

  if (username === validUsername && password === validPassword) {
    loginBox.classList.add("hidden");
    successPage.classList.remove("hidden");
    fetchETHPrice(); // Fetch ETH price upon successful login
  } else {
    error.textContent = "Oops! Incorrect credentials. Try again.";
  }
});
